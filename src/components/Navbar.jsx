import React, { useState } from 'react'
import brandLogo from '../images/brand_logo.png'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navItems = ['Menu', 'Location', 'About', 'Contact']
    return (
        <>
            <div className="main md:max-w-[1440px] md:mx-auto py-2">
                <div className="grid grid-cols-2">
                    <div className="img">
                        <img src={brandLogo} alt="BrandLogo" />
                    </div>

                    <div className={` 'main-ul lg:flex lg:justify-around gap-5' ${open ? 'absolute top-20 left-1/2 right-1/2 ' : 'hidden'}`}   >
                        <ul className='flex justify-evenly items-center gap-8'>
                            {
                                navItems.map((item, ind) => {
                                    return <li className='cursor-pointer font-semibold hover:text-red-600' key={ind}>{item}</li>

                                })
                            }
                        </ul>
                        <div className="flex justify-center items-center">
                            <button className='login border border-red-600 bg-red-600 text-white font-bold px-5 py-[0.2rem] hover:bg-white hover:text-red-600 duration-500 '>Login</button>
                        </div>
                    </div>

                    {/* Bar Icons Starts */}
                    <div onClick={() => setOpen(!open)} className="bar-icon absolute right-6 lg:hidden">
                        {open ? <IoClose className='text-xl' /> : <FaBars className='text-xl' />}
                    </div>

                    {/* Bar Icons Ends */}

                </div>
            </div>
        </>
    )
}

export default Navbar
