import React from 'react';

import './IngredientList.css';

const IngredientList = ({ ingredients, onRemoveIngredient }) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      {
        ingredients.length
        ? (
          <ul>
            {ingredients.map(ig => (
              <li key={ig.id} onClick={ onRemoveIngredient.bind(this, ig.id) }>
                <span>{ig.title}</span>
                <span>{ig.amount}x</span>
              </li>
            ))}
          </ul>
        )
        : <p>The ingredient list is empty!</p>
      }
    </section>
  );
};

export default IngredientList;
