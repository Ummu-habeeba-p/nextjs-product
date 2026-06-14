'use client'
import Link from 'next/link'

import { useState } from 'react'

function ProductCard(props:any) {
 const   prod=props.product
  const [selectedProduct, setSelectedProduct] = useState({})

  const selectprod = () => {
    console.log("Selecting product:", prod)
    setSelectedProduct(prod)
  }
  return (
    
    <div className="card h-100">
      <img
        src={prod.image}
        className="card-img-top p-3 bg-body-tertiary"
        style={{ height: "200px", objectFit: "contain" }}
        alt={prod.title}
      />

       <div className="card-body">
        <Link href={`/product/${prod.id}`} scroll={true}>
          <h6>{prod.title}</h6>
        </Link>

        <p>${prod.price}</p>
        
      </div>
    </div>
  )
}

export default ProductCard