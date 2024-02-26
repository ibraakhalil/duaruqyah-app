'use client'
import Image from "next/image";
import Button from "../other/Button";
import cn from "@/utils/cn";
import { ElementProps } from "@/types/settings";


const Language = ({ index, setIndex }: ElementProps) => {
    return (
        <div onClick={() => setIndex(0)} className={cn("rounded-lg overflow-hidden cursor-pointer", { "border-x-[1px] border-b-[1px]": index == 0 })}>
            <div className="rounded-l-md overflow-hidden">
                <div className={cn("flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary hover:border-l-[4px] hover:border-primary transition-all", { "border-primary text-primary": index == 0 })}>
                    <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                        <Image id="cat-img" className="" src='/icons/setting/language.svg' width={20} height={20} alt='Home' />
                    </div>
                    <h2 className={cn("text-gray-500 text-sm", { "text-primary font-medium": index == 0 })}>Language Settings</h2>
                </div>
            </div>

            <div className={cn("hidden items-center gap-4 justify-center p-4 py-6", { "flex": index == 0 })}>
                <Button text="English" className="text-xs max-2xl:w-[110px]" />
                <Button text="বাংলা" className="bg-white text-primary text-xs border max-2xl:w-[110px]" />
            </div>
        </div>
    );
}

export default Language;