import React from 'react';
import Image from "next/image"

import girl1 from "../../public/assets/girl1.png"
import girl2 from "../../public/assets/girl2.png"
import girl3 from "../../public/assets/girl3.png"
import girl4 from "../../public/assets/girl4.png"
import girl5 from "../../public/assets/girl5.png"
import girl6 from "../../public/assets/girl6.png"
import girl7 from "../../public/assets/girl7.png"
import girl8 from "../../public/assets/girl8.png"
import girl9 from "../../public/assets/girl9.png"
import girl10 from "../../public/assets/girl10.png" 

const clothes =
    [{pics : girl1,
     title : "Brushed Raglan Sweatshirt ",
    price :"$195" },
    {pics : girl2,
     title : "Cameryn Sash Tie Dress ",
    price :"$495" },
    
    {pics : girl4,
     title : "Flex Sweatshirt",
    price :"$135" },
    {pics : girl3,
      title : "Flex SweatPants",
     price :"$175" },
    {pics : girl5,
     title : "Pink Fleece SweatPants  ",
    price :"$195" },
    {pics : girl6,
     title : "Lite SweatPants ",
    price :"$235" },
    {pics : girl7,
     title : "Flex Push Button Bomber",
    price :"$595" },
    {pics : girl8,
     title : "Muscle Tank ",
    price :"$25" },
    {pics : girl9,
     title : " Brushed Bomber",
    price :"$365" },
    {pics : girl10,
     title : "Raglan Sweatshirt ",
    price :"$95" },

]
    
 function WhatData({ pics, title, price } : any){
    return <div className='text-center inline-block cursor-pointer ease-in-out duration-300 hover:scale-110'>
      
    <div className='relative flex items-center'>
      
    <Image 
     src={pics} 
      alt={title} 
       className="w-[350px] h-[400px]"
     />
     </div>
    <h2 className='text-lg font-bold'>{title}</h2>
    <p className='font-bold text-lg'>{price}</p>
  </div>
}


export default function WhatweHave(){
    return (
        <div className='p-20'>
            <div className='text-center font-bold '>
            <h1 className='text-sm mb-3 text-blue-700'>P R O D U C T S</h1>
            <h2 className='text-4xl mb-16'>Check What We Have</h2>
        </div>
       <div className="" >
        <div id='slider' className='w-full overflow-hidden scroll whitespace-nowrap '>
        {clothes.map((item, index) => (
    
     <WhatData 
     
       key={index}
       pics={item.pics}
       title={item.title}
       price={item.price}
     />
   
   
   ))}
        </div>
     
  </div>
  </div>
  )
}