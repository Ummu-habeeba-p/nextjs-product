import CartButton from '@/app/components/cartButton/CartButton';
import React from 'react'
import { ProductService } from '@/app/services/product-services';

export async function generateMetadata(props: any) {
  const params = await props.params;

  const productId = Number(params.productId);

  if (productId) {
    const product = await ProductService.getProductById(productId);

    return {
      title: product.title,
    };
  }

  return {
    title: "Product Detail Page",
  };
}
export default async function productDetail(props: any) {
  const params = await props.params;
  const productId = Number(params.productId);
  const product = productId ? await ProductService.getProductById(productId) : null;

  if (!product || typeof product !== "object") {
    return (
      <div className="card p-3">
        <h3>Product not found.</h3>
        <p>We could not load this product. Please try another item.</p>
      </div>
    );
  }

  return (
    // <div>{product.title},{product.price}</div>
     <div className="card p-3">

  <div className="row g-4 align-items-center">

    
    <div className="col-md-4 text-center">
      <img
        src={product.image || "/image/placeholder.png"}
        alt={product.title || "Product image"}
        className="img-fluid"
        style={{
          height: "300px",
          objectFit: "contain"
        }}
      />
    </div>

    
    <div className="col-md-8">

      <h3>{product.title}</h3>

      <p className="mt-3">
        {product.description}
      </p>

      <h4 className="text-success">
        ${product.price}
      </h4>

    
      <CartButton product={product} />
    </div>

  </div>

</div>
  )
}