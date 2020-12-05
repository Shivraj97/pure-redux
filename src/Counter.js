import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Counter.scss';
import { increment, decrement, INCREMENT, DECREMENT } from './App';

class Counter extends Component {
  decrement = () => {
    this.props.decrement();
  };
  increment = () => {
    this.props.increment();
  };
  render() {
    return (
      <div className="counter">
        <div className="container">
          <button onClick={this.decrement} className="btn">
            -
          </button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment} className="btn">
            +
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
