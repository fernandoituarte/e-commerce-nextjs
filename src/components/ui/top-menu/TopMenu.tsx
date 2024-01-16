import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full border-b">
      <div>
        <Link href={'/'}>
          <span className={ `${titleFont.className} antialiased font-bold`}>E-Shop</span>
          <span> | Clothes</span>
        </Link>
      </div>
      {/*Center Menu */}
      <div className="hidden sm:block">
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href={'/category/men'}>
          <span>Men</span>
        </Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href={'/category/women'}>
          <span>Women</span>
        </Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href={'/category/kids'}>
          <span>Kids</span>
        </Link>
      </div>
      {/*Search, Cart, Menu */}
      <div className="flex items-center">
        <Link className="mx-2" href={'/search'}>
          <IoSearchOutline className="w-7 h-7"/>
        </Link>
        <Link className="mx-2" href={'/cart'}>
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
            <IoCartOutline className="w-7 h-7"/>
          </div>
        </Link>

        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menu
        </button>
      </div>
    </nav>
  )
}
