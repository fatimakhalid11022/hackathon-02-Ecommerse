import Image from 'next/image'
import girl1 from "../../../../../public/assets/girl1.png"
import girl2 from "../../../../../public/assets/girl2.png"
import girl3 from "../../../../../public/assets/girl3.png"
import girl4 from "../../../../../public/assets/girl4.png"
import girl5 from "../../../../../public/assets/girl5.png"
import girl6 from "../../../../../public/assets/girl6.png"
import girl7 from "../../../../../public/assets/girl7.png"
import girl8 from "../../../../../public/assets/girl8.png"
import girl9 from "../../../../../public/assets/girl9.png"

import { Button } from '@/components/ui/button'
import { FiShoppingCart } from "react-icons/fi";
import Counter from '@/componentsbyme/counter';

interface Product {
  pics:any
  title: string;
  clothtype: string;
  price: string;
  productId: number;
}


const Allclothes : Product[] =
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
    

]

function ProductDetails({ params }: { params: { id: string } }) {
  const fproduct = Allclothes.find((item) => item.productId === Number(params.id));

  if (!fproduct) {
    return <div>Product not found.</div>;
  }

  const { pics, title, clothtype, price, productId } = fproduct;

  return (
   
    <div className=' bg-gray-50' >
      
      {/* upper */}
      <div className='flex container'>
      <div className='w-1/6 '>
        <Image src={fproduct.pics} alt="pic" height={100} width ={100} className='ml-8'/>
      </div>
      <div>
      <Image src={fproduct.pics} alt="pic" height={500}/>
      </div>
      <div className='ml-5'>
       <h1 className='mt-3 text-3xl  w-72'>{fproduct.title}</h1>
       <h2 className='font-bold text-xl text-gray-400 '>{fproduct.clothtype}</h2>
       <ul className='font-semibold mt-6'>SELECT SIZE</ul>
       <h6 className='font-semibold text-gray-700 flex my-6'>
          <p className='mr-5'>XS</p>
          <p className='mr-5'>S</p>
          <p className='mr-5'>M</p>
          <p className='mr-5'>L</p>
          <p className='mr-5'>XL</p>
         </h6>
        <p className='p-4 text-xl font-bold'>Quantity :
          <Counter />
        </p>
             <div className='flex p-4'>
              <Button className='bg-black text-white'>
              <FiShoppingCart className='text-3xl p-1 pl-2'/>
                Add to Cart</Button>
                <p className='text-3xl font-bold pl-3'>{fproduct.price}</p>
             </div>

      </div>
      </div>
     {/* lower */}
     <div className='container '>
      <div className=' bg-white m-16'> 
       <p className=' text-2xl font-semibold pt-16 m-16'>Product Information</p>
       <p className='border-t-2'></p>
       <div className='flex'>
        <h1 className='w-2/5 font-bold text-gray-700 m-16'>PRODUCT DETAILS</h1>
        <p className='w-full p-16'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
       <div className='flex m-'>
        <h1  className='w-2/5 font-semibold text-gray-700 ml-16'  >PRODUCT CARE</h1>
        <ul className='w-full ml-32 text-lg font-bold'>
        <li>Hand wash using cold water.</li>
        <li>Do not using bleach.</li>
        <li>Hang it to dry.</li>
        <li>Iron on low temperature.</li>
        </ul>
       </div>
     </div>
     </div>
    </div>
  )
}

export default ProductDetails





