import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

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

export async function saveMeal(meal) {
  // Using the `slugify` package to create a slug
  // from the meal title
  meal.slug = slugify(meal.title, { lower: true });

  // Using the `xss` package to sanitize the instructions
  // field from the meal object.
  meal.instructons = xss(meal.instructons);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('An error occurred while saving the meal image');
    }
  });

  meal.image = `/images/${fileName}`;

  MEAL_DB.prepare(`
    INSERT INTO meals (
      slug,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email
    )
    VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `).run(meal);
}
