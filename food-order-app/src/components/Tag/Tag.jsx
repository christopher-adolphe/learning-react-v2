import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tag.module.css';

function Tag({ count = 0 }) {
  return (
    <span className={ styles.tag }>{ count }</span>
  );
}

Tag.propTypes = {
  count: PropTypes.number
};

export default Tag;
