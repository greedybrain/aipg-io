import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/tailwind/tw-merge";

const SearchSubmit = () => {
    return (
        <Button
            size={"icon"}
            className={cn(
                "border-2 border-app-tertiary rounded-lg size-[45px] bg-app-primary shadow-neobrut1 flex items-center justify-center hover:shadow-neobrut1 active:scale-90",
            )}
        >
            <ArrowUpRight size={28} />
        </Button>
    );
};

export default SearchSubmit;
