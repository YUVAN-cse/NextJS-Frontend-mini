'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
  const destinations = [
    { name: "Paris", description: "The city of lights and love." },
    { name: "Tokyo", description: "A blend of tradition and modernity." },
    { name: "NewYork", description: "The city that never sleeps." },
  ];

  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] font-bold text-4xl'>
      <div>Choose your destination</div>
      <div>
      <ul className='mt-4 space-y-2 '>
        {destinations.map((destination , index) => (
          <div className='box' key={index} onClick={()=> router.push(`/destinations/${destination.name}`)}>
          <li key={index} className='text-xl font-semibold'>
            {destination.name}: {destination.description}
          </li>
          </div>
        ))}
      </ul>
        </div>
    </div>
  )
}

export default page