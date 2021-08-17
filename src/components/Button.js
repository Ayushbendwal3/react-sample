import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState((state) => ({
      counter: state.counter + this.props.increment
    }))
  }

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        <br />
        <button onClick={this.clickHandler}>click me</button>
      </div>
    )
  }
}

export default Button
