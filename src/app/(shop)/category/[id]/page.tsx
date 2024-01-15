import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string
  }
}
export default function page({params}: Props) {
  const {id} = params;

  if(!['kids', 'women', 'men'].includes(id)) {
    notFound();
  }
  return (
    <div>Category Page {id}</div>
  )
}
