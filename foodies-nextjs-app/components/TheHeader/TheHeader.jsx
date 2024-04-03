import Link from 'next/link';

import Logo from '@/assets/logo.png';

import styles from './TheHeader.module.css';

export default function TheHeader() {
  return (
    <header className={ styles.header }>
      <Link className={ styles.logo } href="/">
        <img src={ Logo.src } alt="" />
        NextLevel Food
      </Link>

      <nav className={ styles.nav }>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>

          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
