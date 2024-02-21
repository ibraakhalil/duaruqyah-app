import DuaCard from "@/components/other/DuaCard";
import Link from "next/link";

const page = () => {
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div className="w-full">
            <div className="w-12 h-12 rounded-xl text-[26px] bg-primary flex justify-center items-center text-white mb-8">A</div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                {array.map((item, i) => <Link key={i} href={'/'}>
                    <DuaCard word="A" title="A dhikr which is light on tongue, Heavy on the balance" />
                </Link>
                )}
            </div>
        </div>
    );
}

export default page;