import { ProductGrid, Title } from "@/components";
import { ValidCategory } from "@/intefaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: ValidCategory;
  }
}
const products = initialData.products;

export default function page({params}: Props) {
  const {id} = params;

  if(!['kid', 'women', 'men', 'unisex'].includes(id)) {
    notFound();
  }
  
  const productsByCategory = products.filter( product => id === product.gender)
  
  const labels: Record<ValidCategory, string> = {
    'men': 'MEN',
    'women': 'WOMEN',
    'kid': 'KIDS',
    'unisex': 'UNISEX',
  }
  
  return (
    <>
      <Title 
        title={labels[id]}
        subtitle='All products'
        className='mb-2'
      />
      <ProductGrid products={productsByCategory} />
    </>
  )
}
