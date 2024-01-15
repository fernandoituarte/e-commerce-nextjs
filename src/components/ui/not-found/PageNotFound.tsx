import { titleFont } from "@/config/fonts"
import Link from "next/link"
import Image from "next/image"

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800pxa] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Whooops! We are sorry.</p>
          <span>Go back </span>
          <Link href={'/'} className="font-normal hover:underline transition-all">Home</Link>
      </div>
      <div className="px-5 mx-5">
        <Image src={'/imgs/starman_750x750.png'} width={550} height={550} alt="Starman"/>
      </div>
    </div>
  )
}
