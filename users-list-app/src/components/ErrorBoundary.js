import React, { Component } from 'react';

import classes from './ErrorBoundary.module.css';

// Creating an error boundary component which will
// act as a wrapper component to handle errors thrown
// by child components
class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      errorMessage: ''
    };
  }
  // Using the `componentDidCatch()` lifecycle hook method to turn
  // the component into an error boundary component such that if
  // any child component throws an error, the `componentDidCatch()`
  // method is called. It receives an error argument automatically
  // provided by react
  // NOTE: There is no equivalent hook for functional component so
  // all error boundary components are class-based
  componentDidCatch(error) {
    console.log('componentDidCatch: ', error);
    this.setState({ hasError: true, errorMessage: `Oh no! ${error.message}` });
  }

  render() {
    const { hasError, errorMessage } = this.state;

    if (hasError) {
      return (
        <div className={ classes.error }>
          <p>{ errorMessage }</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
