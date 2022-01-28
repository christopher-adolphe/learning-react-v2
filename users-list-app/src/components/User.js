import React, { Component } from 'react';

import classes from './User.module.css';

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

class User extends Component {

  // The `render()` method will be called whenever React encounters
  // the component's tag, i.e: <User /> and will output the specified
  // JSX code
  render() { 
    return (<li className={classes.user}>{ this.props.name }</li>);
  }
}

export default User;
