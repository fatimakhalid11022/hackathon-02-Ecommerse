import Image from 'next/image'
import React from 'react'
import logo_e from "../../public/assets/logo_e.webp";
import { BsTwitter } from "react-icons/bs";
import { Button } from "@/components/ui/button"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='sm:flex md:p-24 p-12 border-b border-black'>
        {/* left side */}
       <div className='md:w-1/3 w-full'>
        <div className=''>
          <Image src={logo_e} alt='logo' className='mb-9'height={200} width={200}/>
           <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
           <div className='flex flex-row mt-6'>
           <Button className='mr-3 hover:text-3xl'><BsTwitter /></Button>
           <Button  className='mr-3 hover:text-3xl'> <FaFacebookF /></Button>
           <Button className='hover:text-3xl'><FaLinkedinIn /></Button>
           </div>
           </div>
       </div>
       {/* right side */}
       <div className='sm:flex md:w-2/3 gap-10 justify-evenly'>
        <ul> <div className='font-bold text-xl text-gray-600 my-4'>Company</div>
            <Link href="/" ><li className="md:text-lg mb-2 text-gray-500">About</li></Link>
            <Link href="/"><li className="md:text-lg mb-2 text-gray-500">Terms of Use</li></Link>
            <Link href="/"><li className="md:text-lg mb-2 text-gray-500">Privacy Policy</li></Link>
            <Link href="/"><li className="md:text-lg mb-2 text-gray-500">How it Works</li></Link>
            <Link href="/"><li className="md:text-lg mb-2 text-gray-500">Contact Us</li></Link>
            
        </ul>
        <ul> <div className='font-bold text-xl text-gray-600 my-4'>Support</div>
            <Link href="/"><li className='md:text-lg mb-2 text-gray-500'>Support Center</li></Link>
            <Link href="/"><li className="md:text-lg mb-2 text-gray-500">24h Service</li></Link>
            <Link href="/"><li className="md:text-lg mb-2 text-gray-500">Quick Chat</li></Link>
        </ul>
         <ul> <div className='font-bold text-xl text-gray-600 my-4'>Contact</div>
            <Link href="/" ><li className="md:text-lg mb-2 text-gray-500">Whatsapp</li></Link>
            <Link href="/" ><li className="md:text-lg mb-2 text-gray-500">Support 24h</li></Link>
            
            
        </ul>
       </div>
    </div>
  )
}

export default Footer;