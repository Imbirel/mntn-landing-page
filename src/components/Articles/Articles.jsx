import { SvgArrowRight } from '../Svg/SvgArrowRight';
import { SvgLine } from '../Svg/SvgLine';
import styles from './Articles.module.css';

export const Articles = function Articles() {
  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <article id="article-01" className={styles.article} aria-labelledby="title-01">
        <div className={styles.articleContent}>
          <div className={styles.articleNumber}>
            <svg aria-hidden="true" width="215" height="176" viewBox="0 0 215 176">
              <use href="/sprite.svg#svg-article-01" />
            </svg>
          </div>
          <p className={styles.subtitle}>
            <SvgLine />
            get started
          </p>
          <h2 id="title-01">What level of hiker are you?</h2>
          <p className={styles.text}>
            Determining what level of hiker you are can be an important tool when planning future
            hikes. This hiking level guide will help you plan hikes according to different hike
            ratings set by various websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert backpacker?
          </p>
          <a href="/" className={styles.readMore}>
            read more
            <SvgArrowRight />
          </a>
        </div>
        <img
          loading="lazy"
          src="/images/01.webp"
          width="566"
          height="720"
          alt="A men walking on mountain"
        />
      </article>
      <article id="article-02" className={styles.article} aria-labelledby="title-02">
        <img
          loading="lazy"
          src="/images/02.webp"
          width="566"
          height="720"
          alt="A man on top of a camel"
        />
        <div className={styles.articleContent}>
          <div className={styles.articleNumber}>
            <svg aria-hidden="true" width="258" height="176" viewBox="0 0 258 176">
              <use href="/sprite.svg#svg-article-02" />
            </svg>
          </div>
          <p className={styles.subtitle}>
            <SvgLine />
            Hiking Essentials
          </p>
          <h2 id="title-02">Picking the right Hiking Gear!</h2>
          <p className={styles.text}>
            The nice thing about beginning hiking is that you don’t really need any special gear,
            you can probably get away with things you already have. Let’s start with clothing. A
            typical mistake hiking beginners make is wearing jeans and regular clothes, which will
            get heavy and chafe wif they get sweaty or wet.
          </p>
          <a href="/" className={styles.readMore}>
            read more
            <SvgArrowRight />
          </a>
        </div>
      </article>
      <article id="article-03" className={styles.article} aria-labelledby="title-03">
        <div className={styles.articleContent}>
          <div className={styles.articleNumber}>
            <svg aria-hidden="true" width="260" height="176" viewBox="0 0 260 176">
              <use href="/sprite.svg#svg-article-03" />
            </svg>
          </div>
          <p className={styles.subtitle}>
            <SvgLine />
            where you go is the key
          </p>
          <h2 id="title-03">Understand Your Map & Timing</h2>
          <p className={styles.text}>
            To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock
            bag. Read over the guide, study the map, and have a good idea of what to expect. I like
            to know what my next landmark is as I hike. For example, I’ll read the guide and know
            that say, in a mile, I make a right turn at the junction..
          </p>
          <a href="/" className={styles.readMore}>
            read more
            <SvgArrowRight />
          </a>
        </div>
        <img
          loading="lazy"
          src="/images/03.webp"
          width="566"
          height="720"
          alt="A man holding a compass"
        />
      </article>
    </div>
  );
};
