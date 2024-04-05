'use client';

import React from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';

import styles from './Slideshow.module.css';

const images = [
  {
    id: 1,
    image: burgerImg,
    alt: 'A delicious, juicy burger',
  },
  {
    id: 2,
    image: curryImg,
    alt: 'A delicious, spicy curry',
  },
  {
    id: 3,
    image: dumplingsImg,
    alt: 'Steamed dumplings',
  },
  {
    id: 4,
    image: macncheeseImg,
    alt: 'Mac and cheese',
  },
  {
    id: 5,
    image: pizzaImg,
    alt: 'A delicious pizza',
  },
  {
    id: 6,
    image: schnitzelImg,
    alt: 'A delicious schnitzel',
  },
  {
    id: 7,
    image: tomatoSaladImg,
    alt: 'A delicious tomato salad',
  },
];

export default function Slideshow() {
  const [ activeImageIndex, setActiveImageIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex(currentActiveImageIndex => {
        if (currentActiveImageIndex === images.length - 1) {
          return 0;
        }

        return currentActiveImageIndex + 1;
      });
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeImageIndex]);

  return (
    <div className={ styles.slideshow }>
      {images.map((image, index) => (
        <Image
          key={ image.id }
          src={ image.image }
          className={ index === activeImageIndex ? styles.active : '' }
          alt={ image.alt }
          priority
        />
      ))}
    </div>
  );
}
