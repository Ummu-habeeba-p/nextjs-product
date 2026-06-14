
  import { ProductService } from "@/app/services/product-services";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product: any = await ProductService.getProductById(
    Number(productId)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
             src={product.images?.[0]}
            alt={product.title}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4 className="text-success">${product.price}</h4>
          <p>{product.description}</p>
          <p>
            <b>Category:</b> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
}