import {
    TInsertAITool,
    TSelectAIToolBase,
    TSelectIntegration,
    TSelectTag,
} from "@/db/drizzle/schemas";

import { TPricingModel } from "@/types/ai-tools/index.js";
import { convertArrToRecord } from "@/utils/lib";
import { create } from "zustand";
import { handleFileUploads } from "./_helpers/ai-tools.ts";
import { server_createAITools } from "@/services/actions/server/crud/ai-tools/create";
import { server_readAiTools } from "@/services/actions/server/crud/ai-tools/read";

interface InitialState {
    aiToolsRecord: Record<string, TSelectAIToolBase>;
    aiToolsIsLoading: boolean;
    loadAndSetAiTools: () => Promise<void>;
    addNew: (
        data: Omit<TInsertAITool, "logo" | "webImages"> & {
            file?: File;
            files?: File[];
            integrations: TSelectIntegration[];
            tags: TSelectTag[];
            pricingInfo: TPricingModel;
        },
    ) => Promise<{
        success: boolean;
        message: string;
    }>;
}

const useAiToolsStore = create<InitialState>((set) => ({
    aiToolsRecord: {},
    aiToolsIsLoading: true,
    loadAndSetAiTools: async () => {
        set(() => ({ aiToolsIsLoading: true }));
        const { data: aiTools } = await server_readAiTools();
        if (!aiTools) return;

        set(() => ({
            aiToolsRecord: convertArrToRecord(aiTools, "name"),
            aiToolsIsLoading: false,
        }));
    },
    addNew: async (data) => {
        const { logo, webImages } = await handleFileUploads({
            file: data.file,
            files: data.files,
        });

        const { file, files, ...restData } = data;

        const {
            data: aiTool,
            message,
            success,
        } = await server_createAITools({
            ...restData,
            logo,
            webImages,
        });

        if (aiTool && success) {
            set((state) => ({
                ...state,
                aiToolsRecord: convertArrToRecord(
                    [...Object.values(state.aiToolsRecord), aiTool],
                    "name",
                ),
            }));
        }

        return {
            success: true,
            message,
        };
    },
}));

export default useAiToolsStore;
