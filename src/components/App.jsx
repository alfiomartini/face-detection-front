import React from 'react';
import './App.css';
import Navigation from './Navigation.jsx';
import Logo from './Logo.jsx';
import ImageForm from './ImageForm.jsx';
import Rank from './Rank.jsx';
import Particles from 'react-particles-js';

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

function App() {
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
       <ImageForm />
       {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
