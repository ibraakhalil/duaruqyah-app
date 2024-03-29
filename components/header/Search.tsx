import React from 'react'
import { IoSearch } from "react-icons/io5";

function Search() {
    return (
        <div className='flex items-center justify-between bg-bg p-1 rounded-md w-[340px] max-md:hidden'>
            <input className='ml-2 text-[14px] placeholder:text-gray-500 max-xl:bg-transparent' type="text" placeholder='Search by Dua Name'/>
            <div className='bg-icon-bg p-2.5 px-4 rounded text-[20px] text-primary'>
                <IoSearch />
            </div>
        </div>
    )
}

export default Search