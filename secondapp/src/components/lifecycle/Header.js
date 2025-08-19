import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor:"red"};
    }

    // static getDerivedStateFromProps(props,state){
    //     return{favoritecolor: props.favcol}
    // }

    changeColor = () =>{
        this.setState({favoritecolor:"blue"})
    }

    shouldComponentUpdate(){
        return true;
    }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({favoritecolor:"Yellow"})
    //     },2000)
    // }
  render() {
    return (
      <div>
        <h1>My favorite color text is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}
