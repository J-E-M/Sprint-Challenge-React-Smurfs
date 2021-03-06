import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from "axios";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    this.getData("http://localhost:3333/smurfs");
  }

  getData = URL => {
    axios
      .get(URL)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.log(err));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Route path="/" component={NavBar} />
      <Route path="/" exact render={props => <Smurfs smurfs={this.state.smurfs} {...props} />}/>
      <Route path="/addsmurf" render={props => <SmurfForm update={this.getData} {...props} />}/>
      </div>
    );
  }
}

export default App;
