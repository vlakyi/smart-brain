import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

import './App.css';

import {
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import Homepage from './components/HomePage/HomePage';

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
  box: {},
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
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
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
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    const { input, user } = this.state;

    if (input) {

      let imageUrlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
      if (!imageUrlRegex.test(input)) {
        this.setState({ isModalOpen: true });
        return;
      }

      this.setState({ imageUrl: input });
      fetch('https://secure-bastion-14247.herokuapp.com/imageurl', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: input
        })
      })
        .then(response => response.json())
        .then(response => {
          if (response) {
            fetch('https://secure-bastion-14247.herokuapp.com/image', {
              method: 'put',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: user.id
              })
            })
              .then(response => response.json())
              .then(count => {
                this.setState(Object.assign(user, { entries: count }))     // to not change user object, but just paramert we use this Object.assign(object, {property: value})
              })
              .catch(err => {
                this.setState({ isModalOpen: true })
                console.log(err)
              })
          }
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => {
          this.setState({ isModalOpen: true })
          console.log(err)
        })
    }
    else {
      this.setState({ isModalOpen: true })
    }
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }

  signOut = () => {
    if (this.props.location.pathname === '/smartbrain/home') {
      this.setState(initialState)
    }
  }

  render() {
    const { imageUrl, box, user: { id, name, entries }, isModalOpen } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation signOut={this.signOut} />
        <Switch>
          <Route path='/smartbrain/home' render={() => {
            if (id !== '') {
              return <Homepage name={name} entries={entries} imageUrl={imageUrl} box={box} isModalOpen={isModalOpen} closeModal={this.closeModal} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            }
            else {
              return <Redirect to='/smartbrain/signin' />
            }
          }}>
          </Route>

          <Route path='/smartbrain/signin' render={({ history }) => (
            <Signin loadUser={this.loadUser} history={history} />
          )}>
          </Route>

          <Route exact path='/smartbrain/'>
            <Redirect to='/smartbrain/signin' />
          </Route>

          <Route path='/smartbrain/register'>
            <Register loadUser={this.loadUser} history={this.props.history}/>
          </Route>
          <Route render={() => <Redirect to={{ pathname: "/smartbrain/signin" }} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
