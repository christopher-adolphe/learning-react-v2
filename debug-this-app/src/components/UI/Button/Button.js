import React, { memo } from 'react';

import styles from './Button.module.css';

const Button = props => {
  console.log('Button Component executed!!');

  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default memo(Button);
