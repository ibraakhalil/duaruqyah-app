import { ElementProps } from "@/types/settings";
import cn from "@/utils/cn";
import Image from "next/image";


const Appearance = ({ index, setIndex }: ElementProps) => {
    return (
        <div onClick={() => setIndex(3)} className={cn("rounded-lg overflow-hidden cursor-pointer", { "border-x-[1px] border-b-[1px]": index == 3 })}>
            <div className="rounded-l-md overflow-hidden">
                <div className={cn("flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary hover:border-l-[4px] hover:border-primary transition-all", { "border-primary": index == 3 })}>
                    <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                        <Image id="cat-img" className="" src='/icons/setting/font.svg' width={20} height={20} alt='Home' />
                    </div>
                    <h2 className={cn("text-gray-500 text-sm", { "text-primary font-medium": index == 3 })}>Appearance Settings</h2>
                </div>
            </div>

            <div className={cn("hidden", { "block": index == 3 })}>
                <div className="px-4 rounded-b-lg">
                    <div className="h-[70px] flex items-center justify-between">
                        <p className="text-sm dark:text-dark-text">Night Mode</p>

                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer outline-none" />
                            <div className="relative w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appearance;