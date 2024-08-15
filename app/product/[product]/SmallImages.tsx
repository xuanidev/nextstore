import styles from "./SmallImages.module.css";
import { ImagesProduct } from "@/models";

interface SmallImagesProps {
  imgs: ImagesProduct[];
}

export const SmallImages = ({ imgs }: SmallImagesProps) => {
  return (
    <div className={styles.smallImagesContainer}>
      {imgs &&
        imgs.map((img: ImagesProduct) => (
          <img
            className={styles.smallImg}
            key={img.id}
            src={img.url}
            width={100}
            alt={img.alt}
          />
        ))}
    </div>
  );
};

export default SmallImages;
