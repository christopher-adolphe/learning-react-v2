import React from 'react';
import styles from './ButtonV2.module.css';

function ButtonV2(props) {
  return (
    <div>
      {/*
        Using the `styles` object that we import from the ButtonV2 css module
        to apply styles as properties of that object
      */}
      <button type={props.type} className={ styles.button } onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}

export default ButtonV2;