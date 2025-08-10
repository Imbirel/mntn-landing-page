import { useEffect, useRef, useState } from 'react';
import styles from './FixedNav.module.css';
import { SECTIONS_IDS } from '@constants/app';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const FixedNav = function FixedNav() {
  const [activeId, setActiveId] = useState('hero');
  const trackerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, { threshold: 0.5 });

    SECTIONS_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observerRef.current.observe(section);
      }
    });

    return () => observerRef.current.disconnect();
  }, []);

  useEffect(() => {
    const sectionIndex = SECTIONS_IDS.indexOf(activeId);
    const trackerHeight = trackerRef.current.offsetHeight;
    const offsetValue = sectionIndex * trackerHeight;

    trackerRef.current.style.transform = `translateY(${offsetValue}px)`;
  }, [activeId]);

  return (
    <aside className={styles.asideContainer}>
      <div className={styles.asideContent}>
        <SocialLinks />
        <nav className={styles.sliderContainer}>
          <div ref={trackerRef} className={styles.tracker} aria-hidden="true" />
          <ul className={styles.slider}>
            {SECTIONS_IDS.map((id, index) => (
              <li key={id}>
                <a href={`#${id}`}>{index === 0 ? 'Start' : `0${index}`}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
