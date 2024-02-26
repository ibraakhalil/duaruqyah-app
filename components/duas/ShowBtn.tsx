'use client'
import { FaBars } from "react-icons/fa";

const ShowBtn = () => {
    const handleDuaCatShow = (e: any) => {
        const duasSidebar = document.querySelector('#duas_sidebar') as HTMLElement
        const sidebarBg = document.querySelector('.sidebar_bg') as HTMLElement
        duasSidebar.style.transform = 'translateX(0%)'
        sidebarBg.style.display = 'block'
    }

    return (
        <div onClick={handleDuaCatShow} className="hidden items-center gap-2 bg-white rounded-xl mb-4 p-4 font-medium cursor-pointer max-lg:flex">
            <div>
                <FaBars />
            </div>
            <p>Duas Importance</p>
        </div>
    );
}

export default ShowBtn;