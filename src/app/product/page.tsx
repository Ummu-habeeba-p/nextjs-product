import React from 'react'
import ProductCard from '../components/productCard/ProductCard';
import { ProductService } from '../services/product-services';
import ProductList from '../components/productList/ProductList';

export default async function Products() {

  return (
    <ProductList/>

  );
}
