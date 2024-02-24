import CategoryCard from "@/components/category/CategoryCard";
import HomeCard from "@/components/home/HomeCard";
import MoreCategories from "@/components/home/MoreCategories";
import Swiper from "@/components/home/Swiper";
import { getCategories } from "@/lib/getRequest";
import Link from "next/link";
import { Fragment } from "react";


export default async function Home() {
  const categories = await getCategories()

  return (
    <main className="px-2">
      <Swiper className="bg-primary" />
      <div className="grid grid-cols-3 gap-4 gap-x-8 mt-8">
        <Link href='/comingsoon'><HomeCard name={"Last Read"} icon={'lastread'} /></Link>
        <Link href='/comingsoon'><HomeCard name={"Blogs"} icon={'blog'} /></Link>
        <Link href='/ruqyah'><HomeCard name={"Ruqyah"} icon={'ruqyah'} /></Link>
        <Link href='/dua-info'><HomeCard name={"Dua Info"} icon={'duaqa'} /></Link>
        <Link href='/books'><HomeCard name={"Books"} icon={'book'} /></Link>
        <Link href='/comingsoon'><HomeCard name={"Dua Audio"} icon={'audio'} /></Link>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-medium">Categories of Dua</h2>
        <div className="grid grid-cols-3 gap-4 gap-x-8 mt-4">
          {categories.slice(0, 8).map((category: any, i: number) => <Fragment key={i}>
            <Link href={`/duas/${category.cat_id}`}>
              <CategoryCard className="bg-white" category={category} />
            </Link>
          </Fragment>)}
          <MoreCategories />
        </div>
      </div>
    </main>
  );
}
