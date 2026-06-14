import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  static async getProducts() {
    const res = await fetch(this.getUrl("/products"), {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  }

  static async getProductById(id: number) {
    try {
      if (!Number.isFinite(id)) return null;

      const url = this.getUrl(`/products/${id}`);
      console.log("URL:", url);

      const res = await fetch(url, {
        cache: "no-store",
      });

      console.log("Status:", res.status);

      if (!res.ok) {
        console.warn("API failed, using fallback");

        const fallback = await this.getProducts();
        return fallback.find((p: any) => p.id === id) || null;
      }

      return await res.json();
    } catch (error) {
      console.error("Fetch error:", error);

      const fallback = await this.getProducts();
      return fallback.find((p: any) => p.id === id) || null;
    }
  }
}