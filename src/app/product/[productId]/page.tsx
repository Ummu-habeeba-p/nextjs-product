 "use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CartButton from "@/app/components/cartButton/CartButton";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [productId]);

  if (!product) return <h2>Loading...</h2>;
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

          {/* <div className="d-flex gap-2 mt-4">
            <button className="btn btn-primary">Add to cart</button> */}
            <div className="d-flex gap-2 mt-4">
            <CartButton product={product}/>

          </div>
        </div>
      </div>
    </div>
  );
}
