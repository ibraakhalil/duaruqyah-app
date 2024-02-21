import CategoryCard from "@/components/category/CategoryCard";
import HomeCard from "@/components/home/HomeCard";
import Swiper from "@/components/home/Swiper";


export default function Home() {
  return (
    <main className="px-2">
      <Swiper className="bg-primary" />
      <div className="grid grid-cols-3 gap-4 gap-x-8 mt-8">
        <HomeCard name={"Last Read"} icon={'lastread'} />
        <HomeCard name={"Blogs"} icon={'blog'} />
        <HomeCard name={"Ruqyah"} icon={'ruqyah'} />
        <HomeCard name={"Dua Info"} icon={'duaqa'} />
        <HomeCard name={"Books"} icon={'book'} />
        <HomeCard name={"Dua Audio"} icon={'audio'} />
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-medium">Categories of Dua</h2>
        <div className="grid grid-cols-3 gap-4 gap-x-8 mt-4">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </main>
  );
}
