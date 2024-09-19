import { z } from "zod";

const tierSchema = z.object({
    name: z.string().min(1, "Tier name is required"),
    price: z
        .object({
            monthly: z.string().nullable(),
            annually: z.string().nullable(),
        })
        .nullable(),
    description: z
        .string()
        .max(255, "Description must not exceed 255 characters")
        .nullable(),
    offering: z.string().nullable(),
    offerings: z
        .array(z.string())
        .refine((offerings) => offerings.length > 0, {
            message: "At least one offering is required",
        })
        .refine(
            (offerings) => offerings.every((offering) => offering.length > 0),
            "Each offering must be a non-empty string",
        ),
});

const urlSchema = z.string().url("Invalid URL format").nullable();

const platformsEnum = z.enum(["Web-based", "Desktop", "Mobile"]);
const operatingSystemsEnum = z.enum([
    "Windows",
    "macOS",
    "Linux",
    "iOS",
    "Android",
]);

export const AiToolSchema = z.object({
    // ================ Basic Information ==================
    basicInfo: z.object({
        name: z
            .string()
            .min(1, "Tool name is required")
            .max(100, "Tool name must not exceed 100 characters"),
        developerOrCompanyName: z
            .string()
            .min(1, "Developer or Company name required")
            .max(
                100,
                "Developer or Company name must not exceed 100 characters",
            ),
        officialWebsiteURL: z
            .string()
            .url("Invalid URL format")
            .min(1, "Official website is required"),
        logo: z.object({
            size: z.number().max(2 * 1024 * 1024, "Logo must not exceed 2MB"),
            type: z
                .string()
                .refine(
                    (type) => ["image/jpeg", "image/png"].includes(type),
                    "Only JPEG and PNG formats are supported",
                ),
            name: z
                .string()
                .min(1, "File name is required")
                .max(255, "File name must not exceed 255 characters"),
        }),
        description: z
            .string()
            .min(
                255,
                "Description is required, and must be at least 255 characters",
            )
            .max(1000, "Description must not exceed 1000 characters"),
    }),

    // ================ Platform & Technical Information ==================
    platformAndTechnicalInfo: z.object({
        platforms: z
            .array(platformsEnum)
            .nonempty("At least one platform is required")
            .default(["Web-based"]),
        operatingSystems: z
            .array(operatingSystemsEnum)
            .nonempty("At least one operating system is required")
            .default(["Windows", "macOS", "Linux"]),
        feature: z.string().nullable(),
        features: z
            .array(z.string())
            .refine((features) => features.length > 0, {
                message: "At least one feature is required",
            })
            .refine(
                (features) => features.every((feature) => feature.length > 0),
                "Each feature must be a non-empty string",
            ),
    }),

    // ================ Pricing Information ==================
    pricingInfo: z.object({
        isFreeToUse: z.boolean().default(false),
        hasFreeTierOrTrial: z.boolean().default(false),
        oneTimePurchasePrice: z.string().nullable().default(null),
        promotionDescription: z.string().nullable().default(null),
        tier: tierSchema,
        tiers: z.array(tierSchema),
        priceInfoURL: z.string().url("Invalid URL format").nullable(),
    }),

    // ================ Media & Resources ==================
    mediaAndResources: z.object({
        webImages: z.array(
            z.object({
                size: z
                    .number()
                    .max(3 * 1024 * 1024, "Logo must not exceed 3MB"),
                type: z
                    .string()
                    .refine(
                        (type) => ["image/jpeg", "image/png"].includes(type),
                        "Only JPEG and PNG formats are supported",
                    ),
                name: z
                    .string()
                    .min(1, "File name is required")
                    .max(255, "File name must not exceed 255 characters"),
            }),
        ),
        videoURL: z.string().url("Invalid URL format"),
        videoURLs: z.array(z.string().url("Invalid URL format")).default([]),
    }),

    // ================ App & Extension URLs ==================
    appAndExtURLs: z.object({
        iosAppURL: urlSchema,
        androidAppURL: urlSchema,
        chromeExtensionURL: urlSchema,
        firefoxAddonURL: urlSchema,
        edgeExtensionURL: urlSchema,
        safariExtensionURL: urlSchema,
        linuxPackageURL: urlSchema,
        windowsStoreURL: urlSchema,
        macosAppStoreURL: urlSchema,
        apkDownloadURL: urlSchema,
    }),

    // ================ Affiliate and API Information ==================
    affiliateAndApiInfo: z.object({
        apiDocumentationURL: urlSchema,
        affiliateResourceURL: urlSchema,
        customAffiliateURL: urlSchema,
    }),
});

export const defaultValues: z.infer<typeof AiToolSchema> = {
    // ================ Basic Information ==================
    basicInfo: {
        name: "",
        developerOrCompanyName: "",
        officialWebsiteURL: "",
        logo: {
            size: 0,
            type: "",
            name: "",
        },
        description: "",
    },

    // ================ Platform & Technical Information ==================
    platformAndTechnicalInfo: {
        platforms: ["Web-based"], // Default platform
        operatingSystems: ["Windows", "macOS", "Linux"], // Default operating systems
        feature: "",
        features: [], // Empty array of features
    },

    // ================ Pricing Information ==================
    pricingInfo: {
        isFreeToUse: false, // Default is not free
        hasFreeTierOrTrial: false, // Default no free tier or trial
        oneTimePurchasePrice: null, // Default null for price
        promotionDescription: null, // Default null for promotion description
        tier: {
            name: "",
            price: {
                monthly: "",
                annually: "",
            },
            description: "",
            offering: "",
            offerings: [],
        },
        tiers: [], // Empty array for tiers
        priceInfoURL: null, // Default null for price info URL
    },

    // ================ Media & Resources ==================
    mediaAndResources: {
        webImages: [], // Empty array for web images
        videoURL: "",
        videoURLs: [], // Empty array for video URLs
    },

    // ================ App & Extension URLs ==================
    appAndExtURLs: {
        iosAppURL: null, // Default null
        androidAppURL: null, // Default null
        chromeExtensionURL: null, // Default null
        firefoxAddonURL: null, // Default null
        edgeExtensionURL: null, // Default null
        safariExtensionURL: null, // Default null
        linuxPackageURL: null, // Default null
        windowsStoreURL: null, // Default null
        macosAppStoreURL: null, // Default null
        apkDownloadURL: null, // Default null
    },

    // ================ Affiliate and API Information ==================
    affiliateAndApiInfo: {
        apiDocumentationURL: null, // Default null
        affiliateResourceURL: null, // Default null
        customAffiliateURL: null, // Default null
    },
};
