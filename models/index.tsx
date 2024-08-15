export interface ProductCardProps {
  id: number;
  imgSrc: string;
  altImg: string;
  title: string;
  price: number;
}
export interface ImagesProduct {
  id: string;
  url: string;
  alt: string;
}

export interface ProductPageProps {
  id: number;
  imgSrc: string;
  altImg: string;
  title: string;
  price: number;
  description: string;
  images: ImagesProduct[];
}
