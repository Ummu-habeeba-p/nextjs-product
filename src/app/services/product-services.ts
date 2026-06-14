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

    if (!res.ok) {
      return null;
    }

    const contentType = res.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      console.log("Non-JSON response");
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}
}