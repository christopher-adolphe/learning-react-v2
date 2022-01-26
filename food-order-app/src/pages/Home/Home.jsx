import React, { useState, useEffect } from 'react';

import { getMeals } from '../../services/fakeMealService';

import { MealList } from '../../components';

function Home() {
  const [ meals, setMeals ] = useState([]);

  useEffect(() => {
    setMeals(getMeals());
  }, []);

  return (
    <main>
      <h2>Most Popular Meals</h2>

      <MealList items={ meals } />
    </main>
  );
}

export default Home;
