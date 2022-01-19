import React from 'react';

import { MealList } from '../../components';

const meals = [
  { id: 'm-1', title: 'Meal 1' },
  { id: 'm-2', title: 'Meal 2' },
]

function Home(props) {
  return (
    <main>
      <h2>Home Component</h2>

      <MealList items={ meals } />
    </main>
  );
}

export default Home;
