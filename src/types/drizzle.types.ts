import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { Notes, Profiles, Users } from "@/db/drizzle/schemas";

import { PgTableWithColumns } from "drizzle-orm/pg-core";

export type InferUpdateModel<T extends PgTableWithColumns<any>> = Partial<
    InferInsertModel<T>
>;

export type TModels = typeof Notes | typeof Users | typeof Profiles;

export type DrizzleORM = {
    public: {
        Tables: {
            Notes: {
                Row: InferSelectModel<typeof Notes> & {
                    user?: InferSelectModel<typeof Users>;
                }; // Add user relationship
                Insert: InferInsertModel<typeof Notes>;
                Update: InferUpdateModel<typeof Notes>;
            };
            Users: {
                Row: InferSelectModel<typeof Users> & {
                    notes?: InferSelectModel<typeof Notes>[];
                }; // Add notes relationship
                Insert: InferInsertModel<typeof Users>;
                Update: InferUpdateModel<typeof Users>;
            };
            Profiles: {
                Row: InferSelectModel<typeof Profiles> & {
                    user?: InferSelectModel<typeof Users>;
                }; // Add user relationship
                Insert: InferInsertModel<typeof Profiles>;
                Update: InferUpdateModel<typeof Profiles>;
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
        Enums: {
            role: "DEFAULT" | "ADMIN" | "OWNER";
        };
    };
};

type PublicSchema = DrizzleORM[Extract<keyof DrizzleORM, "public">];

export type Tables<
    PublicTableNameOrOptions extends
        | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
        | { schema: keyof DrizzleORM },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof DrizzleORM;
    }
        ? keyof (DrizzleORM[PublicTableNameOrOptions["schema"]]["Tables"] &
              DrizzleORM[PublicTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof DrizzleORM }
    ? (DrizzleORM[PublicTableNameOrOptions["schema"]]["Tables"] &
          DrizzleORM[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
          Row: infer R;
      }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
          PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
          PublicSchema["Views"])[PublicTableNameOrOptions] extends {
          Row: infer R;
      }
        ? R
        : never
    : never;

export type TablesInsert<
    PublicTableNameOrOptions extends
        | keyof PublicSchema["Tables"]
        | { schema: keyof DrizzleORM },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof DrizzleORM;
    }
        ? keyof DrizzleORM[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof DrizzleORM }
    ? DrizzleORM[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Insert: infer I;
      }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
          Insert: infer I;
      }
        ? I
        : never
    : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends
        | keyof PublicSchema["Tables"]
        | { schema: keyof DrizzleORM },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof DrizzleORM;
    }
        ? keyof DrizzleORM[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof DrizzleORM }
    ? DrizzleORM[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Update: infer U;
      }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
          Update: infer U;
      }
        ? U
        : never
    : never;

export type Enums<
    PublicEnumNameOrOptions extends
        | keyof PublicSchema["Enums"]
        | { schema: keyof DrizzleORM },
    EnumName extends PublicEnumNameOrOptions extends {
        schema: keyof DrizzleORM;
    }
        ? keyof DrizzleORM[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof DrizzleORM }
    ? DrizzleORM[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
