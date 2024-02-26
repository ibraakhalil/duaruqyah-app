"use client"
import { sidebarCatsData } from "@/constants/constants";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


const NavList = ({ isPathName }: { isPathName: boolean }) => {

    useEffect(() => {
        const categoryElem = document.querySelector('#category')!
        categoryElem.classList.add('active')
        const catImgg = categoryElem.querySelector("#cat-img") as HTMLImageElement
        catImgg.src = "/icons/fill/home.svg"
    }, [])

    const handleClick = (e: any) => {
        const categoryList = document.querySelectorAll('#category')
        const target = e.currentTarget
        const index = target.dataset.index
        categoryList.forEach((item, i) => {
            item.classList.remove('active')
            const catImg = item.querySelector("#cat-img") as HTMLImageElement
            catImg.src = `/icons/${sidebarCatsData[i].icon}`
        })
        target.classList.add('active')
        target.querySelector("#cat-img").src = `/icons/fill/${sidebarCatsData[index].icon}`
    }

    return (
        <ul className={cn("navlist_responsive" ,{ "my-10 mb-12 max-xl:my-0 max-xl:mb-0": isPathName })}>
            {sidebarCatsData.map((category, i) => <li
                onClick={handleClick}
                key={i}
                data-index={i}
                id='category'
                className="my-2 rounded-lg overflow-hidden hover:scale-105 active:scale-95 transition-all"
            >
                <Link href={`/${category.link}`} className={cn("flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary max-xl:border-none max-xl:bg-transparent", { "justify-center border-none bg-transparent": isPathName })}>
                    <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center ">
                        <Image id="cat-img" className="" src={`/icons/${category.icon}`} width={20} height={20} alt='Home' />
                    </div>
                    <h2 className={cn("text-primary text-sm max-xl:hidden", { "hidden": isPathName })}>{category.name}</h2>
                </Link>
            </li>)}
        </ul>
    );
}

export default NavList;