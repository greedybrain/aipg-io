import { INTEGRATION_LOGOS_BUCKET } from "@/constants";
import { TSelectIntegration } from "@/db/drizzle/schemas";
import { convertArrToRecord } from "@/utils/lib";
import { create } from "zustand";
import { server_createIntegration } from "@/services/actions/server/crud/integrations/create";
import { server_readIntegrations } from "@/services/actions/server/crud/integrations/read";
import { uploadFileOrFiles } from "@/services/actions/client/file-manager/uploadFileOrFiles";

interface InitialState {
    integrations: Record<string, TSelectIntegration>;
    selectedIntegrations: Record<string, TSelectIntegration>;
    loadAndSetIntegrations: () => Promise<void>;
    addNew: (
        name: string,
        file?: File,
    ) => Promise<{
        success: boolean;
        message: string;
    }>;
    addSelection: (newSelection: TSelectIntegration) => void;
    removeIntegration: (id: string) => void;
}

const useIntegrationsStore = create<InitialState>((set) => ({
    integrations: {},
    selectedIntegrations: {},
    loadAndSetIntegrations: async () => {
        const integrations = await server_readIntegrations();
        if (!integrations) return;

        set(() => ({
            integrations: convertArrToRecord(
                sortIntegrations(integrations),
                "nameLower",
            ),
        }));
    },
    addNew: async (name, file) => {
        const { urls } = await uploadFileOrFiles({
            bucketName: INTEGRATION_LOGOS_BUCKET,
            file,
        });

        let branding: string = "";

        if (urls && urls[0]) {
            branding = urls[0];
        }

        const { data, success, message } = await server_createIntegration({
            name,
            nameLower: name.toLocaleLowerCase(),
            branding,
        });

        if (data && success) {
            set((state) => ({
                ...state,
                integrations: convertArrToRecord(
                    sortIntegrations([
                        ...Object.values(state.integrations),
                        data,
                    ]),
                    "nameLower",
                ),
            }));
        }

        return {
            success,
            message,
        };
    },
    addSelection: (newIntegration) =>
        set((state) => ({
            selectedIntegrations: convertArrToRecord(
                sortIntegrations([
                    ...Object.values(state.selectedIntegrations),
                    newIntegration,
                ]),
                "nameLower",
            ),
        })),
    removeIntegration: (id) =>
        set((state) => ({
            selectedIntegrations: convertArrToRecord(
                [
                    ...Object.values(state.selectedIntegrations).filter(
                        (integration) => integration.id !== id,
                    ),
                ],
                "nameLower",
            ),
        })),
}));

const sortIntegrations = (integrations: TSelectIntegration[]) =>
    integrations.sort((a, b) => a.name.localeCompare(b.name));

// const convertArrToRecord = (integrations: TSelectIntegration[]) =>
//     integrations.reduce((acc: InitialState["integrations"], integration) => {
//         acc[integration.nameLower] = integration;
//         return acc;
//     }, {});

export default useIntegrationsStore;
