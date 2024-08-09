"use client";
import { fetchProducts } from "@/utils/api";
import { ProductCardProps } from "../../models";
import { ProductCard } from "./ProductCard";
import styles from "./ProductsLanding.module.css";
import { ProductFromApi } from "@/models/fetchFromApi";
import { useEffect, useState } from "react";

async function getProducts(): Promise<ProductCardProps[]> {
  try {
    const data = await fetchProducts();
    const serializedProducts: ProductCardProps[] = data.map(
      (product: ProductFromApi) => ({
        imgSrc: product.main_img_url,
        altImg: product.description,
        title: product.name,
        price: parseFloat(product.price),
      })
    );
    console.log(serializedProducts);
    return serializedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export const ProductsLanding = () => {
  const [cards, setCards] = useState<ProductCardProps[]>([]);
  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setCards(products);
    }

    fetchData();
  }, []);

  return (
    <section className={styles.productsLanding}>
      <h2 className={styles.productsLandingTitle}>
        NFC&apos;S INTEGRADOS MÁS VENDIDOS:
      </h2>
      <div className={styles.prodcutsLandingCards}>
        {cards.map((card, index) => (
          <ProductCard
            key={card.title.concat(index.toString())}
            imgSrc={card.imgSrc}
            altImg={card.altImg}
            title={card.title}
            price={card.price}
          />
        ))}
      </div>
    </section>
  );
};
export default ProductsLanding;
