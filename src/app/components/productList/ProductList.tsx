import { ProductService } from '@/app/services/product-services';
import React from 'react';
import ProductCard from '../productCard/ProductCard';

export default async function ProductList() {
  const products = await ProductService.getProducts();

  return (
    <div className="row">
      {products.map((p: any) => (
        <div className="col-12 col-md-6 col-lg-3 mb-4" key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}

  