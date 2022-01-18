import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  const year = new Date();

  return (
    <footer className={ styles.footer }>
      <div className={ styles['footer__navbar'] }>
        <ul className={ styles['footer__link'] }>
          <li className={ styles['footer__link-item'] }>&copy; Happy Meals { year.getFullYear() }</li>
          <li className={ styles['footer__link-item'] }>Privacy Policy</li>
          <li className={ styles['footer__link-item'] }>Terms of Service</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
