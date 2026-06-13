
"use client";

import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row">
      {products.map((p: any) => (
        <div key={p.id} className="col-12 col-md-6 col-lg-3 mb-4">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}