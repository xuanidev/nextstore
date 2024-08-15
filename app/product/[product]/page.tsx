"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./Product.module.css";
import { fetchProductById } from "@/app/lib/api";
import { ImagesProduct, ProductPageProps } from "@/models";
import { ProductImages } from "./ProductImages";
import { serializeProduct } from "@/serializers/products";
import { kodchasan } from "@/app/lib/fonts";

async function getProductsById(id: number): Promise<ProductPageProps> {
  try {
    const data = await fetchProductById(id);
    const serializedProduct = serializeProduct(data);
    console.log(serializedProduct);
    return serializedProduct;
  } catch (error) {
    console.error("Error fetching products:", error);
    return {} as ProductPageProps;
  }
}

export default function Page() {
  const searchParams = useSearchParams();

  const item = searchParams.get("prod");
  const [product, setProduct] = useState<ProductPageProps>(
    {} as ProductPageProps
  );

  useEffect(() => {
    async function fetchData() {
      const productData = await getProductsById(Number(item));
      setProduct(productData);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.productContainer}>
      <h3 className={`${styles.productTitle} ${kodchasan.className}`}>
        {product.title}
      </h3>
      <ProductImages imgs={product.images} />
    </div>
  );
}
