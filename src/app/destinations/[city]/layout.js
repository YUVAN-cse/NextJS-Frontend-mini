import React from 'react'

function cityLayout({children , info}) {
  return (
    <div className='flex justify-between '>
        {children}
        {info}
    </div>
  )
}

export default cityLayout