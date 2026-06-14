import { ProductService } from "@/app/services/product-services";
import ProductView from "./ProductView";

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  try {
    const { productId } = await params;

    const id = Number(productId);

    if (isNaN(id)) {
      return <h2>Invalid product ID</h2>;
    }

    const product = await ProductService.getProductById(id);

    if (!product) {
      return <h2>Product not found</h2>;
    }

    return <ProductView product={product} />;
  } catch (error) {
    console.error("Page error:", error);
    return <h2>Error loading product</h2>;
  }
}