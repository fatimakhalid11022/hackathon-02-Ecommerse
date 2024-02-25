import ProductDetails from "@/app/(product)/products/[id]/page" 
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import fs from "fs"
import path from "path"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function getAllProductsId() {
//   const ProductDetailsPath = path.join(__dirname, 'ProductDetails'); // Construct the path to ProductDetails
//   const fileNames = fs.readdirSync(ProductDetailsPath); // Read files from ProductDetails directory
//   return fileNames.map((fileName: string) => {
//     return {
//       params: {
//         id: fileName.replace(/\.tsx$/, "")
//       }
//     }
//   });
// }

// function getProductDetailsById(){
//   return
// }