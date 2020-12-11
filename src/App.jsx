import { React, Component } from 'react';
import './App.css';
import Navigation from './components//Navigation.jsx';
import ImageForm from './components/ImageForm.jsx';
import Rank from './components/Rank.jsx';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition.jsx'
import Signin from './components/auth/Signin.jsx';
import Signup from './components/auth/Signup.jsx';
import Navbar from './components/Navbar'

const app = new Clarifai.App(
  // have to save this in an environment variable
  // https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
  // https://create-react-app.dev/docs/adding-custom-environment-variables/
  {
    apiKey: '5e80f6ee89054099babe7674fb1c7dcd'
  }
)

const particlesParams = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 120,
    }
  }
}

class App extends Component{
  constructor(){
    super();
    this.state = {
      // input and imageURL contain the same data
      input:'',
      imageURL:'',
      box: {},
      route: 'signin',
      user:{
        id:0,
        name:'',
        email:'',
        entries:0,
        joined:''
      }
    }
  }

  loadUser = (user) => {
    this.setState({user:user});
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
                <FaceRecognition imageURL = {this.state.imageURL} box = {this.state.box} />
            </div>
        }
      </div>
    );
  }
}

export default App;
