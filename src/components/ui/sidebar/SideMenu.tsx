'use client';
import Link from "next/link";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"

export const SideMenu = () => {
  return (
    <div>
      {/*Background black */}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"/>
      {/*Blur */}
      <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"/>
      {/* Sidemenu */}
      {/* //todo: efecto de slide */}
      <nav className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300">
        <IoCloseOutline 
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => console.log('click')}
        />
        <div className="relative mt-14 ">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Menu */}
        <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href={'/'}>
          <IoPersonOutline size={30}/>
          <span className="ml-3 text-xl">Profile</span>
        </Link>
        <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href={'/'}>
          <IoTicketOutline size={30}/>
          <span className="ml-3 text-xl">Orders</span>
        </Link>
        <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href={'/'}>
          <IoLogInOutline size={30}/>
          <span className="ml-3 text-xl">Login</span>
        </Link>
        <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href={'/'}>
          <IoLogOutOutline size={30}/>
          <span className="ml-3 text-xl">Logout</span>
        </Link>

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-10"/>

        <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href={'/'}>
          <IoShirtOutline size={30}/>
          <span className="ml-3 text-xl">Products</span>
        </Link>
        <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href={'/'}>
          <IoTicketOutline size={30}/>
          <span className="ml-3 text-xl">Orders</span>
        </Link>
        <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href={'/'}>
          <IoPeopleOutline size={30}/>
          <span className="ml-3 text-xl">Users</span>
        </Link>
      </nav>
    </div>
  )
}
