import React, { Component } from 'react';
import { Col } from "react-bootstrap";
import InputBoxComponent from "./inputBox"
import ButtonComponent from "./ButtonComponent"
import VideoListView from "./VideoListView"
import "../Style/Videocomponent.css"
class VideonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchValue:"React js",
        list:[],
        listLenth:10
    }
  }  
  BtnClick=()=>{
    this.searchVideo(this.state.searchValue);
  }
  onChange=(e)=>{
   this.setState({
    searchValue:e.target.value
   });
  }
  onKeyPress=(e)=>{
    if (e.key === "Enter") {
        this.BtnClick();
   }
  }
  searchVideo=(searchValue)=>{
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults="+this.state.listLenth+"&q="+this.state.searchValue+"&key=AIzaSyB7KDY7Pr2zKNWBE48trVXt45jTL4KER3Y", true)
    xhr.onload = function(e){
      if (xhr.readyState === 4){
        if (xhr.status === 200){
          var response = JSON.parse(xhr.response);
          this.setState({
            list:response.items
          });
        } else {
          console.error(xhr.statusText)
        }
      }
    }.bind(this)
      xhr.onerror = function(e){
      console.error(xhr.statusText)
    }
    xhr.send(null)
  }
  componentDidMount() {
     this.searchVideo(this.state.searchVideo);
  }
  render() {
      console.log(this.state.list)
    return (
      <div className="container VideoListContainer">
          <Col lg={12} sm={12} md={12} xs={12} className="VideoSearchBox">
             <Col lg={6} sm={6} md={6} xs={6} className="">
                <InputBoxComponent autofocus
                name="search"
                type="text"
                placeholder="Search"
                onChange={this.onChange}
                defaultValue={this.state.searchValue}
                onKeyPress={this.onKeyPress}/>
                </Col>
                <Col lg={6} sm={6} md={6} xs={6} className="">
                <ButtonComponent ButtonText="Search" BtnClick={this.BtnClick}/>
              </Col>
          </Col>
          <VideoListView Videolist={this.state.list}/>
      </div>
    );
  }
}

export default VideonComponent;
