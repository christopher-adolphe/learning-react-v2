import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not found</h1>

      <p>It looks like you got lost...</p>
      
      <p>We can&apos;t find the page you are looking for.</p>

      <p>
        <Link href="/">Back To Home</Link>
      </p>
    </main>
  );
}