export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      aiToolIntegrations: {
        Row: {
          aiToolId: string
          createdAt: string
          id: string
          integrationId: string
          updatedAt: string
        }
        Insert: {
          aiToolId: string
          createdAt?: string
          id: string
          integrationId: string
          updatedAt?: string
        }
        Update: {
          aiToolId?: string
          createdAt?: string
          id?: string
          integrationId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "aiToolIntegrations_aiToolId_aiTools_id_fk"
            columns: ["aiToolId"]
            isOneToOne: false
            referencedRelation: "aiTools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aiToolIntegrations_integrationId_integrations_id_fk"
            columns: ["integrationId"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      aiTools: {
        Row: {
          affiliateOrPartnershipResource: string | null
          androidAppURL: string | null
          apiResource: string | null
          chromeExtensionURL: string | null
          createdAt: string | null
          createdBy: string | null
          customAffiliateLink: string | null
          deleted: boolean | null
          description: string
          desktopAppURL: string | null
          developerOrCompanyName: string
          features: string[]
          firefoxAddonURL: string | null
          id: string
          inReview: boolean | null
          iosAppURL: string | null
          isFeatured: boolean | null
          linkToPricingInfo: string | null
          logo: string
          name: string
          officialWebsite: string
          operatingSystems: Database["public"]["Enums"]["operatingsystemsenum"][]
          platforms: Database["public"]["Enums"]["platformsenum"][]
          pricingModel: Json
          uniqueSellingProposition: string | null
          updatedAt: string | null
          updatedBy: string[]
          videoUrls: string[]
          webImages: string[]
        }
        Insert: {
          affiliateOrPartnershipResource?: string | null
          androidAppURL?: string | null
          apiResource?: string | null
          chromeExtensionURL?: string | null
          createdAt?: string | null
          createdBy?: string | null
          customAffiliateLink?: string | null
          deleted?: boolean | null
          description: string
          desktopAppURL?: string | null
          developerOrCompanyName: string
          features?: string[]
          firefoxAddonURL?: string | null
          id: string
          inReview?: boolean | null
          iosAppURL?: string | null
          isFeatured?: boolean | null
          linkToPricingInfo?: string | null
          logo: string
          name: string
          officialWebsite: string
          operatingSystems?: Database["public"]["Enums"]["operatingsystemsenum"][]
          platforms?: Database["public"]["Enums"]["platformsenum"][]
          pricingModel?: Json
          uniqueSellingProposition?: string | null
          updatedAt?: string | null
          updatedBy?: string[]
          videoUrls?: string[]
          webImages?: string[]
        }
        Update: {
          affiliateOrPartnershipResource?: string | null
          androidAppURL?: string | null
          apiResource?: string | null
          chromeExtensionURL?: string | null
          createdAt?: string | null
          createdBy?: string | null
          customAffiliateLink?: string | null
          deleted?: boolean | null
          description?: string
          desktopAppURL?: string | null
          developerOrCompanyName?: string
          features?: string[]
          firefoxAddonURL?: string | null
          id?: string
          inReview?: boolean | null
          iosAppURL?: string | null
          isFeatured?: boolean | null
          linkToPricingInfo?: string | null
          logo?: string
          name?: string
          officialWebsite?: string
          operatingSystems?: Database["public"]["Enums"]["operatingsystemsenum"][]
          platforms?: Database["public"]["Enums"]["platformsenum"][]
          pricingModel?: Json
          uniqueSellingProposition?: string | null
          updatedAt?: string | null
          updatedBy?: string[]
          videoUrls?: string[]
          webImages?: string[]
        }
        Relationships: []
      }
      aiToolTags: {
        Row: {
          aiToolId: string
          createdAt: string
          id: string
          tagId: string
          updatedAt: string
        }
        Insert: {
          aiToolId: string
          createdAt?: string
          id: string
          tagId: string
          updatedAt?: string
        }
        Update: {
          aiToolId?: string
          createdAt?: string
          id?: string
          tagId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "aiToolTags_aiToolId_aiTools_id_fk"
            columns: ["aiToolId"]
            isOneToOne: false
            referencedRelation: "aiTools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aiToolTags_tagId_tags_id_fk"
            columns: ["tagId"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      appUsers: {
        Row: {
          avatarUrl: string | null
          createdAt: string | null
          email: string
          id: string
          name: string
          pastHire: boolean
          role: Database["public"]["Enums"]["role"] | null
          updatedAt: string | null
          userId: string
        }
        Insert: {
          avatarUrl?: string | null
          createdAt?: string | null
          email: string
          id?: string
          name: string
          pastHire?: boolean
          role?: Database["public"]["Enums"]["role"] | null
          updatedAt?: string | null
          userId: string
        }
        Update: {
          avatarUrl?: string | null
          createdAt?: string | null
          email?: string
          id?: string
          name?: string
          pastHire?: boolean
          role?: Database["public"]["Enums"]["role"] | null
          updatedAt?: string | null
          userId?: string
        }
        Relationships: []
      }
      integrations: {
        Row: {
          branding: string | null
          createdAt: string
          id: string
          name: string
          nameLower: string
          updatedAt: string
        }
        Insert: {
          branding?: string | null
          createdAt?: string
          id: string
          name: string
          nameLower: string
          updatedAt?: string
        }
        Update: {
          branding?: string | null
          createdAt?: string
          id?: string
          name?: string
          nameLower?: string
          updatedAt?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          category: string
          categoryLower: string
          createdAt: string
          id: string
          name: string
          nameLower: string
          updatedAt: string
        }
        Insert: {
          category: string
          categoryLower: string
          createdAt?: string
          id: string
          name: string
          nameLower: string
          updatedAt?: string
        }
        Update: {
          category?: string
          categoryLower?: string
          createdAt?: string
          id?: string
          name?: string
          nameLower?: string
          updatedAt?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      operatingSystems: "Windows" | "macOS" | "Linux" | "iOS" | "Android"
      operatingsystemsenum: "Windows" | "macOS" | "Linux" | "iOS" | "Android"
      operatingSystemsenum: "Windows" | "macOS" | "Linux" | "iOS" | "Android"
      operatingSystemsEnum: "Windows" | "macOS" | "Linux" | "iOS" | "Android"
      platforms: "Web-based" | "Desktop" | "Mobile"
      platformsenum: "Web-based" | "Desktop" | "Mobile"
      platformsEnum: "Web-based" | "Desktop" | "Mobile"
      role: "DEFAULT" | "ADMIN" | "OWNER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
