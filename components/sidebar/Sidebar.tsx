import Link from "next/link";
import NavList from "./NavList";
import Image from "next/image";
import { FaApple, FaHandHoldingHeart } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";


const Sidebar = () => {
    return (
        <aside className="sidebar-thin overflow-y-auto h-[100%] w-[270px] min-w-[270px] p-4 rounded-l-3xl bg-white">
            <div className="flex flex-col items-center p-4">
                <Link href='/'>
                    <Image src='/icons/dua-logo.svg' width='64' height='64' alt='logo' />
                </Link>
                <h1 className="pt-2 text-xl">Dua & Ruqyah</h1>
                <p className="text-xs text-gray-400 pt-1">Vesion: 1.0</p>
            </div>
            <NavList />
            <div className="mt-8">
                <div>
                    <Link href='/' className="flex items-center justify-center gap-4 p-4  bg-primary rounded-lg text-white">
                        <h2 className=" text-sm">I Want To Support</h2>
                        <div className="text-xl">
                            <FaHandHoldingHeart />
                        </div>
                    </Link>
                </div>
                <div className="text-center">
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