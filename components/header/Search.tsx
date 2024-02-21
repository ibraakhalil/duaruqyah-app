import React from 'react'
import { IoSearch } from "react-icons/io5";

function Search() {
    return (
        <div className='flex items-center justify-between bg-white p-1 rounded-md w-[340px]'>
            <input className='ml-2 text-[14px] placeholder:text-gray-400 ' type="text" value="" placeholder='Search by Dua Name' />
            <div className='bg-icon-bg p-2.5 px-4 rounded text-[20px] text-primary'>
                <IoSearch />
            </div>
        </div>
    )
}

export default Search