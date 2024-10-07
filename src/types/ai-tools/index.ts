import { UserRole } from "../app-users";

export type TTier = {
    name: string;
    description: string;
    offering: string;
    offerings: string[];
    annualPrice: string | null;
    monthlyPrice: string | null;
};

export type TPricingModel = {
    isFreeToUse: boolean;
    hasFreeTierOrTrial: boolean;
    oneTimePurchasePrice?: string | null;
    tiers?: TTier[];
    minPrice: string | null;
    maxPrice: string | null;
    priceInfoURL: string | null;
    promotionDescription: string | null;
};

export type TCreatedBy = {
    userId: string | null;
    email: string | null;
    name: string | null;
    pastHire: boolean;
    role: UserRole;
};
