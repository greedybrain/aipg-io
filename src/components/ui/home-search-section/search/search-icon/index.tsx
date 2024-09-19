import { BiSearchAlt } from "react-icons/bi";
import { cn } from "@/utils/tailwind/tw-merge";

const SearchIcon = () => {
    return (
        <div className={cn("w-[48px] flex justify-center h-full items-center")}>
            <BiSearchAlt size={28} />
        </div>
    );
};

export default SearchIcon;
