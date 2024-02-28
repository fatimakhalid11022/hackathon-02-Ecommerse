import React from 'react';
import Image from 'next/image';
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
import Link from 'next/link';


const female =
    [{pics : girl1,
     title : "Brushed Raglan Sweatshirt ",
    price :"$195",
     clothtype:"Sweater" },
    {pics : girl2,
     title : "Cameryn Sash Tie Dress ",
    price :"$495",
    clothtype:"Dress"  },
    
    {pics : girl4,
     title : "Flex Sweatshirt",
    price :"$135",
    clothtype:"Sweater"  },
    {pics : girl3,
      title : "Flex SweatPants",
     price :"$175",
     clothtype:"Pants"  },
    {pics : girl5,
     title : "Pink Fleece SweatPants  ",
    price :"$195" ,
    clothtype:"Pants" },
    {pics : girl6,
     title : "Lite SweatPants ",
    price :"$235",
    clothtype:"Pants"  },
    
    {pics : girl8,
     title : "Muscle Tank ",
    price :"$25" ,
    clothtype:"T-shirt" },
    {pics : girl9,
     title : " Brushed Bomber",
    price :"$365" ,
    clothtype:"Jackets" },
    {pics : girl10,
     title : "Raglan Sweatshirt ",
    price :"$95",
    clothtype:"T-shirt"  },

]

function Products ({pics,title,clothtype,price} : any ){
    return(
    <div className=' pl-16'>
        <Link href={`fproducts/1`}>
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

function Female() {
    return (
        <div className='container mx-auto grid grid-cols-3 '>
            {female.map((item,index) =>(
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

export default Female;