import React, { Component } from 'react'

export default class Update extends Component {
  constructor(props){
        super(props);
        this.state = {favoritecolor:"red"};
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"Yellow"})
        },5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = 
        "Before the update, the favorite was " + prevState.favoritecolor;
    }

    componentDidUpdate(){
        document.getElementById("div2").innerHTML = 
        "After the update, the favorite is " + this.state.favoritecolor
    }
  render() {
    return (
      <div>
        <h1>My favorite color text is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    )
  }
}
