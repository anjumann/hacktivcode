'use client'
import { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import LightLogo from '@/assets/light.png'
import darkLogo from '@/assets/dark.png'
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
            title: "Github",
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
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <Image
                            src={!dark ? darkLogo : LightLogo}
                            width={200}
                            height={160}
                            alt="Float UI logo"
                        />
                    </a>
                    <div className="md:hidden flex items-center gap-2 ">
                        <div className="inline-block cursor-pointer" onClick={themeSelctor} >
                            <div className='theme-btn  ' > {dark ? (<BsMoon className='inline text-xl cursor-pointer ' />) : (<BsSun className='inline text-xl cursor-pointer ' />)} </div>
                        </div>
                        <button className="outline-none px-2.5 py-2 border-2 rounded-lg border-gray-400 text-gray-700 dark:text-gray-200  focus:border-gray-400 focus:border"
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
                        </button>

                    </div>
                </div>


                <div className="flex gap-4 justify-center items-center">
                    <div className=""> Instagram </div>
                    <div className=""> Github</div>
                    <div className="hidden md:inline-block cursor-pointer" onClick={themeSelctor} >
                        <div className='theme-btn  ' > {dark ? (<BsMoon className='inline text-xl cursor-pointer ' />) : (<BsSun className='inline text-xl cursor-pointer ' />)} </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar