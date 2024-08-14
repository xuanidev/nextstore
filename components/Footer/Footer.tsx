import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.leftFooter}>Left Footer</div>
      <div className={styles.rightFooter}>Right Footer</div>
    </footer>
  );
};
