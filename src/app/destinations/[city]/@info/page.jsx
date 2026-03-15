'use client'

import React from 'react'
import { useParams } from 'next/navigation'
function page() {
    const {city} = useParams();
  return (
    <div className='text-white  flex items-center justify-center midium'>{city} is a good city</div>
  )
}

export default page