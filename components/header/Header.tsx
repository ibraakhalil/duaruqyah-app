'use client'
import React, { useState } from 'react'
import Search from './Search'
import Image from 'next/image'
import { MdArrowDropDown } from "react-icons/md";
import HeaderModal from './HeaderModal';
import { usePathname } from 'next/navigation';

function Header() {
    const [modalShow, setModalShow] = useState(false)
    const pathname: string = usePathname()
    const nameWithUrl: any = {
        '/': "Home Page",
        '/alldua': "All Duas",
        '/memorize': "Memorize",
        '/bookmark': "Bookmark",
        '/ruqyah': "Ruqyah",
        '/dua-info': "Dua Info",
        '/books': "Books",
        '/all-categories': "All Categories",
        '/comingsoon': "Coming Soon",
        '/duas': "Duas Page",
    }

    const handleModalShow = (e: any) => {
        setModalShow(!modalShow)
    }

    const showSettings = () => {
        const settings = document.getElementById('settings')!;
        settings.classList.remove('max-2xl:translate-x-full');
        (settings.nextSibling as HTMLElement).style.display = 'block';
    }


    return (
        <div className='flex justify-between mb-4 px-2' >
            <div className='flex justify-between items-center flex-grow'>
                <h1 className='text-2xl'>{nameWithUrl[pathname] ?? 'Page'}</h1>
                <Search />
            </div>
            <div className='flex items-center' >
                <div onClick={handleModalShow} className='relative flex items-center gap-1 w-[200px] justify-end'>
                    <div className='cursor-pointer'>
                        <Image src='/icons/profile.svg' width='45' height='45' alt='profile' />
                    </div>
                    <div className='text-2xl text-primary'>
                        <MdArrowDropDown />
                    </div>
                    <HeaderModal show={modalShow} setShow={setModalShow} />
                </div>
                <div onClick={showSettings} className='hidden ml-2 cursor-pointer max-2xl:block'>
                    <Image src={'/icons/header/settings.svg'} width={20} height={20} alt='setting' />
                </div>
            </div>
        </div>
    )
}

export default Header