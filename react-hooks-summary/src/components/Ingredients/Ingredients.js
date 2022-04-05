import React, { useState, useEffect, useCallback, useRef } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const URL = '';

function Ingredients() {
  const [ ingredientLists, setIngredientLists ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const isInitialRender = useRef(true);

  const addIngredientHandler = async (ingredient) => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(ingredient)
      });

      if (response.ok && response.status === 200) {
        const data = await response.json();
        const newIngredient = { ...ingredient, id: data.name };

        setIngredientLists((prevState) => [ newIngredient, ...prevState ]);
      } else {
        throw new Error('Something went wront while adding ingredient.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeIngredientHandler = (id) => {
    setIngredientLists((prevState) => prevState.filter(ingredient => ingredient.id !== id));
  };

  const getIngredients = async () => {
    try {
      const response = await fetch(URL);
      
      if (response.ok && response.status === 200) {
        const data = await response.json();

        setIngredientLists(Object.keys(data).map(key => ({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        })));
      } else {
        throw new Error('Something went wrong while fetching ingredients');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filterIngredients = useCallback(async (term) => {
    console.log('filterIngredients - term: ', term);
    try {
      const query = term.length ? '' : `?orderBy="title"&equalTo="${term}"`;
      console.log('filterIngredients: ', query);
      const response = await fetch(`${URL}${query}`);
      
      if (response.ok && response.status === 200) {
        const data = await response.json();

        setIngredientLists(Object.keys(data).map(key => ({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        })));
      } else {
        throw new Error('Something went wrong while searching ingredients');
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const searchHandler = async (term) => {
    setSearchTerm(term);
  };

  /*
   * When an empty dependency array is passed as the second argument of the
   * `useEffect()` hook, it will act like the `componentDidMount()` method;
   * meaning it will run only once after the first render.
  */
  useEffect(() => {
    getIngredients();
  }, []);


  /*
   * When the array contains a dependency the `useEffect()` hook will act like
   * the `componentDidUpdate()` method; meaning it will run anytime that
   * dependency is changed.
  */
  useEffect(() => {
    if (isInitialRender.current) {
      console.log('This is the initial render, no search applied');
      isInitialRender.current = false;
    } else {
      console.log('Search term updated: ', searchTerm);
      filterIngredients(searchTerm);
    }
  }, [searchTerm, filterIngredients]);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={ addIngredientHandler } />

      <section>
        <Search onSearch={ searchHandler } />

        <IngredientList ingredients={ ingredientLists } onRemoveIngredient={ removeIngredientHandler } />
      </section>
    </div>
  );
}

export default Ingredients;
