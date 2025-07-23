import styles from './Footer.module.css';

export const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div>
          <span className={styles.mntn}>MNTN</span>
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
              <a href="#">About MNTN</a>
            </li>
            <li>
              <a href="#">Contributors & Writers</a>
            </li>
            <li>
              <a href="#">Write For Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>More on MNTN</h3>
          <ul className={styles.links}>
            <li>
              <a href="#">The Team</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};
