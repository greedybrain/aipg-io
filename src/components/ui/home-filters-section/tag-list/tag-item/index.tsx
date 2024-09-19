import TagCategory from "../tag-category";
import Tags from "../tags";

const TagItem = ({ category, tags }: { category: string; tags: string[] }) => {
    return (
        <>
            <TagCategory category={category} />
            <Tags tags={tags} />
        </>
    );
};

export default TagItem;
