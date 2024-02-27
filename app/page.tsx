import CategoryCard from "@/components/category/CategoryCard";
import HomeCard from "@/components/home/HomeCard";
import MoreCategories from "@/components/home/MoreCategories";
import Swiper from "@/components/home/Swiper";
import { getCategories } from "@/lib/getRequest";
import Link from "next/link";
import { Fragment } from "react";
import { IoIosSearch } from "react-icons/io";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";


export default async function Home() {
  const categories = await getCategories()

  return (
    <main className="max-md:absolute max-md:-top-0 max-md:left-0 max-md:h-[calc(100vh-160px)]">
      <div className="hidden items-center justify-between text-white absolute top-0 w-full text-[28px] p-4 max-md:flex">
        <div><HiMiniBars3BottomLeft /></div>
        <h1 className="text-xl font-semibold">HomePage</h1>
        <div><IoIosSearch /></div>
      </div>
      <Swiper className="bg-primary max-md:w-screen max-md:rounded-t-none max-md:h-[55vh]  max-md:-z-10 max-md:items-start max-md:pt-28" />
      <div className="grid grid-cols-3 gap-4 gap-x-8 mt-8 max-md:bg-white max-md:rounded-3xl max-md:p-4 max-md:gap-2 max-md:mx-6 max-md:-mt-[12rem] max-sm:-mt-[10rem] max-sm:mx-2 max-sm:px-0">
        <Link href='/comingsoon'><HomeCard name={"Last Read"} icon={'lastread'} /></Link>
        <Link href='/comingsoon'><HomeCard name={"Blogs"} icon={'blog'} /></Link>
        <Link href='/ruqyah'><HomeCard name={"Ruqyah"} icon={'ruqyah'} /></Link>
        <Link href='/dua-info'><HomeCard name={"Dua Info"} icon={'duaqa'} /></Link>
        <Link href='/books'><HomeCard name={"Books"} icon={'book'} /></Link>
        <Link href='/comingsoon'><HomeCard name={"Dua Audio"} icon={'audio'} /></Link>
      </div>
      <div className="mt-8 max-md:mt-4 max-md:mx-6 max-sm:mx-2 max-md:pb-24">
        <h2 className="text-lg font-medium max-md:hidden">Categories of Dua</h2>
        <div className="grid grid-cols-3 gap-4 gap-x-8 mt-4 max-lg:grid-cols-2 max-md:grid-cols-1">
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
