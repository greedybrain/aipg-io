export type TTier = {
    name: string;
    description: string | null;
    offering: string | null;
    offerings: string[];
    price: {
        monthly: string | null;
        annually: string | null;
    } | null;
};

export type TPricingModel = {
    isFreeToUse: boolean;
    hasFreeTierOrTrial: boolean;
    oneTimePurchase?: string;
    tiers?: TTier[];
    minPrice: number;
    maxPrice: number;
    priceInfoUrl: string;
    promotionDescription?: string;
};

enum UserRole {
    DEFAULT = "DEFAULT",
    ADMIN = "ADMIN",
    OWNER = "OWNER",
}

export type TCreatedBy = {
    userId: string | null;
    email: string | null;
    name: string | null;
    pastHire: boolean;
    role: UserRole;
};
