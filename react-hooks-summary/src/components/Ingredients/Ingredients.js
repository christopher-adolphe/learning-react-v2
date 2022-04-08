import React, { useState, useEffect, useCallback, useRef, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const URL = '';

const INGREDIENTS_ACTIONS = {
  SET: 'SET',
  ADD: 'ADD',
  DELETE: 'DELETE'
};

const ingredientsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case INGREDIENTS_ACTIONS.SET:
      return payload.ingredients;

    case INGREDIENTS_ACTIONS.ADD:
      return [ payload.ingredient, ...state ];

    case INGREDIENTS_ACTIONS.DELETE:
      return state.filter(ingredient => ingredient.id !== payload.id);
  
    default:
      return state;
  }
};

function Ingredients() {
  const [ ingredients, dispatchIngredients ] = useReducer(ingredientsReducer, []);
  const [ ingredientLists, setIngredientLists ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const isInitialRender = useRef(true);
  const searchTermRef = useRef(null);

  const addIngredientHandler = async (ingredient) => {
    try {
      setIsLoading(true);
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
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const removeIngredientHandler = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${id}.json`, {
        method: 'DELETE'
      });

      if (response.ok && response.status === 200) {
        setIngredientLists((prevState) => prevState.filter(ingredient => ingredient.id !== id));
      } else {
        throw new Error('Something went wrong while deleting ingredient.');
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
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
    try {
      const query = term.length ? `?orderBy="title"&equalTo="${term}"` : '';
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

  const closeModalHandler = () => {
    setError(null);
  }

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
    let timeoutId = null;

    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      setTimeout(() => {        
        if (searchTerm === searchTermRef.current.value) {
          filterIngredients(searchTerm);
        }
      }, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [searchTerm, filterIngredients]);

  return (
    <div className="App">
      { error ? <ErrorModal onClose={ closeModalHandler }>{ error }</ErrorModal> : null }

      <IngredientForm onAddIngredient={ addIngredientHandler } isLoading={ isLoading } />

      <section>
        <Search forwardedRef={ searchTermRef } onSearch={ searchHandler } />

        <IngredientList ingredients={ ingredientLists } onRemoveIngredient={ removeIngredientHandler } />
      </section>
    </div>
  );
}

export default Ingredients;
