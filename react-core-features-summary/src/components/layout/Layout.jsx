import React from 'react';

import Header from './Header';

import styles from './Layout.module.css';

function layout({ children }) {
  return (
    <div>
      <Header />

      <main className={ styles.main }>
        { children }
      </main>
    </div>
  );
}

export default layout;
