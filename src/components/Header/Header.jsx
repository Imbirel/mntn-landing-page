import styles from './Header.module.css';

export const Header = function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.mntn}>MNTN</span>
      <nav>
        <ul className={styles.ul}>
          <li>
            <a href="/">Equipment</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </nav>
      <a href="/" className={styles.account}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use href="/sprite.svg#i-user" />
        </svg>
        <span>Account</span>
      </a>
    </header>
  );
};
