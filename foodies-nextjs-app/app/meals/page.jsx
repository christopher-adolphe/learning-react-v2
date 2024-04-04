import React from 'react';
import Link from 'next/link';

import MealsGrid from '@/components/Meals';
import { fetchMeals } from '@/services';

import styles from './page.module.css';

async function MealsWrapper() {
  const meals = await fetchMeals();

  return <MealsGrid meals={ meals || [] } />
}

export default function Meals() {
  return (
    <>
      <header className={ styles.header }>
        <h1>Delicious meals, created <span className={ styles.highlight }>by you</span></h1>

        <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>

        <p className={ styles.cta }>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={ styles.main }>
        <React.Suspense fallback={ <p className={ styles.loading }>Fetching meals...</p> }>
          <MealsWrapper />
        </React.Suspense>
      </main>
    </>
  );
}
