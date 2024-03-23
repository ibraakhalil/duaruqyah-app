'use client'
import { ElementProps } from "@/types/settings";
import cn from "@/utils/cn";
import Image from "next/image";
import Checkbox from "../other/Checkbox";


const General = ({ index, setIndex }: ElementProps) => {
    return (
        <div className={cn("rounded-lg border-x-[1px] overflow-hidden cursor-pointer", { "border-x-[1px] border-b-[1px]": index == 1 })}>
            <div onClick={() => setIndex(index == 1 ? null : 1)} className="rounded-l-md overflow-hidden">
                <div className={cn("flex items-center gap-4 p-2 border-l-[4px] border-icon-bg bg-icon-bg hover:border-l-[4px] hover:border-primary transition-all", { "border-primary": index == 1 })}>
                    <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                        <Image id="cat-img" className="" src='/icons/setting/general.svg' width={20} height={20} alt='Home' />
                    </div>
                    <h2 className={cn("text-accent-1 text-sm", { "text-primary font-medium": index == 1 })}>General Settings</h2>
                </div>
            </div>
            <div className={cn("hidden", { "block": index == 1 })}>
                <div className="flex flex-col gap-y-1 py-2 px-4 rounded-b-lg">
                    <div className="flex-row gap-x-3 flex text-sm py-1 justify-between text-title cursor-pointer">
                        <p className="style-Kalpurush">Show Arabic</p>
                        <div>
                            <Checkbox className="" />
                        </div>
                    </div>
                    <div className="flex-row gap-x-3 flex text-sm py-1 justify-between text-title cursor-pointer">
                        <p className="style-Kalpurush">Show Translation</p>
                        <div>
                            <Checkbox className="" />
                        </div>
                    </div>
                    <div className="flex-row gap-x-3 flex text-sm py-1 justify-between text-title cursor-pointer">
                        <p className="style-Kalpurush">Show Transliteration</p>
                        <div>
                            <Checkbox className="" />
                        </div>
                    </div>
                    <div className="flex-row gap-x-3 flex text-sm py-1 justify-between text-title cursor-pointer">
                        <p className="style-Kalpurush">Show Refference</p>
                        <div>
                            <Checkbox className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default General;