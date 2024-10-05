import React from 'react'
import Image from 'next/image'
function WelcomeBanner() {
  return (
    <div className='flex gap-5 bg-white items-center rounded-xl p-5 '>
        <Image src='/coding-image.jpg' alt='Welcome' width={125} height={100}/>
        <div>
            <h2 className='font-bold text-[27px]'>
                Welcome to <span className='text-blue-500'>Triple-A</span> Academy
            </h2>
            
                <h3 className='text-gray-500'>
                    Learn,Explore and Build Real Life projects
                </h3>
            </div>
    </div>
  )
}

export default WelcomeBanner