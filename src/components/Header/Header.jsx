import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const Header = function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenMenu]);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <span className={styles.mntn}>MNTN</span>
        <button
          className={styles.menuButton}
          aria-expanded={isOpenMenu}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {isOpenMenu ? (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use href="/sprite.svg#i-close" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use href="/sprite.svg#i-menu" />
            </svg>
          )}
        </button>
        <div className={`${styles.headerNav} ${isOpenMenu ? styles.navOpen : ''}`}>
          <nav className={styles.headerMenu}>
            <ul className={styles.ul}>
              <li>
                <a href="#">Equipment</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <a href="#" className={styles.account}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="/sprite.svg#i-user" />
              </svg>
              <span>Account</span>
            </a>
          </nav>
          {isOpenMenu && (
            <div className={styles.wrapSocial}>
              <SocialLinks />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
