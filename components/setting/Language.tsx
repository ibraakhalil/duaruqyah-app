'use client'
import Image from "next/image";
import Button from "../other/Button";
import cn from "@/utils/cn";
import { ElementProps } from "@/types/settings";


const Language = ({ index, setIndex }: ElementProps) => {
    return (
        <div onClick={() => setIndex(0)} className="border-x-[1px] border-b-[1px] rounded-lg overflow-hidden cursor-pointer">
            <div className={cn("flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary hover:border-l-[4px] hover:border-primary transition-all", { "border-primary": index == 0 })}>
                <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                    <Image id="cat-img" className="" src='/icons/setting/language.svg' width={20} height={20} alt='Home' />
                </div>
                <h2 className="text-primary text-sm">Language Settings</h2>
            </div>
            <div className={cn("hidden items-center gap-4 justify-center p-4 py-6", { "flex": index == 0 })}>
                <Button text="English" className="text-xs" />
                <Button text="বাংলা" className="bg-white text-primary text-xs border" />
            </div>
        </div>
    );
}

export default Language;