import Link from "next/link";
import styles from "./NavBar.module.css";
import { kodchasan } from "@/app/lib/fonts";
import { EmptyCart } from "../Icons";

export const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <Link
        href="/"
        className={`${styles.navBarTitle} ${styles.a}  ${kodchasan.className}`}
      >
        NFC Studio
      </Link>
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
        <Link href="/" className={styles.navBarLink}>
          <EmptyCart className={styles.navBarCart} />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
