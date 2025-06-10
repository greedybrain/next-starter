import { TStandardHTMLElement } from "@/types";
import { cn } from "@/lib/utils";

const Section = ({ children, ...rest }: TStandardHTMLElement) => {
    const { className, ...restProps } = rest;

    return (
        <section className={cn("", className)} {...restProps}>
            {children}
        </section>
    );
};

export default Section;
