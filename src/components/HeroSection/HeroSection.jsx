import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import { SvgLine } from '../Svg/SvgLine';

const SKY_SPEED = 1.2;
const MOUNTAINS_SPEED = 0.4;
const GRASS_SPEED = 0.2;
const TEXT_SPEED = 0.6;
const WINDOW_HEIGHT_VALUE = 1000;

const clamp = (value) => 1 - Math.min(Math.max(value / WINDOW_HEIGHT_VALUE, 0), 1);

export const HeroSection = function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className={styles.section}>
      <div
        className={styles.skyLayer}
        style={{ transform: `translateY(${-scrollY * SKY_SPEED}px)` }}
      />

      <div
        className={styles.mountainsLayer}
        style={{ transform: `translateY(${-scrollY * MOUNTAINS_SPEED}px)` }}
      />

      <div
        className={styles.grassLayer}
        style={{ transform: `translateY(${-scrollY * GRASS_SPEED}px)` }}
      />

      <div
        className={styles.container}
        style={{
          transform: `translateY(${scrollY * TEXT_SPEED}px)`,
          opacity: `${clamp(scrollY)}`,
        }}
      >
        <p className={styles.subtitle}>
          <SvgLine />A Hiking guide
        </p>
        <h1>Be Prepared For The Mountains And Beyond!</h1>
        <a href="#article-01" className={styles.scrolldown}>
          scroll down
          <svg aria-hidden="true" width="16" height="24" viewBox="0 0 16 24">
            <use href="/sprite.svg#svg-arrow-down" />
          </svg>
        </a>
      </div>
    </section>
  );
};
