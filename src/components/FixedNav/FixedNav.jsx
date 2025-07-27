import { useEffect, useRef, useState } from 'react';
import styles from './FixedNav.module.css';

const sectionIds = ['hero', 'article-01', 'article-02', 'article-03'];

export const FixedNav = function FixedNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const trackerRef = useRef(null);
  const sectionRefs = useRef({});
  const navItemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        sectionRefs.current[id] = section;
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        if (sectionRefs.current[id]) {
          observer.unobserve(sectionRefs.current[id]);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (!trackerRef.current) return;

    const sectionIndex = {
      hero: 0,
      'article-01': 1,
      'article-02': 2,
      'article-03': 3,
    }[activeSection];

    if (sectionIndex === undefined || !navItemsRef.current[sectionIndex]) return;

    const activeNavItem = navItemsRef.current[sectionIndex];
    const { offsetTop } = activeNavItem;

    trackerRef.current.style.cssText = `
      top: ${offsetTop - 20}px;
    `;
  }, [activeSection]);

  return (
    <div className={styles.container}>
      <aside>
        <ul className={styles.social}>
          <li className={styles.socialText}>Follow us</li>
          <li>
            <a href="/" aria-label="MNTN instagram">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="/sprite.svg#i-social-instagram" />
              </svg>
            </a>
          </li>
          <li>
            <a href="/" aria-label="MNTN twitter">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="/sprite.svg#i-social-twitter" />
              </svg>
            </a>
          </li>
        </ul>
      </aside>
      <nav className={styles.navContainer}>
        <div ref={trackerRef} className={styles.tracker} />
        <ul className={styles.slider}>
          {sectionIds.map((id, index) => (
            <li key={id} ref={(el) => (navItemsRef.current[index] = el)}>
              <a href={`#${id}`}>{index === 0 ? 'Start' : `0${index}`}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
