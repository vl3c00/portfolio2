import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div 
            className={twMerge(
                "inline-flex border border-amber-400 gap-2 text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text px-3 py-1 rounded-full uppercase items-center", 
                className
            )} 
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}
