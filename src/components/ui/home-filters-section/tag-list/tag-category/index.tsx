import { cn } from "@/utils/tailwind/tw-merge";

const TagCategory = ({ category }: { category: string }) => {
    return <p className={cn("font-medium")}>{category}</p>;
};

export default TagCategory;
