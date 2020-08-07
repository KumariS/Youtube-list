import React, { Component } from 'react';
import { FormControl } from "react-bootstrap";
import "../Style/Videocomponent.css"
class InputBoxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  
  onChange=(event)=>{
    this.props.onChange(event);
  }
  onKeyPress=()=>{
      this.props.onKeyPress();
  }
  
  render() {
    return (
      <div className="Input_Box">
            <FormControl
            autoFocus={this.props.autofocus === true ? true : false}
            name={this.props.name}
            className={this.props.hasError === true ? "hasError" : ""}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.onChange}
            value={this.props.defaultValue}
            disabled={this.props.disabled}
            maxLength={this.props.maxLength}
            onKeyPress={this.props.onKeyPress}
        />
      </div>
    );
  }
}

export default InputBoxComponent;
