import Link from 'next/link';
import Image from 'next/image';

import HeaderBackground from '@/components/HeaderBackground';
import NavLink from '@/components/NavLink';

import Logo from '@/assets/logo.png';

import styles from './TheHeader.module.css';

export default function TheHeader() {
  return (
    <>
      <HeaderBackground />
      
      <header className={ styles.header }>
        <Link className={ styles.logo } href="/">
          <Image src={ Logo } alt="" width={ 40 } height={ 40 } priority />
          NextLevel Food
        </Link>

        <nav className={ styles.nav }>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>

            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
