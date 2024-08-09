import Image from "next/image";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "../../models";

export const ProductCard = (props: ProductCardProps) => {
  const { imgSrc, altImg, title, price } = props;
  console.log(imgSrc);
  return (
    <div className={styles.productCard}>
      <Image
        src={imgSrc}
        className={styles.productCardImg}
        alt={altImg}
        width={400}
        height={400}
      />
      <div className={styles.productCardContent}>
        <h3 className={`${styles.productCardTitle} raleway-400`}>{title}</h3>
        <p className={`${styles.productCardPrice} source-sans-3-300`}>
          Desde {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
