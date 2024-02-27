import Swiper from "@/components/home/Swiper";
import DuaCard from "@/components/other/DuaCard";
import Link from "next/link";

const DuaInfo = () => {
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div className="h-full">
            <Swiper className='bg-blue-500' />
            <div className="grid grid-cols-3 gap-x-8 gap-y-4 mt-8 max-lg:grid-cols-2 max-lg:pb-8 max-md:grid-cols-1">
                {array.map((item, i) => <Link key={i} href={''}>
                    <DuaCard word={i + 1} title="Conditions of dua being accepted by Allaah" />
                </Link>)}
            </div>
        </div>
    );
}

export default DuaInfo;