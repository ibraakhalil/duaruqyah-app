import { ElementProps } from "@/types/settings";
import cn from "@/utils/cn";
import Image from "next/image";


const Appearance = ({ index, setIndex }: ElementProps) => {
    return (
        <div onClick={() => setIndex(3)} className="rounded-lg overflow-hidden cursor-pointer border-x-[1px] border-b-[1px]">
            <div className={cn("flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary hover:border-l-[4px] hover:border-primary transition-all", { "border-primary": index == 3 })}>
                <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                    <Image id="cat-img" className="" src='/icons/setting/font.svg' width={20} height={20} alt='Home' />
                </div>
                <h2 className="text-primary text-sm">Appearance Settings</h2>
            </div>
            <div className={cn("hidden", { "block": index == 3 })}>
                <div className="px-4 pb-1 rounded-b-lg"><div className=" flex flex-row justify-between"><p className="mt-7 mb-4 text-title text-sm dark:text-dark-text">Night Mode</p><div className="mt-7 mb-4"><button className="bg-primary
          relative inline-flex h-5 w-10 z-[1] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75" id="headlessui-switch-:r1:" role="switch" type="button" aria-checked="true" data-headlessui-state="checked"><span className="sr-only">Use setting</span><span aria-hidden="true" className="translate-x-5
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"></span></button></div></div></div>
            </div>
        </div>
    );
}

export default Appearance;