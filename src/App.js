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

      let imageUrlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
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
      console.log('empty url');
    }
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }

  signOut = () => {
    console.log(this.signOut);
    if (this.props.location.pathname === '/home') {
      this.setState(initialState)
    }
  }

  render() {
    console.log(this.state);
    const { imageUrl, box, user: { id, name, entries }, isModalOpen } = this.state;
    // const homepageProps = [name, entries, imageUrl, box];
    console.log(this.props);
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation signOut={this.signOut} />
        <Switch>
          <Route path='/home' render={() => {
            if (id !== '') {
              return <Homepage name={name} entries={entries} imageUrl={imageUrl} box={box} isModalOpen={isModalOpen} closeModal={this.closeModal} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            }
            else {
              return <Redirect to='/signin' />
            }
          }}>
          </Route>

          <Route path='/signin' render={({ history }) => (
            <Signin loadUser={this.loadUser} history={history} />
          )}>
          </Route>

          <Route exact path={`/`}>
            <Redirect to={`/signin`} />
          </Route>

          <Route path='/register'>
            <Register loadUser={this.loadUser} />
          </Route>
          <Route render={() => <Redirect to={{ pathname: "/signin" }} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);