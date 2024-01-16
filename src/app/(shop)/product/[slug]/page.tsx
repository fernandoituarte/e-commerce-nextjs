import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";


interface Props {
  params:{
    slug: string;
  } 
}
export default function ProductPage({params}: Props) {
  const { slug } = params;

  const product = initialData.products.find(product => product.slug === slug);
  
  if(!product) {
    notFound();
  }

  return (
    <div className="">

    </div>
  )
}
