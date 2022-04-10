import React, { useState, useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo(({ onAddIngredient, isLoading }) => {
  const { onLogout } = useContext(AuthContext);
  // const [ formData, setFormData ] = useState({ title: '', amount: '' });
  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState('');

  console.log('IngredientForm rendering...');

  const changeHanlder = event => {
    const { id, value } = event.target;

    switch (id) {
      case 'title':
        // setFormData((prevState) => ({ ...prevState, title: value }));
        setTitle(value);
        break;

      case 'amount':
        // setFormData((prevState) => ({ ...prevState, amount: value }));
        setAmount(value);
        break;
    
      default:
        break;
    }
  };

  const submitHandler = event => {
    event.preventDefault();

    const formData = {
      title,
      amount
    };
    
    onAddIngredient(formData);
    setTitle('');
    setAmount('');
  };

  return (
    <section className="ingredient-form">
      <button type="button" className="btn-logout" onClick={ onLogout }>Logout</button>
      <Card>
        <form onSubmit={ submitHandler }>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={ title } onChange={ changeHanlder } />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={ amount } onChange={ changeHanlder } />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            { isLoading ? <LoadingIndicator /> : null }
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
