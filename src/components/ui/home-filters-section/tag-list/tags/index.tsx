import Tag from "./tag";
import { cn } from "@/utils/tailwind/tw-merge";

const Tags = ({ tags }: { tags: string[] }) => {
    return (
        <ul className={cn("flex flex-wrap gap-2 mt-2")}>
            {tags.map((tag) => (
                <li
                    key={tag}
                    className={cn(
                        "text-sm text-app-tertiary/75 border-2 rounded-full border-app-tertiary/65 px-3 py-2 cursor-pointer hover:scale-105 transition-all",
                    )}
                >
                    <Tag tag={tag} />
                </li>
            ))}
        </ul>
    );
};

export default Tags;
