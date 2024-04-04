import { fetchMeal } from '@/services';

export default async function Meal({ params }) {
  const { slug } = params;
  const meal = await fetchMeal(slug);

  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Meal { slug } Page
      </h1>
    </main>
  );
}
