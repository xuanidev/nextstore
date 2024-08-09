import { ProductFromApi } from "@/models/fetchFromApi";

export async function fetchProducts(): Promise<ProductFromApi[]> {
  try {
    const response = await fetch(
      "https://django-backend-store.vercel.app/products",
      {
        cache: "no-cache",
        headers: {
          Authorization: `Token ${process.env.NEXT_PUBLIC_CURRENT_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to fetch products");
    }
    const data: ProductFromApi[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw (error as Error).message;
  }
}
