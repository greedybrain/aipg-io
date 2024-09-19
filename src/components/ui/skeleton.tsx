import { cn } from "@/utils/tailwind/tw-merge";

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-app-tertiary/10",
                className,
            )}
            {...props}
        />
    );
}

export { Skeleton };
