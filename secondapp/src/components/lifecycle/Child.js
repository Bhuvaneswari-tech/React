import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(){
        alert("The component named Header is about to be unmounted.")
    }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}
