import { ServiceBase } from './service-base';

export class ProductService extends ServiceBase {

  static async getProducts() {
    const prodResp = await fetch(this.getUrl("/products"), {
      cache: "no-store",
    });

    if (!prodResp.ok) {
      throw new Error(`Failed to fetch products: ${prodResp.status}`);
    }

    return prodResp.json();
  }

static async getProductById(id: number) {
  try {
    const res = await fetch(this.getUrl(`/products/${id}`), {
      cache: "no-store",
    });

    console.log("Status:", res.status);

    const text = await res.text();

    console.log("Response body:", text);

    if (!text) return null;

    return JSON.parse(text);
  } catch (err) {
    console.error(err);
    return null;
  }
}
}