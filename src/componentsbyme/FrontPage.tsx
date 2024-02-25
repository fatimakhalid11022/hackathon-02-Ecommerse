import React from 'react'
import Image from 'next/image';
import Link from "next/link"
import { FiShoppingCart } from "react-icons/fi";
import feature1 from "../../public/assets/Featured1.webp"
import feature2 from "../../public/assets/Featured2.webp"
import feature3 from "../../public/assets/Featured3.webp"
import feature4 from "../../public/assets/Featured4.webp"
import frontPic from "../../public/assets/FrontPic.webp"
import { Button } from '@/components/ui/button';
const FrontPage = () => {
  return (
    <div className='flex p-10 justify-around'>
        {/* rigth side with text */}
        <div className='md:w-1/2 w-full md:pl-10'>
            <Button className='bg-blue-100 text-blue-600 font-semibold rounded-md text-lg m-3 mb-4 hover:animate-none'>
                Sale 70%
            </Button>
            <h1 className='text-7xl font-bold mb-7'>
            An Industrial Take on Streetwear
            </h1>
            <p className='text-gray-600 text-md w-72 mb-5'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <Link href ="/AllProducts">
            <button className='flex p-1 text-white  bg-black text-lg w-36 font-semibold text-center'>
                <FiShoppingCart className='text-5xl p-1 pl-2'/>
                <div> Start Shopping</div>
            </button>
            </Link>
            <div className='sm:flex grid grid-cols-2 gap-4 mt-7'>
                <Image alt ="Labels" width={100} height={100} src ={feature1}/>
                <Image alt ="Labels" width={100} height={100} src ={feature2}/>
                <Image alt ="Labels" width={100} height={100} src ={feature3}/>
                <Image alt ="Labels" width={100} height={100} src ={feature4}/>
            </div>
        </div>
        {/* left side with image */}
        <div className='md:w-1/2 md:block hidden'>
            <div className=' bg-orange-50 rounded-full'>
            <Image src={frontPic} alt ="frontImage" className='h-full' />
            </div>
        </div>

    </div>
  )
}

export default FrontPage