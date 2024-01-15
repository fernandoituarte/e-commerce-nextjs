import { Title, ProductGrid } from '@/components'
import { titleFont } from '@/config/fonts'
import { initialData } from '@/seed/seed';
import Image from 'next/image'


const products = initialData.products;

export default function Shop() {
  return (
    <>
      <Title 
        title='Shop'
        subtitle='All products'
        className='mb-2'
      />

      <ProductGrid products={products} />
    </>
  )
}
