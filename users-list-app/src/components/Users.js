import React, { Component } from 'react';

import User from './User';

import classes from './Users.module.css';

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

// All class-based components extend from React's `Component` class
// and therefore inherit properties and method from this base class
// Properties include: state and props which are use to manage
// data inside our components
// Methods include: render(), setState(), componentDidMount() etc
// NOTE: Since state and props are properties of the class, they are
// accessed using the `this` keyword, i.e this.state/this.props

// All class-based components inherit lifecycle hook methods from
// React's `Component` class. These lifecycle hook methods include:
// 1) componentDidMount(): called once the component is mounted (is
// evalutated and rendered). It is equivalent to using the `useEffect()`
// hook with an empty dependency array, i.e useEffect(() => { ...someLogic }, []);
//
// 2) componentDidUpdated(): called once the component is updated (is
// evaluated and rendered). It is equivalent to using the `useEffect()`
// hook with a dependeny array, i.e useEffect(() => { ...someLogic }, [someDependency]);
//
// 3) componentWillUnmount(): called right before the component is unmounted (is
// removed from the DOM). It is equivalent to using the `useEffect()`
// hook with returned cleanup function, i.e useEffect(() => { ...someLogic return () => {} }, [someDependency]);
class Users extends Component {
  constructor() {
    super();
    // In class-based components we use the `state` property to
    // manage the component's data. The `state` property is an
    // object that will contain key-value pairs of the data
    // NOTE: This is also the same for the `props` property which
    // is also an object contain key-value pairs of data being
    // passed from outside to the component
    this.state = {
      showUsers: true
    };
  }

  toggleUsersHandler() {
    // In class-based component we use the `setState()` method to
    // update the `state` property. The `setState()` method takes
    // an object as argument with a key-value pair that represent
    // a part of the `state` we want to update. The `setState()`
    // method will then merge the updated part with the current state
    // NOTE: As in functional component if the update is dependent
    // on the previous state, we pass a function as argument
    // to `setState()` method and it will automatically recieve the
    // current state from React so that we can then use update the
    // new state
    this.setState((currentState) => ({ showUsers: !currentState.showUsers }))
  }

  render() {
    const { showUsers } = this.state;
    const { users } = this.props
    const usersList = (
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={ this.toggleUsersHandler.bind(this) }>
          {showUsers ? 'Hide' : 'Show'} Users
        </button>
        {showUsers && usersList}
      </div>
    );
  }
}

export default Users;
