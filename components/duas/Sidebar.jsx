'use client'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import CategoryCard from "../category/CategoryCard";
import SubCatList from "./SubCatList";
import cn from "@/utils/cn";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function CategorySidebar({ data }) {
    const [filtCategories, setFiltCategories] = useState(data.categories)
    const { id } = useParams()

    const handleSearch = (e) => {
        const value = e.currentTarget.value.toLowerCase()
        const searchCategory = data.categories.filter(item => item.cat_name_en.toLowerCase().includes(value))
        setFiltCategories(searchCategory);
    }

    return (
        <div className="min-w-[350px] max-w-[350px] h-[calc(100vh-110px)] rounded-xl overflow-hidden bg-white max-[1024px]:absolute left-0 max-[1024px]:translate-x-[-100%]">
            <h3 className="bg-primary text-white p-4 text-center">Categories</h3>
            <div className="flex items-center p-3 border bg-white rounded-md m-3 gap-2 ">
                <CiSearch />
                <input onChange={handleSearch} className="outline-none text-[14px]" type="text" placeholder="Search by categories" />
            </div>
            <div className="sidebar-thin h-[calc(100vh-238px)] overflow-auto p-2">
                {filtCategories.map((category, i) => <div key={i} className="mb-2">
                    <Link href={`${category.cat_id}`}>
                        <div className={cn("rounded-xl hover:bg-bg", { "bg-bg": id == i + 1 })}>
                            <CategoryCard category={category} />
                        </div>
                    </Link>
                    <ul className={cn("hidden ml-9 py-2 border-l-2 border-dotted border-primary", { "block": id == i + 1 })}>
                        <SubCatList catId={category.cat_id} data={data} />
                    </ul>
                </div>)}
            </div>
        </div >
    )
}
