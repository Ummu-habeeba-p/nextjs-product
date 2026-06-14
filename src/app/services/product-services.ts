import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  static async getProducts() {
  const res = await fetch(this.getUrl("/products"));
  const data = await res.json();
  return data.products;
}

static async getProductById(id: number) {
  try {
    const url = this.getUrl(`/products/${id}`);

    console.log("URL:", url);

    const res = await fetch(url, {
      cache: "no-store",
    });

    console.log("Status:", res.status);

    const text = await res.text();

    console.log("Response:", text);

    if (!text) return null;

    return JSON.parse(text);
  } catch (error) {
    console.error(error);
    return null;
  }
}
}