import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';
import { SvgLine } from '../Svg/SvgLine';
import { GRASS_SPEED, MOUNTAINS_SPEED, SKY_SPEED, TEXT_SPEED } from '@constants/app';
import { clamp } from '@utils/clamp';

export const HeroSection = function HeroSection() {
  const heroRef = useRef(null);
  const skyRef = useRef(null);
  const mountainsRef = useRef(null);
  const grassRef = useRef(null);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (skyRef.current) {
        skyRef.current.style.transform = `translateY(${scrollY * SKY_SPEED}px)`;
      }

      if (mountainsRef.current) {
        mountainsRef.current.style.transform = `translateY(${scrollY * MOUNTAINS_SPEED}px)`;
      }

      if (grassRef.current) {
        grassRef.current.style.transform = `translateY(${scrollY * GRASS_SPEED}px)`;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(${scrollY * TEXT_SPEED}px)`;
        containerRef.current.style.opacity = `${clamp(scrollY)}`;
      }
    };

    const callbackObserver = (entries) => {
      if (entries[0].isIntersecting) {
        window.addEventListener('scroll', handleScroll, { passive: true });
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };

    observerRef.current = new IntersectionObserver(callbackObserver);
    observerRef.current.observe(heroRef.current);

    return () => {
      observerRef.current.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className={styles.section} ref={heroRef}>
      <div className={styles.skyLayer} ref={skyRef} />
      <div className={styles.mountainsLayer} ref={mountainsRef} />
      <div className={styles.grassLayer} ref={grassRef} />
      <div className={styles.container} ref={containerRef}>
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
