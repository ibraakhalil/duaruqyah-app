'use client'
import Link from "next/link";
import NavList from "./NavList";
import Image from "next/image";
import { FaApple, FaHandHoldingHeart } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";


const Sidebar = () => {
    const pathName = usePathname()
    const isPathName = pathName.includes('/duas')
    const hidden = { "hidden": isPathName }

    return (
        <aside className={cn("sidebar_responsive sidebar-thin overflow-y-auto min-w-[270px] max-2xl:min-w-[238px]  p-4 rounded-3xl bg-white z-10 max-xl:p-2 max-xl:rounded-b-none max-xl:h-auto max-xl:sidebar_boxshadow max-md:rounded-t-[35px] max-md:fixed max-md:py-0", { "min-w-[100px] max-2xl:min-w-[100px]": isPathName })}>
            <div className={cn("flex flex-col items-center p-4 max-xl:hidden", { "px-0": isPathName })}>
                <Link href='/'>
                    <Image src='/icons/dua-logo.svg' width='64' height='64' alt='logo' />
                </Link>
                <h1 className={cn("pt-2 text-xl max-2xl:hidden", hidden)}>Dua & Ruqyah</h1>
                <p className={cn("text-xs text-gray-400 pt-1 max-2xl:hidden", hidden)}>Vesion: 1.0</p>
            </div>
            <NavList isPathName={isPathName} />
            <div className="mt-8 max-xl:hidden">
                <div>
                    <Link href='/' className={cn("flex items-center justify-center gap-4 p-4  bg-primary rounded-lg text-white", { "": isPathName })}>
                        <h2 className={cn("text-sm", hidden)}>I Want To Support</h2>
                        <div className="text-xl">
                            <FaHandHoldingHeart />
                        </div>
                    </Link>
                </div>
                <div className={cn("text-center max-xl:hidden", hidden)}>
                    <p className="text-xs text-gray-500 my-2">Download Apps:</p>
                    <div className="flex gap-4 justify-center">
                        <Link className="text-[34px] p-2 bg-primary text-white rounded" href='/'><DiAndroid /></Link>
                        <Link className="text-[34px] p-2 bg-[#434343] text-white rounded" href='/'><FaApple /></Link>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;    