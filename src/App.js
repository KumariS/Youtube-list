import React, { Component } from 'react';
import VideoComponent from "./Component/VideoComponent"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  

  
  render() {
    return (
      <div className="">
          <VideoComponent/>
      </div>
    );
  }
}

export default App;
