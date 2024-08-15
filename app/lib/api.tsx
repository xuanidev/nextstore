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
      throw new Error("Failed to fetch products");
    }
    const data: ProductFromApi[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw (error as Error).message;
  }
}

export async function fetchProductById(id: number): Promise<ProductFromApi> {
  try {
    const urlToFetch = "https://django-backend-store.vercel.app/products/" + id;
    const response = await fetch(urlToFetch, {
      cache: "no-cache",
      headers: {
        Authorization: `Token ${process.env.NEXT_PUBLIC_CURRENT_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data: ProductFromApi = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw (error as Error).message;
  }
}
