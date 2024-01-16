"use client";

import { Product } from "@/intefaces/product.interface";
import { useState } from "react";

import Image from 'next/image'
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductGridItem = ({product}: Props) => {
  const [ displayImage, setDisplayImage ] = useState(product.images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image 
          className="w-full object-cover rounded-sm" 
          src={`/products/${displayImage}`} 
          width={500} height={500} 
          alt={product.title} 
          onMouseEnter={() => setDisplayImage(product.images[1])} 
          onMouseLeave={() => setDisplayImage(product.images[0])}/>
      </Link>
      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-500" href={`/product/${product.slug}`}>{ product.title }</Link>
        <span className="font-bold">$ {product.price}</span>
      </div>
    </div>
  )
}