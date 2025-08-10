import styles from './SocialLinks.module.css';

export const SocialLinks = function SocialLinks() {
  return (
    <nav>
      <ul className={styles.social}>
        <h3 className={styles.socialText}>Follow us</h3>
        <li>
          <a href="#" aria-label="MNTN instagram">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use href="/sprite.svg#i-social-instagram" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" aria-label="MNTN twitter">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use href="/sprite.svg#i-social-twitter" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};
