import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">NextLevel Food</Link>
      <Link href="/meals">Meals</Link>
      <Link href="/community">Community</Link>
    </header>
  );
}
