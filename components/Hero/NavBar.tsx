import Link from "next/link";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <span className={`${styles.navBarTitle}`}>NFC Studio</span>
      <nav className={styles.navBarNav}>
        <Link href="/" className={styles.navBarLink}>
          TECNOLOGÍA
        </Link>
        <Link href="/" className={styles.navBarLink}>
          PRODUCTOS
        </Link>
        <Link href="/" className={styles.navBarLink}>
          CONTACTO
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
