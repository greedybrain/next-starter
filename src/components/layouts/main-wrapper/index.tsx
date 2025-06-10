import FixedContainer from "../fixed-container";
import { TMainWrapperProps } from "@/types/props";
import { cn } from "@/lib/utils";

const MainWrapper = ({ children, ...rest }: TMainWrapperProps) => {
    const { className, ...restProps } = rest;
    return (
        <main className={cn("min-h-screen py-10", className)} {...restProps}>
            <FixedContainer>{children}</FixedContainer>
        </main>
    );
};

export default MainWrapper;
