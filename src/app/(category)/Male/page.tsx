import React from 'react';
import Image from "next/image"
import girl7 from "../../../../public/assets/girl7.png"
import girl10 from "../../../../public/assets/girl10.png"
import Link from 'next/link';
import ProductDetails from '@/app/(product)/products/[id]/page';
const Malethings =
    [
    
    {pics : girl7,
     title : "Flex Push Button Bomber",
     clothtype :"Jackets",
    price :"$595" },
    
    {pics : girl10,
     title : "Raglan Sweatshirt ",
     clothtype :"Sweater",
    price :"$95" }

]
    
function Products ({pics,title,clothtype,price} : any ){
    return(
    <div className=' pl-16'>
        <Link href={`/mproducts/1`}>
        <div className=''>
        <Image src={pics} alt={title} height={375} width={250} className=''/>
        </div>
        <h2 className='font-semibold text-lg mt-2'>{title}</h2>
        <h3 className='font-semibold text-md text-gray-500 mt-1'>{clothtype}</h3>
        <h1 className='text-xl font-semibold mt-3 mb-6'>{price}
        </h1>
        </Link>
    </div>
    )
}

function Male() {
    return (
        <div className='container mx-auto grid grid-cols-3 '>
            {Malethings.map((item: { pics: any; title: any; clothtype: any; price: any; },index: any) =>(
           <Products
           key={index}
           pics={item.pics}
           title={item.title}
           clothtype= {item.clothtype}
           price={item.price}
           />

           )
            )
   }  
    </div>
    );
}

export default Male