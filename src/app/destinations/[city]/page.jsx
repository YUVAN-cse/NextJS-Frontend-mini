import React from 'react'
import Image from 'next/image';
import TokoyoImage from '@/asserts/Tokoyo.jpg'
import ParisImage from '@/asserts/Paris.webp'

async function page({params}) {
    const {city} = await params;
    console.log( "hi" , city)
  return (
    <>
    <div className=' midium flex items-center justify-center'>

        {
            city == 'Tokyo' && <Image src={TokoyoImage} alt="Tokyo" width={400} height={400} />
        }
        {
            city == 'Paris' && <Image src={ParisImage} alt="Paris" width={400} height={400} />
        }
        {
            city == 'NewYork' && <Image src={ParisImage} alt="New York" width={400} height={400} />
        }
    </div>
   
    </>
  )
}

export default page