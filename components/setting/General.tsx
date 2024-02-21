import Image from "next/image";

const General = () => {
    return (
        <div className="rounded-lg border-x-[1px] border-b-[1px] overflow-hidden cursor-pointer">
            <div className="flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary hover:border-l-[4px] hover:border-primary transition-all">
                <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                    <Image id="cat-img" className="" src='/icons/setting/general.svg' width={20} height={20} alt='Home' />
                </div>
                <h2 className="text-primary text-sm">General Settings</h2>
            </div>
            <div className="hidden">
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
                                    <path d="M1 7L5 11L15 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
                                    <path d="M1 7L5 11L15 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row gap-x-3 flex text-sm py-1 justify-between text-title  dark:text-[#e4e4e4] cursor-pointer">
                        <p className="style-Kalpurush">Show Refference</p>
                        <div>
                            <div className="w-5 h-5 flex items-center justify-center rounded-md bg-primary transition duration-150 delay-75">
                                <svg width="12" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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