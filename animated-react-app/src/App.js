import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

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

        {
          showBlock ? <div style={ {
            backgroundColor: 'red',
            width: 100,
            height: 100,
            margin: 'auto'
          } }></div> : null
        }
        
        <br /><br />

        {
          isModalOpen ? <Modal show={ isModalOpen } closed={ this.closeModalHandler } /> : null
        }
        
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
