import React, { useState, useEffect } from 'react';

import { MealList } from '../../components';
import { getMeals } from '../../services/fakeMealService';


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
