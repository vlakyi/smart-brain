import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Modal from './components/Modal/Modal';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
const initialState = {
    input: '',
    imageUrl: '',
    box : {},
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    },
    isModalOpen: false
}
class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    const {input, user} = this.state;
    if(input) {
      this.setState({imageUrl: input});
      fetch('https://secure-bastion-14247.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            input: input
            })
          })
          .then(response => response.json())
          .then(response => {
            if (response) {
              fetch('https://secure-bastion-14247.herokuapp.com/image', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                    id: user.id
              })
            })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(user, {entries: count}))     // to not change user object, but just paramert we use this Object.assign(object, {property: value})
            })
            .catch(err => {
              this.setState({isModalOpen: true})
              console.log(err)
            })
          }
              this.displayFaceBox(this.calculateFaceLocation(response))
            })
          .catch(err => {
            this.setState({isModalOpen: true})
            console.log(err)
          })
    }
    else {
      this.setState({isModalOpen: true})
      console.log('empty url');
    }
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  closeModal = () => {
    this.setState({isModalOpen: false});
}

  render() {
   const {isSignedIn, imageUrl, route, box} = this.state;
    return (                        // not best way, but it's more for test
      <div className="App">
        <Particles className="particles"
                params={particlesOptions}
                />
          <Navigation isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange}/>
          {route === 'home'
          ? <div> 
                <Modal headerText='Wrong Image Url' mainText="Please, use correct image url and try again" buttonText="Try Again" isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}/>
                <Logo/>
                <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
                <FaceRecognition box={box} imageUrl = {imageUrl} />
          </div>
          : (
            route === 'signin' || route === 'signout'
            ? <Signin loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
            : <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
          ) 
          }
      </div>
    );
  }
}
export default App;
