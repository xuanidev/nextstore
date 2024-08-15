import { ProductPageProps, ImagesProduct } from "@/models";
import { ProductFromApi } from "@/models/fetchFromApi";

export function serializeProduct(data: ProductFromApi): ProductPageProps {
  const images: ImagesProduct[] = data.images.map((img) => ({
    id: img.id,
    url: img.main_img_url,
    alt: data.description,
  }));

  return {
    id: data.id,
    imgSrc: data.main_img_url,
    altImg: data.description,
    title: data.name,
    price: parseFloat(data.price),
    description: data.description,
    images: images,
  };
}
