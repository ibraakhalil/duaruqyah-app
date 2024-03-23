'use client'
import React, { useState } from 'react'
import Search from './Search'
import Image from 'next/image'
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import HeaderModal from './HeaderModal';
import { usePathname } from 'next/navigation';
import { nameWithUrl } from '@/constants/constants';
import Link from 'next/link';
import cn from '@/utils/cn';


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
        <div className={cn('flex justify-between mb-4 px-5 max-xl:bg-bg2 max-xl:absolute max-xl:top-0 max-xl:left-0 max-xl:w-full max-xl:p-4 max-xl:px-6 max-md:bg-transparent max-md:relative max-md:pt-0 max-md:mb-0 max-md:px-4', { 'max-md:hidden': pathname == '/' })}>
            <div className='flex justify-between items-center flex-grow max-xl:pr-6'>
                <div className='hidden items-center gap-3 max-xl:flex max-md:hidden' >
                    <Link href='/'>
                        <Image src='/icons/dua-logo.svg' width='50' height='50' alt='logo' />
                    </Link>
                    <h1 className='font-medium text-[20px] text-accent-1'>Dua & Ruqyah</h1>
                </div>
                <h1 className='text-2xl text-accent-1 max-xl:hidden max-md:flex max-md:items-center max-md:text-xl max-md:pt-2 max-sm:text-lg'>
                    <Link href='/' className='hidden max-md:inline max-md:mr-3 text-[24px] '><IoIosArrowBack /></Link>
                    {nameWithUrl[pathname] ?? "Duas Page"}
                </h1>
                <Search />
            </div>
            <div className='flex items-center max-xl:flex-row-reverse max-xl:gap-4' >
                <div onClick={handleModalShow} className='relative flex items-center gap-1 w-[200px] justify-end max-xl:w-auto max-md:hidden'>
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