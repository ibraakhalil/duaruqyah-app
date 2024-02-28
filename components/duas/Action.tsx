'use client'
import { IoBookmarkOutline, IoCopyOutline, IoShareSocialOutline } from "react-icons/io5";
import { PiLightbulbFilament, PiWarningOctagonLight } from "react-icons/pi";
import { PLayer } from './Player';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import cn from "@/utils/cn";
import BookmarkModal from "./BookmarkModal";


const Action = ({ src, id }: { src: string, id: number }) => {
    const [modal, setModal] = useState(false)
    const [play, setPlay] = useState(false)
    const handleAction = (e: any) => toast.success('Coming soon in sha allah');

    const showModal = (boolean: boolean) => {
        setModal(boolean)
    }

    return (
        <>
            <div className={cn("hidden absolute w-screen h-screen top-0 left-0 bg-[#00000052] z-30 justify-center items-center", { "flex": modal })}>
                <BookmarkModal modal={modal} showModal={showModal} />
            </div>
            <div className='flex justify-between items-center mt-10'>
                {src && <PLayer play={play} setPlay={setPlay} src={src} />}
                <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar theme="dark" />
                <div className={cn("actions text-gray-400 flex items-center gap-8 text-[23px] justify-end max-sm:gap-5", { "max-sm:hidden": play })}>
                    <span onClick={() => toast.success('Text Copied')} className='cursor-pointer'><IoCopyOutline /></span>
                    <span onClick={() => showModal(true)} className='cursor-pointer'><IoBookmarkOutline /></span>
                    <span onClick={handleAction} className='cursor-pointer'><PiLightbulbFilament /></span>
                    <span onClick={handleAction} className='cursor-pointer'><IoShareSocialOutline /></span>
                    <span onClick={handleAction} className='cursor-pointer'><PiWarningOctagonLight /></span>
                </div>
            </div>
        </>

    );
}

export default Action;