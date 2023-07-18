'use client'
import { useEffect, useState } from 'react'
import { BsMoon, BsSun, BsPlay } from 'react-icons/bs'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import LightLogo from '@/assets/light.png'
import DarkLogo from '@/assets/dark.png'
import Link from 'next/link'

const Navbar = () => {

    const [state, setState] = useState(false)
    const [dark, setDark] = useState(false)
    const { theme, setTheme } = useTheme()
    // Replace / path with your path


    const themeSelctor = () => {
        if (theme === 'light') {
            setDark(true)
            setTheme('dark')
        } else {
            setDark(false)
            setTheme('light')
        }
    }


    const navigation = [
        // { title: "Customers", path: "/" },
        {
            title: "hub",
            url: ""
        },
        {
            title: "Instagram",
            url: ""
        },

    ]

    return (
        <nav className="w-full border-b md:border-0 md:static bg-none ">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 justify-between">
                <div className="flex items-center py-3 md:py-5 justify-center">
                    <a href="/">
                        <Image
                            src={!dark ? LightLogo : DarkLogo}
                            width={200}
                            height={160}
                            alt="Float UI logo"
                        />
                    </a>
                </div>
                    <div className="hidden md:flex items-center gap-2 justify-center ">
                        <div className="inline-block cursor-pointer" onClick={themeSelctor} >
                            
                            <div className='theme-btn' > {dark ? (<BsMoon className='inline text-xl cursor-pointer ' />) : (<BsSun className='inline text-xl cursor-pointer ' />)} </div>
                        </div>
                        <button type="button" class = "bg-black text-white px-4 rounded-full py-1 md:visible dark:bg-cyan-600">
                            <div className='flex  items-center justify-between gap-2'>
                                <a href="https://drive.google.com/drive/u/2/folders/1Xdgxct_VEolYo8xI5Y9I0EbscqwOl-YV" target='blank'><BsPlay/></a>
                                <a href = 'https://linktr.ee/hacktivspacecommunity' target='blank'>Hactivspace</a>
                            </div>
                        </button>
                        {/* <button className="outline-none px-2.5 py-2 border-2 rounded-lg border-gray-400 text-gray-700 dark:text-gray-200  focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button> */}
                        

                    </div>
                


                <div className="md:hidden flex gap-4 justify-center items-center mb-3 md:mb-0">
                    <button type="button" class = "bg-black text-white px-4 rounded-full py-1 md:visible dark:bg-cyan-600 text-sm ">
                        <div className='flex  items-center justify-between gap-2'>
                                <a href="https://drive.google.com/drive/u/2/folders/1Xdgxct_VEolYo8xI5Y9I0EbscqwOl-YV" target='blank'><BsPlay/></a>
                                <a href = 'https://linktr.ee/hacktivspacecommunity' target='blank'>Hactivspace</a>
                            </div>
                    </button>
                </div>
            </div>
            <button onClick={themeSelctor} title="Contact Sale"
        className="md:hidden theme-btn fixed z-90 bottom-10 right-0 bg-sky-600 px-2 py-3 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">{dark ? (<BsMoon className='inline text-xl cursor-pointer ' />) : (<BsSun className='inline text-xl cursor-pointer text-white' />)}</button>
        </nav>
    )
}

export default Navbar