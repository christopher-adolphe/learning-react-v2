import { fetchMeals } from '@/services';

import { MealItem } from '@/components/Meals';

import styles from './MealsGrid.module.css';

export default async function MealsGrid() {
  const meals = await fetchMeals();

  return (
    <ul className={ styles.meals }>
      {
        meals.map(meal => (
          <li key={ meal.id }>
            <MealItem { ...meal } />
          </li>
        ))
      }
    </ul>
  );
}
