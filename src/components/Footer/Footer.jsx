import styles from './Footer.module.css';

export const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div>
          <img loading="lazy" src="../src/assets/logos/logo.svg" alt="logo" />
          <p className={styles.footerText}>
            Get out there & discover your next slope, mountain & destination!
          </p>
        </div>
        <p className={styles.copyright}>Copyright 2019 MNTN, Inc. Terms & Privacy</p>
      </div>
      <nav className={styles.nav}>
        <div>
          <h3>More on The Blog</h3>
          <ul className={styles.links}>
            <li>
              <a href="/about">About MNTN</a>
            </li>
            <li>
              <a href="/contributors">Contributors & Writers</a>
            </li>
            <li>
              <a href="/write-for-us">Write For Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>More on MNTN</h3>
          <ul className={styles.links}>
            <li>
              <a href="/team">The Team</a>
            </li>
            <li>
              <a href="/jobs">Jobs</a>
            </li>
            <li>
              <a href="/press">Press</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};
