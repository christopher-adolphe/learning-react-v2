import React, { Fragment } from 'react'
import { createPortal } from 'react-dom';

import { Modal, Cart } from './components';
import { Header, Footer } from './partials';
import { Home } from './pages';

import styles from './App.module.css';

function App() {
  return (
    <Fragment>
      <div className={ styles.app }>
        <Header />

        <Home />

        <Footer />
      </div>

      {
        createPortal(
          <Modal>
            <Cart />
          </Modal>
          , document.getElementById('modal-root')
        )
      }
    </Fragment>
  );
}

export default App;
