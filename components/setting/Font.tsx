"use client"
import { ElementProps } from "@/types/settings";
import cn from "@/utils/cn";
import Image from "next/image";
import { Slider } from "../ui/slider";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";

const Font = ({ index, setIndex }: ElementProps) => {
    const [arabic, setArabic] = useState(18)
    const [translation, setTranslation] = useState(14)


    return (
        <div className={cn("rounded-lg overflow-hidden cursor-pointer", { "border-x-[1px] border-b-[1px]": index == 2 })}>
            <div onClick={() => setIndex(index == 2 ? null : 2)} className="rounded-l-md overflow-hidden">
                <div className={cn("flex items-center gap-4 p-2 border-l-[4px] border-icon-bg bg-icon-bg hover:border-l-[4px] hover:border-primary transition-all", { "border-primary": index == 2 })}>
                    <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                        <Image id="cat-img" className="" src='/icons/setting/language.svg' width={20} height={20} alt='language' />
                    </div>
                    <h2 className={cn("text-gray-500 text-sm", { "text-primary font-medium": index == 2 })}>Font Settings</h2>
                </div>
            </div>
            <div className={cn("hidden", { "block": index == 2 })}>
                <div className="px-4 pb-8 rounded-b-lg flex flex-col gap-3">
                    <div className="flex flex-col items-start">
                        <p className="text-title mt-4 mb-3 text-sm style-Kalpurush text-accent-1">Translation Font Size</p>
                        <div className="w-full mt-2 flex items-center gap-3">
                            <Slider onValueChange={(e) => setTranslation(e[0])} defaultValue={[14]} min={14} max={25} step={1} />
                            <span>{translation}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-title mt-4 mb-3 text-sm style-Kalpurush text-gray-700">Select Arabic Script</p>
                        <div className="w-full mt-1">
                            <Select defaultValue="uthmani">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="uthmani">Uthmani</SelectItem>
                                        <SelectItem value="indopak">Indopak</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-title mt-4 mb-3 text-sm style-Kalpurush text-accent-1">Arabic Font</p>
                        <div className="w-full mt-1">
                            <Select defaultValue="ird">
                                <SelectTrigger>
                                    <SelectValue placeholder="Nur E Huda" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="ird">Nur E Huda</SelectItem>
                                        <SelectItem value="me-quran">Me Quran</SelectItem>
                                        <SelectItem value="al-mushaf">Nur E Hidayet</SelectItem>
                                        <SelectItem value="amiri-quran">Amiri Quran</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-title mt-4 mb-3 text-sm style-Kalpurush text-gray-700">Arabic Font Size</p>
                        <div className="w-full mt-2 flex items-center gap-3">
                            <Slider onValueChange={(e) => setArabic(e[0])} defaultValue={[18]} min={18} max={40} step={1} />
                            <span>{arabic}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Font;