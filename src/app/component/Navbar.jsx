import React from 'react'
import Link from 'next/link';
function Navbar() {


    return (
        <>
            <nav className='bg-neutral-900 w-full'>
                <div className='container mx-auto text-white  flex justify-end items-center space-x-10 py-5 font-semibold uppercase'>
                    <Link className='hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300' href="">Home</Link>
                    <Link className='hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300' href="">About</Link>
                    <Link className='hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300' href="">Experience</Link>
                    <Link className='hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300' href="">Porfirio</Link>
                    <Link className='hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300' href="">Contact</Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;