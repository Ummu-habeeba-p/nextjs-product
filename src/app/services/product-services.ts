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
  const res = await fetch(this.getUrl(`/products/${id}`), {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`API Error: ${res.status}`);

  return res.json();
}
}