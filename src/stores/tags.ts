import { TSelectTag } from "@/db/drizzle/schemas";
import { convertArrToRecord } from "@/utils/lib";
import { create } from "zustand";
import { server_readTags } from "@/services/actions/server/crud/tags/read";

interface InitialState {
    tagsRecord: Record<string, TSelectTag>;
    selectedTags: Record<string, TSelectTag>;
    loadAndSetTags: () => Promise<void>;
    addSelection: (tag: TSelectTag) => void;
    removeTag: (id: string) => void;
    resetSelected: (selectedTags?: Record<string, TSelectTag>) => void;
}

const useTagsStore = create<InitialState>((set) => ({
    tagsRecord: {},
    selectedTags: {},
    loadAndSetTags: async () => {
        const { data: tags } = await server_readTags();
        if (!tags) return;

        set(() => ({
            tagsRecord: convertArrToRecord(sortTags(tags), "nameLower"),
        }));
    },
    addSelection: (tag) =>
        set((state) => ({
            selectedTags: convertArrToRecord(
                sortTags([...Object.values(state.selectedTags), tag]),
                "nameLower",
            ),
        })),
    removeTag: (id) =>
        set((state) => ({
            selectedTags: convertArrToRecord(
                [
                    ...Object.values(state.selectedTags).filter(
                        (tag) => tag.id !== id,
                    ),
                ],
                "nameLower",
            ),
        })),
    resetSelected: (selectedTags) =>
        set(() => ({ selectedTags: selectedTags ?? {} })),
}));

const sortTags = (tags: TSelectTag[]) =>
    tags.sort((a, b) => a.name.localeCompare(b.name));

export default useTagsStore;
