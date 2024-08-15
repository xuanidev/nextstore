// types.ts
export interface Category {
  id: number;
  name: string;
  description: string;
}
interface ImagesFromApi {
  id: string;
  main_img_url: string;
}
export interface Product {
  id: number;
  categories: Category[];
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  mainImg: string;
  dimensions: string;
  availables: number;
  puntuation: number;
}

export interface ProductFromApi {
  id: number;
  categories: Category[];
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  main_img_url: string;
  dimensions: string;
  availables: number;
  puntuation: number;
  images: ImagesFromApi[];
}
