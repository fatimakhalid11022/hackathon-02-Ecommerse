"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import girl1 from "../../../../public/assets/girl1.png"
import girl2 from "../../../../public/assets/girl2.png"
import girl3 from "../../../../public/assets/girl3.png"
import girl4 from "../../../../public/assets/girl4.png"
import girl5 from "../../../../public/assets/girl5.png"
import girl6 from "../../../../public/assets/girl6.png"
import girl7 from "../../../../public/assets/girl7.png"
import girl8 from "../../../../public/assets/girl8.png"
import girl9 from "../../../../public/assets/girl9.png"
import girl10 from "../../../../public/assets/girl10.png" 


const Allclothes =
    [{pics : girl1,
     title : "Brushed Raglan Sweatshirt ",
    price :"$195",
     clothtype:"Sweater" ,
    productId:1},
    {pics : girl2,
     title : "Cameryn Sash Tie Dress ",
    price :"$495",
    clothtype:"Dress"  ,
    productId:2 },
    
    {pics : girl4,
     title : "Flex Sweatshirt",
    price :"$135",
    clothtype:"Sweater"  ,
    productId:4 },
    {pics : girl3,
      title : "Flex SweatPants",
     price :"$175",
     clothtype:"Pants" ,
     productId:3  },
    {pics : girl5,
     title : "Pink Fleece SweatPants  ",
    price :"$195" ,
    clothtype:"Pants" ,
    productId:5 },
    {pics : girl6,
     title : "Lite SweatPants ",
    price :"$235",
    clothtype:"Pants"  ,
    productId:6},
    {pics : girl7,
      title : "Flex Push Button Bomber",
      clothtype :"Jackets",
     price :"$595" ,
     productId:7 },
    {pics : girl8,
     title : "Muscle Tank ",
    price :"$25" ,
    clothtype:"T-shirt"  ,
    productId:8},
    {pics : girl9,
     title : " Brushed Bomber",
    price :"$365" ,
    clothtype:"Jackets" ,
    productId:9 },
    {pics : girl10,
     title : "Raglan Sweatshirt ",
    price :"$95",
    clothtype:"T-shirt"  ,
    productId:10 },

]

function AllProducts ({pics,title,clothtype,price,productId} : any ){
    
    return(
    <div  className=' pl-16'>
       
        <Link href={`/products/1`} >
           
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

function FemaleMix() {
    return (
        <div className='container mx-auto grid grid-cols-3 '>
            {Allclothes.map((item,index) =>(
           <AllProducts
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

export default FemaleMix;

