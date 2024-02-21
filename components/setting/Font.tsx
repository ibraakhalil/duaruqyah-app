import Image from "next/image";

const Font = () => {
    return (
        <div className="rounded-lg overflow-hidden cursor-pointer">
            <div className="flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary hover:border-l-[4px] hover:border-primary transition-all">
                <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                    <Image id="cat-img" className="" src='/icons/setting/language.svg' width={20} height={20} alt='Home' />
                </div>
                <h2 className="text-primary text-sm">Font Settings</h2>
            </div>
            <div className="hidden">
                <div className="px-4 pb-1 rounded-b-lg">
                    <div className="flex flex-col items-start">
                        <p className="text-title mt-4 mb-3 text-sm dark:text-dark-text style-Kalpurush">Translation Font Size</p>
                        <div className="mb-2 gap-3 w-full grid grid-cols-[86%,1fr] place-items-center">
                            <input type="range" min="14" max="25"  value="20" />
                                <div>20</div>
                        </div>
                    </div>
                    <div className="flex items-start flex-col">
                        <div className="mt-4 w-[96%]">
                            <p className="text-title text-sm dark:text-dark-text mb-3 style-Kalpurush">Select Arabic Script</p>
                            <div className="relative ">
                                <div className="h-12 border border-solid border-[#ECEEF0] rounded-lg cursor-pointer dropDownWidth dark:border-none dark:bg-dark-bg-lite">
                                    <div className="px-4 py-3 flex items-center justify-between w-full">
                                        <p className=" text-sm">Indopak</p>
                                        <Image src="/icons/others/dropdown.svg" width={14} height={9} alt="dropdown" />
                                    </div>
                                </div>
                                <div className="hidden absolute bg-white rounded-lg right-0 left-0 top-14 px-0 py-3 drop-shadow-[0_0px_45px_rgba(15,15,15,0.1)] z-10 dark:bg-dark-bg-lite">
                                    <div className="cursor-pointer  text-mss flex flex-col px-2">
                                        <div className="hover:bg-[#F8F8F9] dark:hover:bg-dark-bg-dark px-4 py-2 rounded-md">Uthmani</div>
                                        <div className="hover:bg-[#F8F8F9] dark:hover:bg-dark-bg-dark px-4 py-2 rounded-md">Indopak</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 w-[96%]">
                            <p className="text-title text-sm dark:text-dark-text mb-3 style-Kalpurush">Arabic Font</p>
                            <div className="relative ">
                                <div className="h-12 border border-solid border-[#ECEEF0] rounded-lg cursor-pointer dropDownWidth dark:border-none dark:bg-dark-bg-lite">
                                    <div className="px-4 py-3 flex items-center justify-between w-full">
                                        <p className=" text-sm">Noor E Huda</p>
                                        <Image src="/icons/others/dropdown.svg" width={14} height={9} alt="dropdown" />
                                    </div>
                                </div>
                                <div className="hidden absolute bg-white rounded-lg right-0 left-0 top-14 px-0 py-3 drop-shadow-[0_0px_45px_rgba(15,15,15,0.1)] z-10 dark:bg-dark-bg-lite">
                                    <div className="cursor-pointer  text-mss flex flex-col px-2">
                                        <div className="hover:bg-[#F8F8F9] dark:hover:bg-dark-bg-dark px-4 py-2 rounded-md">Noor E Huda</div>
                                        <div className="hover:bg-[#F8F8F9] dark:hover:bg-dark-bg-dark px-4 py-2 rounded-md">Noor E Hedayet</div>
                                        <div className="hover:bg-[#F8F8F9] dark:hover:bg-dark-bg-dark px-4 py-2 rounded-md">Noor E Hira</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex items-start flex-col">
                        <p className="text-title text-sm dark:text-dark-text mb-3 style-Kalpurush">Arabic Font Size</p>
                        <div className="mb-2 gap-3 w-full grid grid-cols-[86%,1fr] place-items-center">
                            <input className="" type="range" min="18" max="40" value="30" />
                                <div>30</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Font;