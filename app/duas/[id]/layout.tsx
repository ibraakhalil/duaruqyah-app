import React from "react";
import CategorySidebar from '@/components/duas/Sidebar'
import { getCategories, getDuaNames, getDuas, getSubCategories } from "@/lib/getRequest";

interface DuasProps {
    children: React.ReactNode
}

const DuasLayout = async ({ children }: DuasProps) => {
    const categories = await getCategories()
    const subCategories = await getSubCategories()
    const duas = await getDuaNames()
    const data = { categories, subCategories, duas }

    return (
        <div className="flex gap-4">
            <CategorySidebar data={data} />
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
}

export default DuasLayout;