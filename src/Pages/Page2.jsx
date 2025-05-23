import React from 'react'

const Page2 = () => {
    let images = [
        {src:'./Images/Page2/1.png', name:'Backpack Sandra', price:'80 USD'},
        {src:'./Images/Page2/2.png', name:'Backpack Emily', price:'80 USD'},
        {src:'./Images/Page2/3.png', name:'Backpack Nataile', price:'80 USD'},
        {src:'./Images/Page2/4.png', name:'Backpack Lily', price:'80 USD'},
        {src:'./Images/Page2/2.1.png', name:'Bag Sandra', price:'60 USD'},
        {src:'./Images/Page2/2.2.png', name:'Bag Jenny', price:'60 USD'},
        {src:'./Images/Page2/2.3.png', name:'Bag Catherine', price:'60 USD'},
        {src:'./Images/Page2/2.4.png', name:'Bag Mary', price:'60 USD'},
        {src:'./Images/Page2/3.1.png', name:'Cosmetic Bag Emily', price:'30 USD'},
        {src:'./Images/Page2/3.1.png', name:'Cosmetic Bag Martha', price:'30 USD'},
        {src:'./Images/Page2/3.3.png', name:'Cosmetic Bag Lily', price:'30 USD'},
        {src:'./Images/Page2/3.4.png', name:'Cosmetic Bag Sandra', price:'30 USD'},

    ]
  return (
    
    <div className='py-20 mx-20 flex  gap-10 flex-wrap justify-center '>
        {
        images.map((item, index) => (
            <div key={index} className=' w-[266px] aspect-square flex flex-col gap-2'>
                <div className='group overflow-hidden '>
                    <img className=' group-hover:scale-120 duration-300' src={item.src} alt="1"/>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                <h1 className='text-2xl'>{item.name}</h1>
                <h3>{item.price}</h3>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default Page2