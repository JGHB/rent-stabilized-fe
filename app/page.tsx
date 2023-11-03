import Image from 'next/image'
import StickyHeader from './components/StickyHeader'
import key from  '../public/key.svg'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <StickyHeader/>
      <div className='flex flex-row items-start justify-center py-5 font-inter px-5'>
        <div className='flex flex-col w-full items-center justify-center  italic text-center font-semibold'>
          <div className='text-vw-base leading-tight py-5'>
          find a rent stabilized apartment in nyc
          </div>
          <a className='text-vw-sub pt-5 underline hover:font-bold hover:cursor-pointer p-0'>view available apartments</a>
          <a className='text-vw-sub underline hover:font-bold hover:cursor-pointer'>view available apartments</a>
          <a className='text-vw-sub underline hover:font-bold hover:cursor-pointer'>view available apartments</a>
          {/* <a className='text-vw-sub underline hover:font-bold hover:cursor-pointer'>view available apartments</a> */}

        </div>
        <div className='flex w-full items-center justify-center'>
          <Image src={key} alt="Key Logo" width={750}
      height={750}/>
        </div>
      </div>
    </div>
  )
}
