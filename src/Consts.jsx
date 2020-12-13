import Clarifai from 'clarifai';

const initState = {
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

export { app, particlesParams, initState}