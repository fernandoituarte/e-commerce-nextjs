import { titleFont } from '@/config/fonts'
import Image from 'next/image'

export default function Shop() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={`text-2xl font-bold ${titleFont.className}`}>Hello World</div>
    </main>
  )
}
