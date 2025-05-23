import React from 'react'
import {Monitor, Tablet, RectangleHorizontal, Smartphone} from 'lucide-react'

const Header = () => {
  return (
    <div className='shadow-md bg-white py-4 px-2 flex justify-between fixed w-full z-50'>
        {/* logo */}
        <div className='h-8 w-fit bg-red-200'>
            <img className='h-full ' src='/Images/Logo.png' alt='Logo'/>
        </div>
        {/* devices */}
        
        {/* Get Started */}
        <div className='flex justify-between items-center gap-6 bottom-2 -mt-2'>
            <div className='flex flex-col text-gray-900 leading-4 '>
                <span className='tracking-tighter'>Try it for free</span>
                <span className='-ml-5 tracking-tighter'>- you risk nothing!</span>
            </div>
            <button className='bg-[#00c75d] w-40 h-12 text-white rounded-lg text-lg hover:bg-green-800 duration-500'>
                GET STARTED
            </button>
        </div>
    </div>
  )
}

export default Header