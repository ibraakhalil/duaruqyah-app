'use client'
import { IoBookmarkOutline, IoCopyOutline, IoShareSocialOutline } from "react-icons/io5";
import { PiLightbulbFilament, PiWarningOctagonLight } from "react-icons/pi";
import { PLayer } from './Player';
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Action = ({ src, id }: { src: string, id: number }) => {

    const handleAction = (e: any) => toast.success('Coming soon in sha allah');
    const handleBookmark = (e: any) => {
        toast.success('Added to Bookmark')
        const bookmarks: any = localStorage.getItem('bookmarks')
        if (bookmarks) {
            const bookmarkString = JSON.parse(bookmarks)
            const newArray = [...bookmarkString, id]
            localStorage.setItem('bookmarks', JSON.stringify(newArray))
        } else {
            localStorage.setItem('bookmarks', JSON.stringify([id]))
        }
    }

    return (
        <div className='flex justify-between items-center mt-10'>
            {src && <PLayer src={src} />}
            <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar theme="dark" />
            <div className="actions text-gray-400 flex items-center gap-8 text-[23px] justify-end">
                <span onClick={() => toast.success('Text Copied')} className='cursor-pointer'><IoCopyOutline /></span>
                <span onClick={handleBookmark} className='cursor-pointer'><IoBookmarkOutline /></span>
                <span onClick={handleAction} className='cursor-pointer'><PiLightbulbFilament /></span>
                <span onClick={handleAction} className='cursor-pointer'><IoShareSocialOutline /></span>
                <span onClick={handleAction} className='cursor-pointer'><PiWarningOctagonLight /></span>
            </div>
        </div>
    );
}

export default Action;