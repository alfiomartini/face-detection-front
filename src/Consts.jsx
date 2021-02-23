 
const API_URL = 'https://facedet-api.herokuapp.com'

// development API_URL
// const API_URL = 'http://localhost:3100'

const initState = {
  // input and imageURL contain the same data
  input:'',
  imageURL:'',
  loaded:false,
  box: {},
  boxes:[],
  route: 'signin',
  user:{
    id:0,
    name:'',
    email:'',
    entries:0,
    joined:''
  }
}

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

export { particlesParams, initState, API_URL }