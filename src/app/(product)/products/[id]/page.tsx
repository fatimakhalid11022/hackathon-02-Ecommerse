
// import Image from 'next/image'
// import girl1 from "../../../../../public/assets/girl1.png"
// import { Button } from '@/components/ui/button'
// import { FiShoppingCart } from "react-icons/fi";
// import Counter from '@/componentsbyme/counter';

// function ProductDetails({params}:{params:{id: string}}) {
//   return (
   
//     <div className=' bg-gray-50' >
      
//       {/* upper */}
//       <div className='flex container'>
//       <div className='w-1/6 '>
//         <Image src={girl1} alt="pic" height={100} width ={100} className='ml-8'/>
//       </div>
//       <div>
//       <Image src={girl1} alt="pic" height={500}/>
//       </div>
//       <div className='ml-5'>
//        <h1 className='mt-3 text-3xl  w-72'>Brushed Raglan Sweatshirt</h1>
//        <h2 className='font-bold text-xl text-gray-400 '>Sweater</h2>
//        <ul className='font-semibold mt-6'>SELECT SIZE</ul>
//        <h6 className='font-semibold text-gray-700 flex my-6'>
//           <p className='mr-5'>XS</p>
//           <p className='mr-5'>S</p>
//           <p className='mr-5'>M</p>
//           <p className='mr-5'>L</p>
//           <p className='mr-5'>XL</p>
//          </h6>
//         <p className='p-4 text-xl font-bold'>Quantity :
//           <Counter />
//         </p>
//              <div className='flex p-4'>
//               <Button className='bg-black text-white'>
//               <FiShoppingCart className='text-3xl p-1 pl-2'/>
//                 Add to Cart</Button>
//                 <p className='text-3xl font-bold pl-3'>$195.00</p>
//              </div>

//       </div>
//       </div>
//      {/* lower */}
//      <div className='container '>
//       <div className=' bg-white m-16'> 
//        <p className=' text-2xl font-semibold pt-16 m-16'>Product Information</p>
//        <p className='border-t-2'></p>
//        <div className='flex'>
//         <h1 className='w-2/5 font-bold text-gray-700 m-16'>PRODUCT DETAILS</h1>
//         <p className='w-full p-16'>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//        </div>
//        <div className='flex m-'>
//         <h1  className='w-2/5 font-semibold text-gray-700 ml-16'  >PRODUCT CARE</h1>
//         <ul className='w-full ml-32 text-lg font-bold'>
//         <li>Hand wash using cold water.</li>
//         <li>Do not using bleach.</li>
//         <li>Hang it to dry.</li>
//         <li>Iron on low temperature.</li>
//         </ul>
//        </div>
//      </div>
//      </div>
//     </div>
//   )
// }

// export default ProductDetails




// ,

"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FiShoppingCart } from "react-icons/fi";
import Counter from '@/componentsbyme/counter';
import { useState , useEffect} from "react"

function ProductDetails({ params }:any) {
  const [productData, setProductData]:any = useState(null); // Initialize state

  // Fetch product data dynamically based on `params.id`
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/products/${params.id}`); // Adjust API endpoint
      const data = await response.json();
      setProductData(data);
    };
    fetchData();
  }, [params.id]); // Re-fetch on `params.id` change

  return (
    <div className="bg-gray-50">
      {/* Render content conditionally based on data availability */}
      {productData && (
        <>
          {/* Upper section */}
          <div className="flex container">
            <div className="w-1/6">
              <Image
                src={productData.image}
                alt={productData.name}
                height={100}
                width={100}
                className="ml-8"
              />
            </div>
            <div>
              <Image
                src={productData.image}
                alt={productData.name}
                height={500}
              />
            </div>
            <div className="ml-5">
              <h1>
                {productData.title}
                <br />
                <span className="font-bold text-xl text-gray-400">
                  {productData.category}
                </span>
              </h1>
              {/* ... other dynamic elements for size selection, etc. ... */}
              <p className="p-4 text-xl font-bold">
                Quantity: <Counter />
              </p>
              <div className="flex p-4">
                <Button className="bg-black text-white">
                  <FiShoppingCart className="text-3xl p-1 pl-2" />
                  Add to Cart
                </Button>
                <p className="text-3xl font-bold pl-3">{productData.price}</p>
              </div>
            </div>
          </div>

          {/* Lower section */}
          <div className="container">
            <div className="bg-white m-16">
              <p className="text-2xl font-semibold pt-16 m-16">
                Product Information
              </p>
              <p className="border-t-2"></p>
              <div className="flex">
                <h1 className="w-2/5 font-bold text-gray-700 m-16">
                  PRODUCT DETAILS
                </h1>
                <p className="w-full p-16">{productData.description}</p>
              </div>
              <div className="flex m-">
                <h1 className="w-2/5 font-semibold text-gray-700 ml-16">
                  PRODUCT CARE
                </h1>
                <ul className="w-full ml-32 text-lg font-bold">
                  {productData.careInstructions.map((instruction :any) => (
                    <li key={instruction}>{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Display appropriate loading or error message while data is being fetched
      {!productData && <p>Loading product...</p>} */}
    </div>
  );
}

export default ProductDetails;