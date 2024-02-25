import React from 'react';
import Image from 'next/image';
import logo_e from "../../public/assets/logo_e.webp";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BiAlignRight } from "react-icons/bi";
function Header() {
    return (
        <div className='flex p-12 md:justify-around'>
            <Link href ="/"  >
            <Image src={logo_e} alt="Logo"  width={200} className='w-[200px] h-[75px]'/>
            </Link>
            
            <ul className='flex gap-16 font-medium mt-2 text-lg'>
            
            <Link href="/Female" className='md:block hidden'><li>Female</li></Link>
            <Link href="/Male" className='md:block hidden'><li>Male</li></Link>
            <Link href="/Kids" className='md:block hidden'><li>Kids</li></Link>
            <Link href="/AllProducts" className='md:block hidden'><li>All Products</li></Link>
            </ul>
            <div className='md:block hidden'>
            <Input  className='md:block hidden'/>
            </div>
            <div className='md:hidden block '>
            <BiAlignRight className='ml-44 text-3xl'/>
            </div>
                <Button className='rounded-full relative md:block hidden'>
                    <div className='flex justify-center w-4 h-4 bg-red-500 items-center rounded-full absolute right-1 top-0'>
                        <p className='text-white text-xs'>0</p>
                        </div>
            <FiShoppingCart className='text-2xl '/>
            
            </Button>
            
        </div>
    );
}

export default Header;