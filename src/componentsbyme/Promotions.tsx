import React from 'react'
import Image from 'next/image'
import event1 from "../../public/assets/event1.webp"
import event3 from "../../public/assets/event3.webp"
import event4 from "../../public/assets/event4.webp"
import { Button } from "@/components/ui/button"
import { clsx } from 'clsx';

const Promotions = () => {
  return (
    <div className='container mx-auto grid sm:p-16'>
        <h1 className='text-center text-blue-600 font-semibold mb-5'>PROMOTIONS</h1>
        <h2 className='text-center font-bold text-4xl mb-10'>Our Promotions Events</h2>
        <div  className='sm:flex sm:justify-evenly grid grid-col-1 '>
          <div className='sm:w-[43%] w-full'>
              <div className='flex bg-gray-300 '>
                <div className='p-7'>
                <h1 className='font-extrabold text-3xl w-32'>GET UP TO 60%</h1>
                <h4 className='w-20 text-lg font-medium '>For the summer season</h4>
                </div>
                <Image src={event1} alt= "sales price"/>
              </div>
              <div className='bg-black text-white p-12 text-center mt-4'>
                <h1 className='font-bold text-4xl mb-3'>GET 30% Off</h1>
                <h2>USE PROMO CODE</h2>
                <Button className='p-5 bg-gray-600  font-semibold text-lg hover:animate-none'>D I N E W E E K E N D S A L E</Button>
              </div>
          </div>
          <div className='bg-orange-100 mt-4 sm:mt-0'>
            <div className='ml-5 mt-6'>Flex Sweatshirt
                <div className='text-md'>
                   $100.00 <span className='font-bold text-red-600 text-2xl'> $75.00 </span>
                   </div>
            </div>
          <Image src={event3} alt= "sales price" className='mb-0'/>
          </div>
          <div className='bg-gray-200 mt-4 sm:mt-0'>
            <div className='ml-4 mt-6'>Flex Push Button Bomber
                <div className='text-md '>
                  
                   $225.00
                  
                    <span className='font-bold text-red-600 text-2xl'>  $190.00</span>
                   </div>
            </div>
          <Image src={event4} alt= "sales price"  />
          </div>
        </div>
    </div>
  )
}

export default Promotions