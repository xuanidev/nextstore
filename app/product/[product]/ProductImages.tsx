import styles from "./ProductImages.module.css";
import { ImagesProduct } from "@/models";
import SmallImages from "./SmallImages";
import BigImages from "./BigImages";

interface ImagesProductProps {
  imgs: ImagesProduct[];
}

export const ProductImages = ({ imgs }: ImagesProductProps) => {
  return (
    <div className={styles.productContainer}>
      <BigImages imgs={imgs} />
      <SmallImages imgs={imgs} />
    </div>
  );
};

export default ProductImages;
