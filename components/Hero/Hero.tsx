import ContentHero from "./ContentHero";
import styles from "./Hero.module.css";
import NavBar from "./NavBar";

export const Hero = () => {
  return (
    <header className={styles.hero}>
      <NavBar />
      <ContentHero />
    </header>
  );
};
export default Hero;
