import React from 'react';
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
function Signin() {
    return (
        <div className='hidden sm:block container p-20'>
            <div className='relative inset-[80px] -z-10'>
            <p className=' font-extrabold text-9xl text-gray-100 mt-4 text-center'>Newsletter
            </p>
            </div>
           
                <p className='font-bold text-4xl sm:text-center text-start '>Subscribe Our Newsletter</p>
                <p className='sm:text-center mt-2 text-lg '> Get the latest information and promo offers directly</p>
           
 
               <div className="sm:flex w-full max-w-sm md:items-center space-x-2 sm:ml-[200px] pl-40 p-3">
                <Input type="email" placeholder="Input email adress" className='mt-5 m-2 rounded-sm'/>
                <Button type="submit" className='bg-black text-white border rounded-none mt-5 hover:animate-none mb-3'>Get Started</Button>
                 </div>
  
        </div>
    );
}

export default Signin;