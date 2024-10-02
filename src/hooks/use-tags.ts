import { useEffect, useState } from "react";

import { TSelectTag } from "@/db/drizzle/schemas";
import useTagsStore from "@/stores/tags";

const useTags = () => {
    const [showList, setShowList] = useState<boolean>(false);
    const {
        tagsRecord,
        selectedTags,
        loadAndSetTags,
        addSelection,
        removeTag,
    } = useTagsStore((state) => ({
        tagsRecord: state.tagsRecord,
        selectedTags: state.selectedTags,
        loadAndSetTags: state.loadAndSetTags,
        addSelection: state.addSelection,
        removeTag: state.removeTag,
    }));

    useEffect(() => {
        loadAndSetTags();
    }, [loadAndSetTags]);

    const handleShowList = () => {
        setShowList(true);
    };

    const handleHideList = () => {
        setShowList(false);
    };

    const handleAddOrRemoveTag = (tag: TSelectTag) => {
        const foundIntegration = findTag(tag.id);

        if (foundIntegration) {
            removeTag(tag.id);
        } else {
            addSelection(tag);
        }
    };

    const checkIfTagAdded = (id: string) => {
        const foundTag = findTag(id);

        return !!foundTag;
    };

    const findTag = (id: string) =>
        Object.values(selectedTags).find((selected) => selected.id === id);

    return {
        tagsRecord,
        selectedTags,
        showList,
        handleAddOrRemoveTag,
        checkIfTagAdded,
        handleShowList,
        handleHideList,
    };
};

export default useTags;
