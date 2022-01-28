import React, { Component, Fragment, useState, useEffect } from 'react';

import Users from './Users';
import ErrorBoundary from './ErrorBoundary';

import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={ classes.finder }>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>

//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

class UserFinder extends Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount called...');
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  // Using the `componentDidUpdate()` lifecycle hook method
  // to update the `filteredUsers` state whenever the `searchTerm`
  // state is updated. The `componentDidUpdate()` lifecycle hook method
  // receives the `prevProps` and `prevState` as arguments so that
  // we can compare the previous values on either the `props` or `state`
  // to their current values thus preventing infinite loops. These checks
  // are equivalent to the dependency array we pass to the `useEffect()`
  // hook in functional components
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate called...');
    const { searchTerm } = this.state;

    if (prevState.searchTerm !== searchTerm) {
      const filteredUsers = DUMMY_USERS.filter(user => user.name.includes(searchTerm));

      this.setState({ filteredUsers });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    console.log('render called...');
    const { filteredUsers } = this.state;

    return (
      <Fragment>
        <div className={ classes.finder }>
          <input type='search' onChange={ this.searchChangeHandler.bind(this) } />
        </div>

        {/* Using the `ErrorBoundary` component to wrap the `Users` component which can throw an error */}
        <ErrorBoundary>
          <Users users={ filteredUsers } />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
