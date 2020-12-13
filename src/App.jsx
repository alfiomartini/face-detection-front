import { React, Component } from 'react';
import './App.css';
import ImageForm from './components/ImageForm.jsx';
import Rank from './components/Rank.jsx';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition.jsx'
import Signin from './components/auth/Signin.jsx';
import Signup from './components/auth/Signup.jsx';
import Navbar from './components/Navbar';
import Clarifai from 'clarifai';
import { app, particlesParams, initState } from './Consts';

class App extends Component{
  constructor(){
    super();
    this.state =  initState;
  }

  loadUser = (user) => {
    initState.user = user;
    this.setState(initState);
  }

  componentDidMount(){
    fetch('http://localhost:3100')
      .then(resp => resp.json())
      .then(data => console.log(data))
  }

  calcFaceLocation = (data) => {
    const { top_row, 
            left_col, 
            right_col, 
            bottom_row } = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImg');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width, height);
    // this object mimics how position works in css
    // see: https://css-tricks.com/almanac/properties/t/top-right-bottom-left/
    return {
      left : left_col * width,
      top : top_row * height,
      right: width - (right_col * width),
      bottom : height - (bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    // console.log('box', box);
    this.setState({box:box});
  }

  updateRank = () => {
    const { user } = this.state;
    fetch(`http://localhost:3100/image`, {
      method:'put',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
       email:user.email 
      })
    })
      .then (resp => resp.json())
      .then (count => {
        if (count){
          // console.log('count', count);
          this.setState(Object.assign(this.state.user,{entries:count}));
        }
      })
      .catch(error => console.log(error))
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  } 

  onSubmit = (event) => {
    this.setState({imageURL: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(resp => {
        const box = this.calcFaceLocation(resp);
        this.displayFaceBox(box);
        this.updateRank();
        // 'https://samples.clarifai.com/face-det.jpg')
        // console.log(resp);
        // console.log(resp.outputs[0].data.regions[0].region_info.bounding_box);
        // resp.outputs[0].data.regions.forEach(region => {
        //    console.log(region.region_info.bounding_box);
        // });
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    // console.log('state', this.state);
    this.setState({route:route});
  }

  render(){
    const route = this.state.route;
    return (
      <div className="App">
        <Particles className='particles'
                params={particlesParams}
        />
        <Navbar route={this.state.route} onRouteChange={this.onRouteChange}/>
        {
          route === 'signin' &&  <Signin onRouteChange={this.onRouteChange} 
                                  loadUser={this.loadUser} />
        }
        {
          route === 'signup' && <Signup onRouteChange={this.onRouteChange} 
                                loadUser={this.loadUser} />
        }
          
         {
            route === 'home' &&
            <div>
                <Rank name={this.state.user.name} rank={this.state.user.entries}/>
                <ImageForm onInputChange = {this.onInputChange} onSubmit = {this.onSubmit}/>
                {
                  this.state.imageURL && 
                  <FaceRecognition imageURL = {this.state.imageURL} box = {this.state.box} />
                }
            </div>
        }
      </div>
    );
  }
}

export default App;
