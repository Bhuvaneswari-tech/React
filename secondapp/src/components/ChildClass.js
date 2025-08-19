import React, { Component } from 'react'

export default class ChildClass extends Component {
  render() {
    return (
      <div>
        <p>ChildClass Component</p>

        <p>{this.props.text}</p>

      </div>
    )
  }
}
