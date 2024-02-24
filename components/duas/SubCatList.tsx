'use client'
import cn from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";

interface SubcatProps {
    catId: number,
    data: any
}

const SubCatList = ({ catId, data }: SubcatProps) => {
    const [subCatIndex, setSubCatIndex] = useState(null)

    return (
        <>
            {data.subCategories?.filter((item: any) => item.cat_id == catId).map((subCategory: any, i: any) => <div key={i} className="pl-3 mb-3 relative subcategory_dot">
                <Link
                    className={cn("font-medium", { "text-primary": subCatIndex == i })}
                    onClick={() => setSubCatIndex(i)}
                    href={`${catId}/#${subCategory.id}`}>
                    {subCategory.subcat_name_en}
                </Link>

                <div className={cn("hidden dua pt-4 text-gray-500 text-[14px]", { "block": subCatIndex == i })}>
                    {data.duas?.filter((item: any) => item.subcat_id == subCategory.subcat_id).map((dua: any, i: number) => <Link
                        key={i}
                        href={`/duas/${catId}/#${dua.dua_id}`}
                        className="dua_list_style">
                        {dua.dua_name_en}
                    </Link>
                    )}
                </div>
            </div>)}
        </>

    );
}

export default SubCatList;