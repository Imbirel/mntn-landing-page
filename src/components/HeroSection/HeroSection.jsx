import styles from './HeroSection.module.css';

export const HeroSection = function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>
          <svg
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
          <svg
            aria-hidden="true"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
