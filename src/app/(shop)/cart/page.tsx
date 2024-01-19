import { QuantitySelector, Title } from "@/components";
import { Product } from "@/intefaces";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";

const productsInCart = [
  initialData.products[0],
];
interface Props {
  products: Product[];
}
export default function CartPage({ products }: Props) {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Cart" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Add more items</span>
            <Link href={"/"} className="underline mb-5"></Link>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={80}
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <QuantitySelector quantity={3} />
                  <button className="underline mt-3">Remove</button>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Order Summary</h2>
            <div className="grid grid-cols-2">
              <span>Products</span>
              <span className="text-right">3 items</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Salres Tax</span>
              <span className="text-right">$ 100</span>

              <span className="text-2xl mt-5">Total</span>
              <span className="text-2xl mt-5 text-right">$ 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <Link href={'/checkout/address'} className="flex btn-primary justify-center">
              Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
