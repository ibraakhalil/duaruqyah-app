'use client'
import { ElementProps } from "@/types/settings";
import cn from "@/utils/cn";
import Image from "next/image";


const General = ({ index, setIndex }: ElementProps) => {
    return (
        <div onClick={() => setIndex(1)} className={cn("rounded-lg border-x-[1px] overflow-hidden cursor-pointer", { "border-x-[1px] border-b-[1px]": index == 1 })}>

            <div className="rounded-l-md overflow-hidden">
                <div className={cn("flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary hover:border-l-[4px] hover:border-primary transition-all", { "border-primary": index == 1 })}>
                    <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                        <Image id="cat-img" className="" src='/icons/setting/general.svg' width={20} height={20} alt='Home' />
                    </div>
                    <h2 className={cn("text-gray-500 text-sm",{ "text-primary font-medium": index == 1 })}>General Settings</h2>
                </div>
            </div>
            <div className={cn("hidden", { "block": index == 1 })}>
                <div className="flex flex-col gap-y-1 py-2 px-4 rounded-b-lg">
                    <div className="flex-row gap-x-3 flex text-sm py-1 justify-between text-title  dark:text-[#e4e4e4] cursor-pointer">
                        <p className="style-Kalpurush">Show Arabic</p>
                        <div>
                            <div className="w-5 h-5 flex items-center justify-center rounded-md border-[2px] transition duration-150 delay-75">

                            </div>
                        </div>
                    </div>
                    <div className="flex-row gap-x-3 flex text-sm py-1 justify-between text-title  dark:text-[#e4e4e4] cursor-pointer">
                        <p className="style-Kalpurush">Show Translation</p>
                        <div>
                            <div className="w-5 h-5 flex items-center justify-center rounded-md bg-primary transition duration-150 delay-75">
                                <svg width="12" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row gap-x-3 flex text-sm py-1 justify-between text-title  dark:text-[#e4e4e4] cursor-pointer">
                        <p className="style-Kalpurush">Show Transliteration</p>
                        <div>
                            <div className="w-5 h-5 flex items-center justify-center rounded-md bg-primary transition duration-150 delay-75">
                                <svg width="12" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row gap-x-3 flex text-sm py-1 justify-between text-title  dark:text-[#e4e4e4] cursor-pointer">
                        <p className="style-Kalpurush">Show Refference</p>
                        <div>
                            <div className="w-5 h-5 flex items-center justify-center rounded-md bg-primary transition duration-150 delay-75">
                                <svg width="12" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default General;