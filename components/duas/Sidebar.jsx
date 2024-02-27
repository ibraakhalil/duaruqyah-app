'use client'
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import SubCatList from "./SubCatList";
import cn from "@/utils/cn";
import Link from "next/link";
import { useParams } from "next/navigation";
import './sidebar.css'
import CategoryCard from "../category/CategoryCard";


export default function CategorySidebar({ data }) {
    const [filtCategories, setFiltCategories] = useState(data.categories)
    const { id } = useParams()

    useEffect(() => {
        const target = document.querySelector(`#cat_${id}`)
        target?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }, [])


    const handleSearch = (e) => {
        const value = e.currentTarget.value.toLowerCase()
        const searchCategory = data.categories.filter(item => item.cat_name_en.toLowerCase().includes(value))
        setFiltCategories(searchCategory);
    }

    const hideSidebar = () => {
        const duasSidebar = document.querySelector('#duas_sidebar')
        const sidebarBg = document.querySelector('.sidebar_bg')
        duasSidebar.style.transform = ''
        sidebarBg.style.display = ''
    }


    return (
        <>
            <div onClick={hideSidebar} className="sidebar_bg hidden"></div>
            <div id="duas_sidebar" className="sidebar h-[calc(100vh-110px)] rounded-xl overflow-hidden bg-white max-lg:rounded-l-none">
                <h3 className="bg-primary text-white p-4 text-center">
                    Categories
                    <div className="hidden max-sm:block" onClick={hideSidebar}>
                        <FaTimes />
                    </div>
                </h3>
                <div className="search flex items-center p-3 border bg-white rounded-md m-3 gap-2 ">
                    <CiSearch />
                    <input onChange={handleSearch} className="outline-none text-[14px]" type="text" placeholder="Search by categories" />
                </div>
                <div className="wrapper sidebar-thin overflow-y-auto p-2">
                    {filtCategories.map((category, i) => <div key={i} className="mb-2">
                        <Link href={`/duas/${category.cat_id}`}>
                            <div className={cn("category rounded-xl hover:bg-bg", { "bg-bg": id == (i + 1) })}>
                                <CategoryCard category={category} />
                            </div>
                        </Link>
                        <ul className={cn("subcat_wrapper hidden ml-9 py-2 border-l-2 border-dotted border-primary", { "block": id == i + 1 })}>
                            <SubCatList catId={category.cat_id} data={data} />
                        </ul>
                    </div>)}
                </div>
            </div >
        </>
    )
}
