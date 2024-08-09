import styles from "./ContentHero.module.css";

export const ContentHero = () => {
  return (
    <div className={styles.contentHero}>
      <h1 className={`${styles.contentHeroTitle}`}>Hazlo fácil con NFC</h1>
      <p className={`${styles.contentHeroText}`}>
        Descubre cómo nuestros productos pueden transformar
        <br />
        la experiencia de tus clientes.
      </p>
    </div>
  );
};

export default ContentHero;
