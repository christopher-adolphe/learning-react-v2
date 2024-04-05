import Image from 'next/image';
import { notFound } from 'next/navigation';

import { fetchMeal } from '@/services';

import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const meal = await fetchMeal(slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetails({ params }) {
  const { slug } = params;
  const meal = await fetchMeal(slug);

  // Handling the case where a user might manually
  // enter a slug that doesn't existing in the database
  // By invoking the `notFound()` function from Next, we set
  // the status code to 404 which stops the MealDetails page
  // from rendering and instead renders the nearest not-found
  // page component
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={ styles.header }>
        <div className={ styles.image }>
          <Image src={ meal.image } alt={ meal.title } fill />
        </div>

        <div className={ styles.headerText}>
          <h1>{ meal.title }</h1>

          <p className={ styles.creator }>by <a href={ `mailto:${meal.creator_email}` }>{ meal.creator }</a></p>

          <p className={ styles.summary }>{ meal.summary }</p>
        </div>
      </header>

      <main>
        <p className={ styles.instructions } dangerouslySetInnerHTML={ { __html: meal.instructions } }></p>
      </main>
    </>
  );
}
