import Link from 'next/link';

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Meals Page

        <ul>
          <li>
            <Link href="/meals/italian-food">Italian Food</Link>
          </li>

          <li>
            <Link href="/meals/indian-food">Indian Food</Link>
          </li>

          <li>
            <Link href="/meals/chinese-food">Chinese Food</Link>
          </li>
        </ul>
      </h1>
    </main>
  );
}
