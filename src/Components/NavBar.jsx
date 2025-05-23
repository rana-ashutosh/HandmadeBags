import React from 'react'
import {ShoppingCart} from 'lucide-react'

const NavBar = () => {
    return (
        <div className='pt-[5rem]  shadow-5xl h-[25dvh] flex justify-between items-center px-40 py-5'>
            {/* Image */}
            <div className='w-64'>
                <img src="Images/Handmadebags.svg" alt="handmadebags" />
            </div>
            {/* List */}
            <div className='flex  items-center mb-2'>
                <ul className='flex gap-7 text-[17px]'>
                    <li className='hover:text-green-500 duration-100'>Home</li>
                    <li className='hover:text-green-500 duration-100'>New</li>
                    <li className='hover:text-green-500 duration-100'>Bags</li>
                    <li className='hover:text-green-500 duration-100'>Backpacs</li>
                    <li className='hover:text-green-500 duration-100'>Cosmetic bags</li>
                    <li className='hover:text-green-500 duration-100'>About us</li>
                    <li className='hover:text-green-500 duration-100'>Contact</li>
                </ul>
            </div>
            {/* Icon */}
            <div className='text-gray-700 mr-7 mt-1'>
                <ShoppingCart size={36} />
            </div>
        </div>
    )
}

export default NavBar