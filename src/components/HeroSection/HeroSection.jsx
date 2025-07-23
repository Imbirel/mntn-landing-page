import { useState, useLayoutEffect } from 'react';
import styles from './HeroSection.module.css';

const skySpeed = 1.2;
const mountainsSpeed = 0.5;
const grassSpeed = 0.2;
const textSpeed = 0.6;
const windowHeightValue = 1000;
const maxValue = 1;
const minValue = 0;

const clamp = (value) => 1 - Math.min(Math.max(value / windowHeightValue, minValue), maxValue);

export const HeroSection = function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
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
        style={{ transform: `translateY(${-scrollY * skySpeed}px)` }}
      />

      <div
        className={styles.mountainsLayer}
        style={{ transform: `translateY(${-scrollY * mountainsSpeed}px)` }}
      />

      <div
        className={styles.grassLayer}
        style={{ transform: `translateY(${-scrollY * grassSpeed}px)` }}
      />

      <div
        className={styles.container}
        style={{
          transform: `translateY(${scrollY * textSpeed}px)`,
          opacity: `${clamp(scrollY)}`,
        }}
      >
        <p className={styles.subtitle}>
          <svg
            aria-hidden="true"
            width="72"
            height="2"
            viewBox="0 0 72 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="72" height="2" fill="currentcolor" />
          </svg>
          A Hiking guide
        </p>
        <h1>Be Prepared For The Mountains And Beyond!</h1>
        <a href="#article-01" className={styles.scrolldown}>
          scroll down
          <svg aria-hidden="true" width="16" height="24" viewBox="0 0 16 24">
            <path
              d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
              fill="currentcolor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
