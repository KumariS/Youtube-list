import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import "../Style/Videocomponent.css"
class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  
  BtnClick=()=>{
      this.props.BtnClick();
  }
  
  render() {
    return (
      <div className="Input_Box">
           <Button variant="primary" onClick={this.BtnClick}>{this.props.ButtonText}</Button>
      </div>
    );
  }
}

export default ButtonComponent;
