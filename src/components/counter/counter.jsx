import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './counter.css'

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
  }
 


  render() {
    return (
      <div className="Counter">

        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <CounterButton by={15} incrementMethod={this.increment} />
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
  increment(by) {
    this.setState(
      {
        counter: this.state.counter + by
      }
    );
  }

}

class CounterButton extends Component {

  //Deifne initial state in a constructor of the counter
  //
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
  }


  render() {

    return (

      <div className="counter" >
        <button onClick={this.increment}>+{this.props.by}</button>
        
      </div>
    )

  }

  increment() {
    this.setState(
      {
        counter: this.state.counter + this.props.by
      }
    );
    this.props.incrementMethod(this.props.by);
  }
}

CounterButton.defaultProps = {

  by: 1
}
CounterButton.protoTypes = {
  by: PropTypes.number
}
export default Counter;