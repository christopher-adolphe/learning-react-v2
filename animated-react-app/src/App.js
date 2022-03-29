import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

/*
 * Creating a configuration object for the duration of
 * the enter and exit transition states
*/
const animationTiming = {
  enter: 400,
  exit: 1000
};

/*
 * Creating a configuration object to define custom classes
 * to be used during the different transition states
*/
const animationClasses = {
  enter: '',
  enterActive: 'Modal--open',
  exit: '',
  exitActive: 'Modal--close'
};

class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false
  }

  showModalHandler = () => {
    console.log('showModalHandler');
    this.setState({ isModalOpen: true });
  }

  closeModalHandler = () => {
    console.log('closeModalHandler');
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen, showBlock } = this.state;

    return (
      <div className="App">
        <h1>React Animations</h1>

        <button className="Button" onClick={ () => this.setState((prevState) => ({ ...prevState, showBlock: !prevState.showBlock })) }>Toggle</button>

        <br /><br />

        {/* {
          showBlock ? <div style={ {
            backgroundColor: 'red',
            width: 100,
            height: 100,
            margin: 'auto'
          } }></div> : null
        } */}

        {/* Using the `<Transition>` component to handle the element on which */}
        {/* we want to add an animation. It take an `in` prop to toggle transition */}
        {/* states (entering, entered, exiting, exited) and a `timeout` prop to */}
        {/* specify the duration between each transition. We also set the `mountOnEnter` */}
        {/* and `unmountOnExit` props to add and remove the element from the DOM */}
        {/* The `<Transition>` component also provides 6 props to which we can pass */}
        {/* callback functions which execute at specific transition states */}
        {/* Inside the `<Transition>` component, we get access to a `state` function */}
        {/* which executes every time the value of the `in` prop is updated. We use */}
        {/* function to return the `jsx` code of the element we are animating */}
        <Transition
          in={ showBlock }
          timeout={ 300 }
          mountOnEnter
          unmountOnExit
          onEnter={ () => console.log('1. onEnter') }
          onEntering={ () => console.log('2. onEntering') }
          onEntered={ () => console.log('3. onEntered') }
          onExit={ () => console.log('4. onExit') }
          onExiting={ () => console.log('5. onExiting') }
          onExited={ () => console.log('6. onExited') }
          >
          {
            state => (
              <div style={ {
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                opacity: state === 'entered' ? 1 : 0,
                transition: 'opacity 0.35s ease-in'
              } }></div>
            )
          }
        </Transition>
        
        <br /><br />

        {/* {
          isModalOpen ? <Modal show={ isModalOpen } closed={ this.closeModalHandler } /> : null
        } */}

        {/* Using the `<CSSTransition>` component to handle animation of element */}
        {/* via CSS, meaning that specific CSS classes will be applied to the element */}
        {/* during the different transition states. This is achieved by passing an */}
        {/* object to the `classNames` prop */}
        <CSSTransition
          in={ isModalOpen }
          timeout={ animationTiming }
          mountOnEnter
          unmountOnExit
          classNames={ animationClasses }
        >
          <Modal closed={ this.closeModalHandler } />
        </CSSTransition>
        
        {
          isModalOpen ? <Backdrop show={ isModalOpen } /> : null
        }

        <button className="Button" onClick={ this.showModalHandler }>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
