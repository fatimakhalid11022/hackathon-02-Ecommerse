import React from 'react'
import Link from 'next/link'
import { DiJavascript } from 'react-icons/di'
const Baseline = () => {
  return (
    <div className='sm:flex sm:justify-around text-lg p-12 text-gray-600'>
        <div className=' md:text-center sm:w-40'>Copyright © 2022 Dine Market</div>
        <div>Design by:<div className='font-bold text-black'> Weird Design Studio</div></div>
        <div className=' sm:w-40'>Code by: <Link href={"https://github.com/fatimakhalid11022?tab=repositories" } className='text-black font-bold'>Fatima Khalid github</Link></div>
    </div>
  )
}

export default Baseline