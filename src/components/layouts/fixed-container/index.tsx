import React from "react";
import { TFixedContainerProps } from "@/types/props";
import { cn } from "@/lib/utils";

/**
 * Fixed Container Component: Has a fixed max width of 1280px and positions content
 * center.
 */
const FixedContainer = React.forwardRef<HTMLDivElement, TFixedContainerProps>(
    ({ children, ...rest }, ref) => {
        const { className, ...restProps } = rest;

        return (
            <div
                ref={ref}
                className={cn("mx-auto max-w-7xl px-5 xl:px-0", className)}
                {...restProps}
            >
                {children}
            </div>
        );
    }
);

FixedContainer.displayName = "FixedContainer";

export default FixedContainer;
