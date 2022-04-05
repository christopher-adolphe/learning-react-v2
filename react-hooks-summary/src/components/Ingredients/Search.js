import React, { useState } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(({ onSearch }) => {
  const [ search, setSearch ] = useState('');

  const changeHandler = (event) => {
    const { value } = event.target;

    setSearch(value);
    onSearch(value);
  };

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={ search } onChange={ changeHandler } />
        </div>
      </Card>
    </section>
  );
});

export default Search;
