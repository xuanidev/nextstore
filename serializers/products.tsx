import { Product } from "@/models/fetchFromApi";

export function serializeProduct(product: any): Product {
  return {
    id: product.id,
    categories: product.categories.map((category: any) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      createdAt: category.created_at,
      updatedAt: category.updated_at,
    })),
    name: product.name,
    description: product.description,
    price: product.price,
    createdAt: product.created_at,
    updatedAt: product.updated_at,
    mainImg: product.main_img_url,
    dimensions: product.dimensions,
    availables: product.availables,
    puntuation: product.puntuation,
  };
}
