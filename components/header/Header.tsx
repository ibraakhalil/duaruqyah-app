'use client'
import React, { useState } from 'react'
import Search from './Search'
import Image from 'next/image'
import { MdArrowDropDown } from "react-icons/md";
import HeaderModal from './HeaderModal';
import { usePathname } from 'next/navigation';
import { nameWithUrl } from '@/constants/constants';
import Link from 'next/link';


function Header() {
    const [modalShow, setModalShow] = useState(false)
    const pathname: string = usePathname()

    const handleModalShow = (e: any) => {
        setModalShow(!modalShow)
    }

    const showSettings = () => {
        const settings = document.getElementById('settings')!;
        settings.classList.remove('max-2xl:translate-x-full');
        (settings.nextSibling as HTMLElement).style.display = 'block';
    }


    return (
        <div className='flex justify-between mb-4 px-5 max-xl:bg-white max-xl:absolute max-xl:top-0 max-xl:left-0 max-xl:w-full max-xl:p-4 max-xl:px-6' >
            <div className='flex justify-between items-center flex-grow max-xl:pr-6'>
                <div className='hidden items-center gap-3 max-xl:flex'>
                    <Link href='/'>
                        <Image src='/icons/dua-logo.svg' width='50' height='50' alt='logo' />
                    </Link>

                    <h1 className='font-medium text-[20px]'>Dua & Ruqyah</h1>
                </div>
                <h1 className='text-2xl max-xl:hidden'>{nameWithUrl[pathname] ?? "Duas Page"}</h1>
                <Search />
            </div>
            <div className='flex items-center max-xl:flex-row-reverse max-xl:gap-4' >
                <div onClick={handleModalShow} className='relative flex items-center gap-1 w-[200px] justify-end max-xl:w-auto'>
                    <div className='cursor-pointer'>
                        <Image src='/icons/profile.svg' width='45' height='45' alt='profile' />
                    </div>
                    <div className='text-2xl text-primary'>
                        <MdArrowDropDown />
                    </div>
                    <HeaderModal show={modalShow} setShow={setModalShow} />
                </div>
                <div onClick={showSettings} className='hidden ml-2 cursor-pointer max-2xl:block'>
                    <Image src={'/icons/header/settings.svg'} width={24} height={24} alt='setting' />
                </div>
            </div>
        </div>
    )
}

export default Header