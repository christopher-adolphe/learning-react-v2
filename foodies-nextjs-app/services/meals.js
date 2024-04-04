import sql from 'better-sqlite3';

const MEAL_DB = sql('meals.db');

async function delay() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
}

export async function fetchMeals() {
  // Setting an artificial delay to demonstrate loading states
  delay();

  // throw new Error('Sorry could not establish connection to database!');
  
  return MEAL_DB.prepare('SELECT * FROM meals').all();
}

export async function fetchMeal(slug) {
  // Setting an artificial delay to demonstrate loading states
  delay();

  return MEAL_DB.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
