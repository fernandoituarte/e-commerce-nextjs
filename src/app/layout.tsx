import type { Metadata } from 'next'
import { inter } from '@/config/fonts'

import './globals.css'



export const metadata: Metadata = {
  title: 'E-Shop',
  description: 'Discover the latest trends and shop a curated collection of fashionable clothing at E-Shop. Explore stylish outfits, find exclusive deals, and redefine your wardrobe with our diverse range of high-quality apparel.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
