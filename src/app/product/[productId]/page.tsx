
    'use client'
    import { ProductService } from "@/app/services/product-services";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const product = await ProductService.getProductById(
    Number(params.productId)
  );

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
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