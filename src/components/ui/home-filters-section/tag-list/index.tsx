import TagItem from "./tag-item";
import { cn } from "@/utils/tailwind/tw-merge";
import { tagsData } from "@/utils/data/tags";

const TagList = () => {
    return (
        <ul className={cn("mt-3 space-y-5")}>
            {tagsData.map((data) => {
                return (
                    <li key={data.category}>
                        <TagItem category={data.category} tags={data.tags} />
                    </li>
                );
            })}
        </ul>
    );
};

export default TagList;
