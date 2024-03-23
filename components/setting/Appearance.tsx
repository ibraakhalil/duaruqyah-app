'use client'
import { ElementProps } from "@/types/settings";
import cn from "@/utils/cn";
import Image from "next/image";
import { useEffect, useState } from "react";


const Appearance = ({ index, setIndex }: ElementProps) => {
    const handleDarkTheme = () => {
        const html = document.documentElement
        if (html.className == '') {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
    }
    return (
        <div className={cn("rounded-lg overflow-hidden cursor-pointer", { "border-x-[1px] border-b-[1px]": index == 3 })}>
            <div onClick={() => setIndex(index == 3 ? null : 3)} className="rounded-l-md overflow-hidden">
                <div className={cn("flex items-center gap-4 p-2 border-l-[4px] border-icon-bg bg-icon-bg hover:border-l-[4px] hover:border-primary transition-all", { "border-primary": index == 3 })}>
                    <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                        <Image id="cat-img" className="" src='/icons/setting/font.svg' width={20} height={20} alt='Home' />
                    </div>
                    <h2 className={cn("text-accent-1 text-sm", { "text-primary font-medium": index == 3 })}>Appearance Settings</h2>
                </div>
            </div>

            <div className={cn("hidden", { "block": index == 3 })}>
                <div className="px-4 rounded-b-lg">
                    <div className="h-[70px] flex items-center justify-between">
                        <p className="text-sm">Night Mode</p>

                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer outline-none" />
                            <div onClick={handleDarkTheme} className="relative w-11 h-6 bg-gray-200  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appearance;