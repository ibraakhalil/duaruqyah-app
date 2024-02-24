import DuaCard from "@/components/other/DuaCard";
import { getDuas } from "@/lib/getRequest";
import { sortingByWord } from "@/utils/sorting";
import Link from "next/link";


const page = async () => {
    const allDuas = await getDuas()

    // const filtered = allDuas.filter((item: any) => item.dua_name_en.startsWith(item.dua_name_en?.charAt(0)))

    return (
        <div className="w-full">
            <div className="w-12 h-12 rounded-xl text-[26px] bg-primary flex justify-center items-center text-white mb-8">A</div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                {allDuas?.sort(sortingByWord).map((item: any, i: number) => <Link key={i} href={'/'}>
                    <DuaCard word={item.dua_name_en?.charAt(0)} title={item.dua_name_en} />
                </Link>
                )}
            </div>
        </div>
    );
}

export default page;