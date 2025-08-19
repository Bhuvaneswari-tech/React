import React, { Component } from 'react'

export default class ClassState extends Component {

    state = {
        userName: "Peter",
        userPlace: "Newyork"
    }

  render() {
    return (
      <div>
        <h2>
        {this.state.userName}, {this.state.userPlace}
        </h2>
      </div>
    )
  }
}
