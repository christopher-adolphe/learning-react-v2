import Link from 'next/link';

function Home(props) {
  return (
    <div>
      <h1>Home Component</h1>
      <Link href="/news">Go to News</Link>
    </div>
  );
}

export default Home;
