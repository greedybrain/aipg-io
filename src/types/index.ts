import { Provider, SupabaseClient, User } from "@supabase/supabase-js";

import { TSelectAppUser } from "@/db/drizzle/schemas/app-users";

// CUSTOM RESPONSES
export type TAuthActionResponse = {
    success: boolean;
    message: string;
    data:
        | {
              authUser: User;
              appUser: TSelectAppUser;
          }
        | {
              authUser: undefined;
              appUser: undefined;
          }
        | undefined;
};

// AUTH
export type TAuthFlow = "signUp" | "signInWithPassword" | "signInWithOtp";
export type TAuthResetCtx = {
    email: string;
    options?: {
        redirectTo?: string;
        captchaToken?: string;
    };
};
export type TOAuthOption = {
    provider: string;
    providerLower: Provider;
    icon: string;
};

// STORAGE
export type TUploadFileOrFilesParams = {
    bucketName: string;
    isMultiple?: boolean;
    file?: File;
    files?: File[];
};
export type TUploadHelperParams = {
    supabase: SupabaseClient<any, "public", any>;
    bucketName: string;
    file: File;
};

// ENTITIES
export type TEntityTableMapping = {
    AppUser: typeof import("@/db/drizzle/schemas/app-users")["AppUser"];
    AITool: typeof import("@/db/drizzle/schemas/ai-tools")["AITool"];
    AIToolIntegration: typeof import("@/db/drizzle/schemas/ai-tool-integrations")["AIToolIntegration"];
    AIToolTag: typeof import("@/db/drizzle/schemas/ai-tool-tags")["AIToolTag"];
    Integration: typeof import("@/db/drizzle/schemas/integrations")["Integration"];
    Tag: typeof import("@/db/drizzle/schemas/tags")["Tag"];
};
