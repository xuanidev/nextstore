import Image from "next/image";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "../../models";
import { source_sans_3 } from "@/app/lib/fonts";
import Link from "next/link";

export const ProductCard = (props: ProductCardProps) => {
  const { imgSrc, altImg, title, price } = props;
  return (
    <Link href="/product/1" className={` ${styles.productCard} ${styles.a} `}>
      <Image
        src={imgSrc}
        className={styles.productCardImg}
        alt={altImg}
        width={400}
        height={400}
      />
      <div className={styles.productCardContent}>
        <h3 className={`${styles.productCardTitle}`}>{title}</h3>
        <p className={`${styles.productCardPrice} ${source_sans_3.className} `}>
          Desde {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
