import React from 'react'
import { RiLoaderLine } from 'react-icons/ri'

const Loader = () => {
    return (
        <div className='px-2 py-1.5 border-2 rounded-lg border-gray-200 bg-slate-100 w-fit mx-auto ' >Thinking... <RiLoaderLine className='inline ml-2 animate-spin' /> </div>
    )
}

export default Loader