import React from 'react';

import { MainNavigation } from '../';

import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />

      <main className={ styles.main }>
        { children }
      </main>
    </div>
  );
}

export default Layout;
