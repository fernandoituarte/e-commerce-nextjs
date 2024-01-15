import { Title } from '@/components'
import { titleFont } from '@/config/fonts'
import Image from 'next/image'

export default function Shop() {
  return (
    <>
      <Title 
        title='Shop'
        subtitle='All products'
        className='mb-2'
      />
    </>
  )
}
