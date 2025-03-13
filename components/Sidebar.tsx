"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Sidebar(){
    // state to mangage open/close state of the sidebar
    const [isOpen,setIsOpen] = useState(false)

    return(
        <div className="flex">
            {/* The Sidebar */}
            <div 
            // setting up the sidebar styling and visibility and uses a conditional based on useState isOpen
            // if isOpen is true then we style it and the width is 16rem if false then width of this sidebar is 0 so no sidebar shown
            className={`bg-black text-white fixed h-screen transition-all duration-300 z-10 ${ isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
            
                {/* Sidebar content */}
                <div className="flex flex-col items-center">
                    {/* Sidebar items */}
                    <div className='mt-4'>
        
                        <Link href='/' className='text-white font-bold hover:text-gray-300'> Home</Link>
                    </div>
                    <div className='mt-4'>
                        <Link href='/completedPage' className='text-white font-bold hover:text-gray-300'> Completed</Link>
                    </div>
                    <div className='mt-4'>
                        <Link href='#' className='text-white font-bold hover:text-gray-300'> Help</Link>
                    </div>
                </div>
            
            </div>

            {/**main content */}
            <div // when sidebar is open we style it by using ml-64 to shift the sidebar to the right of the screen
            className={`flex-1 p-2 ${ isOpen ? 'ml-64' : 'ml-0'}`}>
                {/**Button to toggle sidebar */}
                <div // ml-auto gives max margin on the left, allowing to push the closing button to the right when sidebar opened 
                    className="ml-auto fixed">
                        <button className="bg-black text-white p-2 rounded hover:bg-black hover:bg-opacity-60" onClick={() => setIsOpen(!isOpen)}>
                            ☰
                        </button>

                </div>

            </div>
            
        </div>
    )
}