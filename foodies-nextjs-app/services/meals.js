import sql from 'better-sqlite3';

const MEAL_DB = sql('meals.db');

async function delay() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

export async function fetchMeals() {
  // Setting an artificial delay to demonstrate loading states
  delay();
  
  return MEAL_DB.prepare('SELECT * FROM meals').all();
}

export async function fetchMeal(slug) {
  // Setting an artificial delay to demonstrate loading states
  delay();

  return MEAL_DB.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
