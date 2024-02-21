"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


const NavList = () => {
    const categories: { name: string; icon: string; link: string }[] = [{
        name: "Home",
        icon: 'home.svg',
        link: '/'
    },
    {
        name: "All Duas",
        icon: 'alldua.svg',
        link: 'alldua'
    },
    {
        name: "Memorize",
        icon: 'memorize.svg',
        link: 'memorize'
    },
    {
        name: "Bookmark",
        icon: 'bookmark.svg',
        link: 'bookmark'
    },
    {
        name: "Ruqyah",
        icon: 'ruqyah.svg',
        link: 'ruqyah'
    },
    {
        name: "Dua Info",
        icon: 'dua-info.svg',
        link: 'dua-info'
    },
    {
        name: "Books",
        icon: 'books.svg',
        link: 'books'
    }]

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
            catImg.src = `/icons/${categories[i].icon}`
        })
        target.classList.add('active')
        target.querySelector("#cat-img").src = `/icons/fill/${categories[index].icon}`
    }

    return (
        <ul>
            {categories.map((category, i) => <li
                onClick={handleClick}
                key={i}
                data-index={i}
                id='category'
                className="my-2 rounded-lg overflow-hidden hover:scale-105 active:scale-95 transition-all"
            >
                <Link href={category.link} className="flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary">
                    <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                        <Image id="cat-img" className="" src={`/icons/${category.icon}`} width={20} height={20} alt='Home' />
                    </div>
                    <h2 className="text-primary text-sm">{category.name}</h2>
                </Link>
            </li>)}
        </ul>
    );
}

export default NavList;