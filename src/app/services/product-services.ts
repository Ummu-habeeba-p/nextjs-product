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
    const url = this.getUrl(`/products/${id}`);

    console.log("Fetching:", url);

    const res = await fetch(url, {
      cache: "no-store",
    });

    console.log("Status:", res.status);

    const text = await res.text();

    console.log("Body:", text.substring(0, 200));

    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
}