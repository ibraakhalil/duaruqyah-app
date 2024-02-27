'use client'
import { tickSvg } from "@/lib/svgList";
import cn from "@/utils/cn";
import { useState } from "react";

const Checkbox = ({ className }: { className: any }) => {
    const [active, setActive] = useState(false)
    
    return (
        <div
            onClick={() => setActive(!active)}
            className={cn("flex justify-center items-center w-5 h-5 rounded-md border-gray-200 border-[2px]", className, { "bg-primary border-primary": active })}>

            {active && tickSvg}

        </div>
    );
}

export default Checkbox;