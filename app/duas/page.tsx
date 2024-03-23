import CategoryCard from "@/components/category/CategoryCard";
import { getCategories } from "@/lib/getRequest";
import Link from "next/link";
import { Fragment } from "react";


const page = async () => {
    let categories = await getCategories()
    categories.push(...categories, ...categories)

    return (
        <div className="grid grid-cols-3 gap-4 gap-x-8 mt-4">
            {categories?.map((category: any, i: number) => <Fragment key={i}>
                <Link href={`/duas/${category.cat_id}`}><CategoryCard className="bg-bg2" category={category} /></Link>
            </Fragment>)}
        </div>
    );
}

export default page;