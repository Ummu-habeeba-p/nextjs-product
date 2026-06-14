"use client";

import CartButton from "@/app/components/cartButton/CartButton";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductView({ product }: { product: Product }) {
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
          <h4>${product.price}</h4>
          <p>{product.description}</p>
          <p><b>Category:</b> {product.category}</p>

          <div className="d-flex gap-2 mt-4">
            <CartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}