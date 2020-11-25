import { React, Component } from 'react';
import './App.css';
import Navigation from './Navigation.jsx';
import Logo from './Logo.jsx';
import ImageForm from './ImageForm.jsx';
import Rank from './Rank.jsx';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './FaceRecognition.jsx'

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
      input:'',
      imageURL:''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  } 

  onSubmit = (event) => {
    console.log('click', event.target);
    this.setState({imageURL: this.state.input});
    app.models
      .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        Clarifai.FACE_DETECT_MODEL,
        // 'https://samples.clarifai.com/face-det.jpg')
        this.state.input)
      .then(response => {
        console.log('hi', response);
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
                params={particlesParams}
        />
        <div className='header'>
          <Logo />
          <Navigation /> 
        </div>
        <Rank />
        <ImageForm onInputChange = {this.onInputChange} onSubmit = {this.onSubmit}/>
        <FaceRecognition imageURL = {this.state.imageURL} />
      </div>
    );
  }
}

export default App;
