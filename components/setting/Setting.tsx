'use client'
import Language from "./Language";
import General from "./General";
import Font from "./Font";
import Appearance from "./Appearance";
import { useState } from "react";

const Setting = () => {
    const [index, setIndex] = useState(0)

    const handleHide = () => {
        const settings = document.querySelector<HTMLElement>('#settings')!;
        settings.classList.add('max-2xl:translate-x-full');
        (settings.nextSibling as HTMLElement).style.display = 'none';
    }
    return (
        <>
            <div id="settings" className="sidebar-thin w-[270px] min-w-[270px] h-[calc(100vh-110px)] overflow-y-auto bg-white p-4 transition-all rounded-3xl max-2xl:fixed max-2xl:rounded-r-none max-2xl:right-0 max-2xl:h-[100vh] max-2xl:top-0 max-2xl:translate-x-full z-20">
                <h2 className="text-center text-lg my-4 mb-8">Settings</h2>
                <ul className="flex flex-col gap-4">
                    <Language index={index} setIndex={setIndex} />
                    <General  index={index} setIndex={setIndex} />
                    <Font  index={index} setIndex={setIndex} />
                    <Appearance  index={index} setIndex={setIndex} />
                </ul>
            </div>
            <div onClick={handleHide} className="bg-green-950 opacity-50 max-2xl:w-screen max-2xl:h-screen max-2xl:z-10 absolute top-0 left-0 -z-10  hidden" ></div>
        </>

    );
}

export default Setting;