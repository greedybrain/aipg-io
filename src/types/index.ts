import { Provider, SupabaseClient, User } from "@supabase/supabase-js";

import { Database } from "@/types/database.types";

// SUPABASE
export type TTables = Database["public"]["Tables"];
export type TTable = keyof TTables;
export type TTableRow<T extends TTable> = TTables[T]["Row"];
export type TTableUpdate<T extends TTable> = TTables[T]["Update"];
export type TTableInsert<T extends TTable> = TTables[T]["Insert"];

// CUSTOM RESPONSES
export type TAuthActionResponse = {
    success: boolean;
    message: string;
    user: User | undefined;
};
export type TEntityActionResponse<TData = undefined> = {
    success: boolean;
    message: string;
    data: TData;
};
export type TSuccessMessageType =
    | "readOne"
    | "readMany"
    | "readAll"
    | "createOne"
    | "createMany"
    | "updateOne"
    | "upsertOne"
    | "upsertMany"
    | "deleteOne"
    | "deleteMany";

export type TSuccessMessageArgs = {
    messageType: TSuccessMessageType;
    relation?: TTable;
    entityName?: string;
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

// CRUD
export type TSelectCriteria = {
    columns: string;
    options?: {
        head?: boolean;
        count?: "exact" | "planned" | "estimated";
    };
};
export type TBaseEntity<T extends TTable> = {
    relation: T;
    entityName?: string;
    entityId?: string;
    selectCriteria?: TSelectCriteria;
};
export type TCreateEntityArgs<T extends TTable> = TBaseEntity<T> & {
    formData: TTableInsert<T> | TTableInsert<T>[];
};
export type TDeleteEntityArgs<T extends TTable> = TBaseEntity<T> & {
    entityIds: string[];
};
export type TMaybeEntity<TEntity> = TEntity | null | undefined;
export type TReadEntityArgs<T extends TTable> = TBaseEntity<T> & {
    entityIds?: string[];
    entityName?: string;
};
export type TUpdateEntityArgs<T extends TTable> = TBaseEntity<T> & {
    formData: TTables[T]["Update"];
};
export type TUpsertEntityArgs<T extends TTable> = TBaseEntity<T> & {
    formData: TTables[T]["Insert"] | TTables[T]["Insert"][];
    onConflictColumns?: string;
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
