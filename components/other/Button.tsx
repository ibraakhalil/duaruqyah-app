import React from "react";
import cn from "@/utils/cn";

type ButtonProps = {
    text: string,
    className: string
}

const Button = ({ text, className, ...restProps }: ButtonProps) => {
    return (
        <button className={cn("bg-primary py-3 px-6 rounded-md text-white", className)} {...restProps}>
            {text}
        </button>
    );
}

export default Button;