import styles from "./ContentHero.module.css";
import { kodchasan } from "@/app/lib/fonts";

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
