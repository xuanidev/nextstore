import styles from "./BigImages.module.css";
import { ImagesProduct } from "@/models";

interface BigImagesProps {
  imgs: ImagesProduct[];
}

export const BigImages = ({ imgs }: BigImagesProps) => {
  return (
    <div className={styles.imagesContainer}>
      {imgs &&
        imgs.map((img: ImagesProduct) => (
          <img
            className={styles.bigImage}
            key={img.id}
            src={img.url}
            alt={img.alt}
          />
        ))}
    </div>
  );
};

export default BigImages;
