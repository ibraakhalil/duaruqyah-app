import DuaCard from "@/components/other/DuaCard";
import { getDuaNames, getDuas } from "@/lib/getRequest";
import { sortingByWord } from "@/utils/sorting";
import Link from "next/link";


const page = async () => {
    const duaNames = await getDuaNames()
    const wordsArray = [...new Set(duaNames.map((item: any) => item?.dua_name_en?.charAt(0)))].filter(item => item != undefined)

    return (
        <div className="w-full mt-4">
            {wordsArray.sort(sortingByWord).map((word: any, i: number) => <div key={i} className="mb-12">
                <div className="w-12 h-12 rounded-xl text-[26px] bg-primary flex justify-center items-center text-white mb-8">{word}</div>
                <div className="grid grid-cols-3 gap-x-8 gap-y-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {duaNames.filter((x: any) => word == x.dua_name_en?.charAt(0)).map((item: any, i: number) => <Link key={i} href={`/alldua/${item.dua_id}`}>
                        <DuaCard word={item.dua_name_en?.charAt(0)} title={item.dua_name_en} />
                    </Link>
                    )}
                </div>
            </div>)}
        </div>
    );
}

export default page;