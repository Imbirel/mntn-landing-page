import styles from './Articles.module.css';

export const Articles = function Articles() {
  return (
    <div className={styles.container}>
      <article id="article-01" className={styles.article}>
        <div className={styles.articleContent}>
          <div className={styles.articleNumber}>
            <svg
              width="215"
              height="176"
              viewBox="0 0 215 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M67.6 175.36C46.64 175.36 30.16 167.44 18.16 151.6C6.32 135.6 0.4 114.4 0.4 88C0.4 61.6 6.32 40.48 18.16 24.64C30.16 8.63999 46.64 0.639989 67.6 0.639989C88.72 0.639989 105.2 8.63999 117.04 24.64C128.88 40.48 134.8 61.6 134.8 88C134.8 114.4 128.88 135.6 117.04 151.6C105.2 167.44 88.72 175.36 67.6 175.36ZM42.16 129.04C47.92 138.32 56.4 142.96 67.6 142.96C78.8 142.96 87.28 138.24 93.04 128.8C98.96 119.36 101.92 105.76 101.92 88C101.92 70.08 98.96 56.4 93.04 46.96C87.28 37.52 78.8 32.8 67.6 32.8C56.4 32.8 47.92 37.52 42.16 46.96C36.4 56.4 33.52 70.08 33.52 88C33.52 105.92 36.4 119.6 42.16 129.04ZM185.284 3.99999H214.084V172H180.964V39.04L149.284 47.92L141.124 19.6L185.284 3.99999Z"
                fill="white"
              />
            </svg>
          </div>
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
            get started
          </p>
          <h2>What level of hiker are you?</h2>
          <p className={styles.text}>
            Determining what level of hiker you are can be an important tool when planning future
            hikes. This hiking level guide will help you plan hikes according to different hike
            ratings set by various websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert backpacker?
          </p>
          <a href="#article-01" className={styles.readMore}>
            read more
            <svg
              aria-hidden="true"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
                fill="currentcolor"
              />
            </svg>
          </a>
        </div>
        <img
          loading="lazy"
          class="article__img"
          src="../src/assets/images/01.png"
          alt="A men walking on mountain"
        />
      </article>
      <article id="article-02" className={styles.article}>
        <img loading="lazy" src="../src/assets/images/02.png" alt="A man on top of a camel" />
        <div className={styles.articleContent}>
          <div className={styles.articleNumber}>
            <svg
              width="258"
              height="176"
              viewBox="0 0 258 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M67.6 175.36C46.64 175.36 30.16 167.44 18.16 151.6C6.32 135.6 0.4 114.4 0.4 88C0.4 61.6 6.32 40.48 18.16 24.64C30.16 8.63999 46.64 0.639989 67.6 0.639989C88.72 0.639989 105.2 8.63999 117.04 24.64C128.88 40.48 134.8 61.6 134.8 88C134.8 114.4 128.88 135.6 117.04 151.6C105.2 167.44 88.72 175.36 67.6 175.36ZM42.16 129.04C47.92 138.32 56.4 142.96 67.6 142.96C78.8 142.96 87.28 138.24 93.04 128.8C98.96 119.36 101.92 105.76 101.92 88C101.92 70.08 98.96 56.4 93.04 46.96C87.28 37.52 78.8 32.8 67.6 32.8C56.4 32.8 47.92 37.52 42.16 46.96C36.4 56.4 33.52 70.08 33.52 88C33.52 105.92 36.4 119.6 42.16 129.04ZM145.433 172V147.28L202.793 88.24C215.593 74.8 221.993 63.6 221.993 54.64C221.993 48.08 219.913 42.8 215.753 38.8C211.753 34.8 206.553 32.8 200.153 32.8C187.513 32.8 178.153 39.36 172.073 52.48L144.233 36.16C149.513 24.64 157.113 15.84 167.033 9.75999C176.953 3.67999 187.833 0.639989 199.673 0.639989C214.873 0.639989 227.913 5.43999 238.793 15.04C249.673 24.48 255.113 37.28 255.113 53.44C255.113 70.88 245.913 88.8 227.513 107.2L194.633 140.08H257.753V172H145.433Z"
                fill="white"
              />
            </svg>
          </div>
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
            Hiking Essentials
          </p>
          <h2>Picking the right Hiking Gear!</h2>
          <p className={styles.text}>
            The nice thing about beginning hiking is that you don’t really need any special gear,
            you can probably get away with things you already have. Let’s start with clothing. A
            typical mistake hiking beginners make is wearing jeans and regular clothes, which will
            get heavy and chafe wif they get sweaty or wet.
          </p>
          <a href="#article-02" className={styles.readMore}>
            read more
            <svg
              aria-hidden="true"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
                fill="currentcolor"
              />
            </svg>
          </a>
        </div>
      </article>
      <article id="article-03" className={styles.article}>
        <div className={styles.articleContent}>
          <div className={styles.articleNumber}>
            <svg
              width="260"
              height="176"
              viewBox="0 0 260 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M67.6 175.36C46.64 175.36 30.16 167.44 18.16 151.6C6.32 135.6 0.4 114.4 0.4 88C0.4 61.6 6.32 40.48 18.16 24.64C30.16 8.63999 46.64 0.639989 67.6 0.639989C88.72 0.639989 105.2 8.63999 117.04 24.64C128.88 40.48 134.8 61.6 134.8 88C134.8 114.4 128.88 135.6 117.04 151.6C105.2 167.44 88.72 175.36 67.6 175.36ZM42.16 129.04C47.92 138.32 56.4 142.96 67.6 142.96C78.8 142.96 87.28 138.24 93.04 128.8C98.96 119.36 101.92 105.76 101.92 88C101.92 70.08 98.96 56.4 93.04 46.96C87.28 37.52 78.8 32.8 67.6 32.8C56.4 32.8 47.92 37.52 42.16 46.96C36.4 56.4 33.52 70.08 33.52 88C33.52 105.92 36.4 119.6 42.16 129.04ZM221.095 72.16C232.455 75.52 241.655 81.44 248.695 89.92C255.895 98.24 259.495 108.32 259.495 120.16C259.495 137.44 253.655 150.96 241.975 160.72C230.455 170.48 216.295 175.36 199.495 175.36C186.375 175.36 174.615 172.4 164.215 166.48C153.975 160.4 146.535 151.52 141.895 139.84L170.215 123.52C174.375 136.48 184.135 142.96 199.495 142.96C207.975 142.96 214.535 140.96 219.175 136.96C223.975 132.8 226.375 127.2 226.375 120.16C226.375 113.28 223.975 107.76 219.175 103.6C214.535 99.44 207.975 97.36 199.495 97.36H192.295L179.575 78.16L212.695 34.96H146.935V3.99999H252.535V31.36L221.095 72.16Z"
                fill="white"
              />
            </svg>
          </div>
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
            where you go is the key
          </p>
          <h2>Understand Your Map & Timing</h2>
          <p className={styles.text}>
            To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock
            bag. Read over the guide, study the map, and have a good idea of what to expect. I like
            to know what my next landmark is as I hike. For example, I’ll read the guide and know
            that say, in a mile, I make a right turn at the junction..
          </p>
          <a href="#article-03" className={styles.readMore}>
            read more
            <svg
              aria-hidden="true"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
                fill="currentcolor"
              />
            </svg>
          </a>
        </div>
        <img loading="lazy" src="../src/assets/images/03.png" alt="A man holding a compass" />
      </article>
    </div>
  );
};
