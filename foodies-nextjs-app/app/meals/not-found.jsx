import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Meal Not found</h1>
      
      <p>Sorry, we can't find the meal you are looking for.</p>

      <p>
        <Link href="/meals">Browse Meals</Link>
      </p>
    </main>
  );
}