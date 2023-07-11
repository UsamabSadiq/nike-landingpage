import React from 'react'
import bannerImg from '../images/shoe_image.png'

const Header = () => {
    return (
        <>
            <div className="container mx-auto mt-16 border-2 border-red-500">
                <div className="main grid grid-cols-2">
                    <div className="content pl-5">
                        <h1 className='text-8xl font-bold mb-6'>YOUR FEET DESERVE <br /> THE BEST</h1>
                        <p className='text-lg text-[#342727] mt-6 mb-3 font-bold'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
                        <div className=' flex gap-10 mt-3 '>
                            <button className='border border-red-600 bg-red-600 text-white text-lg font-bold px-7 py-1 hover:bg-white hover:text-red-600 duration-500 '>Shop Now</button>

                            <button className='border-2 border-gray-600 text-[#342727] text-lg font-bold px-7 py-1 hover:text-red-600 duration-500 '>Category</button>

                        </div>
                    </div>
                    <div className="img">
                        <img src={bannerImg} alt="bannerImage" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
