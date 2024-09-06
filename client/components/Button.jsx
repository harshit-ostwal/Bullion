import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "flex w-full rounded-md font-semibold min-w-[320px] sm:w-[450px] items-center justify-center",
    {
        variants: {
            variant: {
                default: "bg-amber-200 text-black hover:bg-amber-300 transition",
            },
            size: {
                default: "p-4 ",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = ({ click, className, variant, size, ...props }) => {
    return (
        <button
            onClick={click}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
};

export { Button, buttonVariants };