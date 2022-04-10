import React, { useState, useEffect, useCallback, useRef, useReducer, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const URL = 'https://react-http-c7523-default-rtdb.firebaseio.com/ingredients.json';

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

const HTTP_ACTIONS = {
  SEND: 'SEND',
  RESPONSE: 'RESPONSE',
  ERROR: 'ERROR',
  CLEAR: 'CLEAR'
};

const httpStatusReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case HTTP_ACTIONS.SEND:
      return { isLoading: true, error: null };

    case HTTP_ACTIONS.RESPONSE:
      return { ...state, isLoading: false };

    case HTTP_ACTIONS.ERROR:
      return { isLoading: false, error: payload.error };

    case HTTP_ACTIONS.CLEAR:
      return { ...state, error: null };
  
    default:
      return state;
  }
};

function Ingredients() {
  const [ ingredientLists, dispatchIngredientLists ] = useReducer(ingredientsReducer, []);
  const [ httpStatus, dispatchHttpStatus ] = useReducer(httpStatusReducer, { isLoading: false, error: null });
  // const [ ingredientLists, setIngredientLists ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  // const [ isLoading, setIsLoading ] = useState(false);
  // const [ error, setError ] = useState(null);
  const isInitialRender = useRef(true);
  const searchTermRef = useRef(null);

  const addIngredientHandler = useCallback(async (ingredient) => {
    try {
      // setIsLoading(true);
      dispatchHttpStatus({ type: HTTP_ACTIONS.SEND });
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(ingredient)
      });

      if (response.ok && response.status === 200) {
        const data = await response.json();
        // const newIngredient = { ...ingredient, id: data.name };

        // setIngredientLists((prevState) => [ newIngredient, ...prevState ]);
        dispatchIngredientLists({
          type: INGREDIENTS_ACTIONS.ADD,
          payload: {
            ingredient: { ...ingredient, id: data.name }
          }
        });
      } else {
        throw new Error('Something went wront while adding ingredient.');
      }
    } catch (error) {
      // setError(error.message);
      dispatchHttpStatus({
        type: HTTP_ACTIONS.ERROR,
        payload: { error: error.message }
      });
    } finally {
      // setIsLoading(false);
      dispatchHttpStatus({ type: HTTP_ACTIONS.RESPONSE });
    }
  }, []);

  const removeIngredientHandler = useCallback(async (id) => {
    try {
      // setIsLoading(true);
      dispatchHttpStatus({ type: HTTP_ACTIONS.SEND });
      const response = await fetch(`https://react-http-c7523-default-rtdb.firebaseio.com/ingredients/${id}.json`, {
        method: 'DELETE'
      });

      if (response.ok && response.status === 200) {
        // setIngredientLists((prevState) => prevState.filter(ingredient => ingredient.id !== id));
        dispatchIngredientLists({
          type: INGREDIENTS_ACTIONS.DELETE,
          payload: { id }
        });
      } else {
        throw new Error('Something went wrong while deleting ingredient.');
      }
    } catch (error) {
      // setError(error.message);
      dispatchHttpStatus({
        type: HTTP_ACTIONS.ERROR,
        payload: { error: error.message }
      });
    } finally {
      // setIsLoading(false);
      dispatchHttpStatus({ type: HTTP_ACTIONS.RESPONSE });
    }
  }, []);

  const getIngredients = async () => {
    try {
      dispatchHttpStatus({ type: HTTP_ACTIONS.SEND });
      const response = await fetch(URL);
      
      if (response.ok && response.status === 200) {
        const data = await response.json();

        // setIngredientLists(Object.keys(data).map(key => ({
        //   id: key,
        //   title: data[key].title,
        //   amount: data[key].amount
        // })));

        dispatchIngredientLists({
          type: INGREDIENTS_ACTIONS.SET,
          payload: {
            ingredients: Object.keys(data).map(key => ({
              id: key,
              title: data[key].title,
              amount: data[key].amount
            }))
          }
        });
      } else {
        throw new Error('Something went wrong while fetching ingredients');
      }
    } catch (error) {
      dispatchHttpStatus({
        type: HTTP_ACTIONS.ERROR,
        payload: { error: error.message }
      });
    } finally {
      dispatchHttpStatus({ type: HTTP_ACTIONS.RESPONSE });
    }
  };

  const filterIngredients = useCallback(async (term) => {
    try {
      dispatchHttpStatus({ type: HTTP_ACTIONS.SEND });
      const query = term.length ? `?orderBy="title"&equalTo="${term}"` : '';
      const response = await fetch(`${URL}${query}`);
      
      if (response.ok && response.status === 200) {
        const data = await response.json();

        // setIngredientLists(Object.keys(data).map(key => ({
        //   id: key,
        //   title: data[key].title,
        //   amount: data[key].amount
        // })));

        dispatchIngredientLists({
          type: INGREDIENTS_ACTIONS.SET,
          payload: {
            ingredients: Object.keys(data).map(key => ({
              id: key,
              title: data[key].title,
              amount: data[key].amount
            }))
          }
        });
      } else {
        throw new Error('Something went wrong while searching ingredients');
      }
    } catch (error) {
      dispatchHttpStatus({
        type: HTTP_ACTIONS.ERROR,
        payload: { error: error.message }
      });
    } finally {
      dispatchHttpStatus({ type: HTTP_ACTIONS.RESPONSE });
    }
  }, []);

  const searchHandler = async (term) => {
    setSearchTerm(term);
  };

  const closeModalHandler = useCallback(() => {
    // setError(null);
    dispatchHttpStatus({ type: HTTP_ACTIONS.CLEAR });
  }, []);

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

  const ingredientListComp = useMemo(() => {
    return (
      <IngredientList ingredients={ ingredientLists } onRemoveIngredient={ removeIngredientHandler } />
    );
  }, [ingredientLists, removeIngredientHandler]);

  return (
    <div className="App">
      { httpStatus.error ? <ErrorModal onClose={ closeModalHandler }>{ httpStatus.error }</ErrorModal> : null }

      <IngredientForm onAddIngredient={ addIngredientHandler } isLoading={ httpStatus.isLoading } />

      <section>
        <Search forwardedRef={ searchTermRef } onSearch={ searchHandler } />

        {/* <IngredientList ingredients={ ingredientLists } onRemoveIngredient={ removeIngredientHandler } /> */}
        { ingredientListComp }
      </section>
    </div>
  );
}

export default Ingredients;
