'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export const Nav = () => {
  const pathname = usePathname()
  console.log(pathname) 
  return (
    <div className="w-full h-16 bg-gray-500 flex items-center justify-between absolute top-0 left-0">
        <div className='container mx-auto h-full flex items-center justify-between pl-4 pr-4'>
            <Link href="/"><h1 className='text-2xl font-bold text-white'>Travel Guide</h1></Link> 
        </div>
        <div >
            <ul className='flex space-x-4 text-white pr-4'>
                <Link href="/"><li className={pathname === '/' ? 'active' : ''}>Home</li></Link>
                <Link href="/contact"><li className={pathname === '/contact' ? 'active' : ''}>Contact</li></Link>
                <Link href="/destinations"><li className={pathname === '/destinations' ? 'active' : ''}>Destination</li></Link>
            </ul>
        </div>
    </div>
  )
}
