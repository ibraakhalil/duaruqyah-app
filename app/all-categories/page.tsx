import CategoryCard from "@/components/category/CategoryCard";
import { getCategories } from "@/lib/getRequest";
import Link from "next/link";
import { Fragment } from "react";


const page = async () => {
    let categories = await getCategories()
    categories.push(...categories, ...categories)

    return (
        <div className="grid grid-cols-3 gap-4 gap-x-8 mt-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {categories?.map((category: any, i: number) => <Fragment key={i}>
                <Link href={`/duas/${category.cat_id}`}><CategoryCard className="bg-white" category={category} /></Link>
            </Fragment>)}
        </div>
    );
}

export default page;