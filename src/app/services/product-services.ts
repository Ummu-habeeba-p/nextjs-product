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

    if (!res.ok) {
      console.log("API failed:", res.status);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.log("Fetch error:", err);
    return null;
  }
}
}