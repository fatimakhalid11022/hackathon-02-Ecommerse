"use client"
import React from 'react'
import { useState } from 'react';

export default  function Counter() {
    const [count, setCount] = useState(0);
  
    function increment() {
      setCount(a => a + 1);
    }
    function decrement() {
      setCount(a => a - 1);
    }
    return (
      <div className='flex '>
        
         <button className='mx-5' onClick={() => {
          increment();
         
         }}>+</button>
          <>{count}</> 
         <button className='mx-5' onClick={() => {
          decrement();
          }}>-</button>
      </div>
    );
  }
  