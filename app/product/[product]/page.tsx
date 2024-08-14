"use client";
import { useParams } from "next/navigation";
import styles from "./Product.module.css";

export default function Page() {
  const params = useParams();
  return <div className={styles.productContainer}>Post: {params.product}</div>;
}
