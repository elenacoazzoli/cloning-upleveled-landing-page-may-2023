import styles from './App.module.scss';
import { ReactComponent as AbyssaleLogo } from './images/AbyssaleLogo.svg';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.promoSection}>
          <span>
            Image Form: You can now generate multi format visuals from static
            and animated templates!
          </span>
          <a href="/#">
            <span>Try it Out</span>
            <span>&rarr;</span>
          </a>
        </div>
        <nav className={`${styles.container} ${styles.navigationBar}`}>
          <AbyssaleLogo />
          <ul>
            <li>
              <a href="/#">Product</a>
            </li>
            <li>
              <a href="/#">Product</a>
            </li>
            <li>
              <a href="/#">Product</a>
            </li>
            <li>
              <a href="/#">Product</a>
            </li>
            <li>
              <a href="/#">Product</a>
            </li>
          </ul>
          <div className={styles.headerButtonsContainer}>
            <a href="/#" className={styles.baseHeaderButton}>
              Sign in
            </a>
            <a
              href="/#"
              className={`${styles.baseHeaderButton} ${styles.headerButtonBlue}`}
            >
              Sign Up
            </a>
          </div>
        </nav>
      </header>
      <main className={`${styles.container} ${styles.main}`}>
        <section className={styles.heroSection}>
          <div className={styles.heroSectionContent}>
            <span className={styles.titleDescription}>Growth & ROI</span>
            <h1 className={styles.mainTitle}>
              Personalized images for Email marketing
            </h1>
            <p>
              Send unique and personalized images to each of your recipient!
              Works perfectly for email marketing campaigns, E-commerce stores,
              or blogs at scale..
            </p>
            <div className={styles.heroButtonsContainer}>
              <a href="/#" className={styles.baseHeroButton}>
                Personalize my Images
              </a>
              <a
                href="/#"
                className={`${styles.baseHeroButton} ${styles.orangeHeroButton}`}
              >
                Request Demo
              </a>
            </div>
          </div>

          <img
            src="https://uploads-ssl.webflow.com/6214efb2d4b5d94158f2ff03/628608d8bf802b1939ee7507_Dynamic%20image%20landing.svg"
            loading="eager"
            id="w-node-_327d61ae-6f58-a928-f5f1-a26849d3ec70-49d3ec5e"
            alt=""
          />
        </section>
        <section className={styles.secondSection}>
          <img
            src="https://uploads-ssl.webflow.com/6214efb2d4b5d94158f2ff03/62178150e3733c63f89896f1_spreadsheet-deco.webp"
            loading="lazy"
            width="344"
            height="305"
            alt=""
            className={styles.coloredBlob}
          />
          <div className={styles.sectionContent}>
            <span className={styles.titleDescription}>Personalization</span>
            <h2>What is a Personalized Image?</h2>
            <p>
              Engage with your audience like never before. <br /> Use your
              subscriber data to Personalize your visual content. Stand out from
              the crowd and deliver a fully customized customer experience
            </p>
          </div>

          <img
            src="https://uploads-ssl.webflow.com/6214efb2d4b5d94158f2ff03/624c511b92a43724cdff6a43_dynamic-image-showcase%402x.png"
            className={styles.videoImage}
            alt=""
          />
          <div className={styles.contentGrid}>
            <div className={styles.gridContent}>
              <span>Personalize any layer</span>
              <p>
                Every layer of your Abyssale templates can be personalized with
                subscriber data
              </p>
            </div>
            <div className={styles.gridContent}>
              <span>Personalize any layer</span>
              <p>
                Every layer of your Abyssale templates can be personalized with
                subscriber data
              </p>
            </div>
            <div className={styles.gridContent}>
              <span>Personalize any layer</span>
              <p>
                Every layer of your Abyssale templates can be personalized with
                subscriber data
              </p>
            </div>
            <div className={styles.gridContent}>
              <span>Personalize any layer</span>
              <p>
                Every layer of your Abyssale templates can be personalized with
                subscriber data
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>my footer</footer>
      <div className={styles.chatBot}>
        <div className={styles.botImage}>&nbsp;</div>
      </div>
    </>
  );
}
