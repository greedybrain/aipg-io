import { cn } from "@/utils/tailwind/tw-merge";

const separatorHrStyles = `border border-app-tertiary w-full`;

const OrSeparator = () => {
    return (
        <div className={cn("flex gap-x-3 items-center my-10 w-full")}>
            <hr className={cn(separatorHrStyles)} />
            <span>OR</span>
            <hr className={cn(separatorHrStyles)} />
        </div>
    );
};

export default OrSeparator;
