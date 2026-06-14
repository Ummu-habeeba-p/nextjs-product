import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  static async getProducts() {
  const res = await fetch(this.getUrl("/products"));
  const data = await res.json();
  return data.products;
}

static async getProductById(id: number) {
  const res = await fetch(this.getUrl(`/products/${id}`));

  if (!res.ok) return null;

  return await res.json();
}
}