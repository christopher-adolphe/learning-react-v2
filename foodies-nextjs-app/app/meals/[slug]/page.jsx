export default function Meal({ params }) {
  const { slug } = params;

  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Meal { slug } Page
      </h1>
    </main>
  );
}
