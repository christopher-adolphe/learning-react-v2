import React, { useState, useEffect } from 'react';

import config from '../../config.json';
import { useHttp } from '../../hooks';

import { MealList } from '../../components';

function Home() {
  const [ meals, setMeals ] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const handleResponseData = (data) => {
      const fetchedMeals = data !== null
        ? Object.keys(data).map(key => ({
            id: key,
            title: data[key].title,
            description: data[key].description,
            category: data[key].category,
            price: data[key].price
          }))
        : [];

      setMeals(fetchedMeals);
    };

    fetchMeals({ url: `${config.apiEndpoint}/meals.json` }, handleResponseData);
  }, [fetchMeals]);

  let content = (<MealList items={ meals } />);

  if (isLoading) {
    content = (<p className="status-message">Loading meals...</p>);
  }

  if (error) {
    content = (<p className="status-message">{ error }</p>);
  }

  return (
    <main>
      <h2>Most Popular Meals</h2>

      { content }
    </main>
  );
}

export default Home;
