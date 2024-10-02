// ROUTES
export const HOME_ROUTE = "/";
export const SIGNUP_ROUTE = "/auth/signup";
export const LOGIN_ROUTE = "/auth/login";
export const PASSWORD_RESET_ROUTE = "/auth/password-reset";
export const RESET_LINK_CONFIRMATION_ROUTE = "/auth/reset-link-confirmation";
export const UPDATE_PASSWORD_ROUTE = "/auth/update-password";
export const RESET_COMPLETE_ROUTE = "/auth/reset-complete";
export const PRIVACY_ROUTE = "/privacy";
export const USER_FAVORITES_ROUTE = "/user/favorites";
export const TOOL_MANAGER_NEW_TOOL_ROUTE = "/admin/tool-manager/new";

export const AUTH_ROUTES = [
    LOGIN_ROUTE,
    SIGNUP_ROUTE,
    PASSWORD_RESET_ROUTE,
    UPDATE_PASSWORD_ROUTE,
];
export const PROTECTED_ROUTES = [USER_FAVORITES_ROUTE];
export const ADMIN_ROUTES = [TOOL_MANAGER_NEW_TOOL_ROUTE];

// STORAGE BUCKETS
export const AI_TOOL_LOGOS_BUCKET = "aipg-aiplayground-ai-tool-logos";
export const AI_TOOL_WEB_IMAGES_BUCKET = "aipg-aiplayground-ai-tool-web-images";
export const INTEGRATION_LOGOS_BUCKET =
    "aipg-aiplayground-ai-tool-integration-logos";

// PRIVACY POLICY Qs
export const POLICY_QUESTION_ONE = `What types of personal information do you collect from your website visitors?`;
export const POLICY_QUESTION_TWO = `How do you collect this information?`;
export const POLICY_QUESTION_THREE = `How do you use this information?`;
export const POLICY_QUESTION_FOUR = `How do you protect the personal information you collect?`;
export const POLICY_QUESTION_FIVE = `Do you provide any opt-out or opt-in options for visitors who do not wish to have their information collected or shared?`;
export const POLICY_QUESTION_SIX = `Are there any laws or regulations that apply to your website and its users that we should consider in the privacy policy?`;
export const POLICY_QUESTION_SEVEN = `How do you handle children's personal information on your website?`;
export const POLICY_QUESTION_EIGHT = `How often do you update your privacy policy?`;
export const POLICY_ANSWER_ONE = `We collect personal information that the user voluntarily provides to us such as email addresses, etc.`;
export const POLICY_ANSWER_TWO = `We collect information through cookies, forms and other tracking technologies to collect and store the users information.`;
export const POLICY_ANSWER_THREE = `We use this information to send the user marketing and promotional communications, to deliver targeted advertising to you, to protect our Services, to identify usage trends, to determine the effectiveness of our marketing and promotional campaigns, to save or protect an individual&quot;s vital interest and to comply with the applicable laws in the United States of America. We share the collected information Ad networks, affiliate marketing programs, data analytics services, performance monitoring tools, retargeting platforms, sales and marketing tools, social networks, testing tools, and website hosting service providers. We may also need to use the collected personal information in business transfers and with business partners.`;
export const POLICY_ANSWER_FOUR = `We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, the transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.`;
export const POLICY_ANSWER_FIVE = `We do not provide any opt-out options for visitors who do not wish to have their information collected or shared. The user can withdraw his or her consent at any time or choose to use the website without creating an account.`;
export const POLICY_ANSWER_SIX = `Yes the laws of the United States of America, specifically New York apply to our website.`;
export const POLICY_ANSWER_SEVEN = `We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at - aiforyou@aipg.io.`;
export const POLICY_ANSWER_EIGHT = `We will update this notice as necessary to stay compliant with relevant laws.`;

// AI TOOL SCHEMA
// Basic Information
export const BASIC_INFO_NAME = "basicInfo.name";
export const BASIC_INFO_COMPANY_NAME = "basicInfo.developerOrCompanyName";
export const BASIC_INFO_WEBSITE = "basicInfo.officialWebsiteURL";
export const BASIC_INFO_LOGO = "basicInfo.logo";
export const BASIC_INFO_LOGO_SIZE = "basicInfo.logo.size";
export const BASIC_INFO_LOGO_TYPE = "basicInfo.logo.type";
export const BASIC_INFO_LOGO_NAME = "basicInfo.logo.name";
export const BASIC_INFO_LOGO_PREVIEW = "basicInfo.logo.logoPreview";
export const BASIC_INFO_DESCRIPTION = "basicInfo.description";

// Platform & Technical Information
export const PLATFORM_INFO_PLATFORMS = "platformAndTechnicalInfo.platforms";
export const PLATFORM_INFO_OPERATING_SYSTEMS =
    "platformAndTechnicalInfo.operatingSystems";
export const PLATFORM_INFO_FEATURE = "platformAndTechnicalInfo.feature";
export const PLATFORM_INFO_FEATURES = "platformAndTechnicalInfo.features";
export const PLATFORM_INFO_INTEGRATION = "platformAndTechnicalInfo.integration";
export const PLATFORM_INFO_INTEGRATIONS =
    "platformAndTechnicalInfo.integrations";

// Pricing Information
export const PRICING_INFO_IS_FREE = "pricingInfo.isFreeToUse";
export const PRICING_INFO_HAS_FREE_TRIAL = "pricingInfo.hasFreeTierOrTrial";
export const PRICING_INFO_ONE_TIME_PURCHASE =
    "pricingInfo.oneTimePurchasePrice";
export const PRICING_INFO_PROMOTION_DESCRIPTION =
    "pricingInfo.promotionDescription";
export const PRICING_INFO_TIER = "pricingInfo.tier";
export const PRICING_INFO_TIER_NAME = "pricingInfo.tier.name";
export const PRICING_INFO_TIER_PRICE_MONTHLY = "pricingInfo.tier.price.monthly";
export const PRICING_INFO_TIER_PRICE_ANNUALLY =
    "pricingInfo.tier.price.annually";
export const PRICING_INFO_TIER_DESCRIPTION = "pricingInfo.tier.description";
export const PRICING_INFO_TIER_OFFERING = "pricingInfo.tier.offering";
export const PRICING_INFO_TIER_OFFERINGS = "pricingInfo.tier.offerings";
export const PRICING_INFO_TIERS = "pricingInfo.tiers";
export const PRICING_INFO_PRICE_INFO_URL = "pricingInfo.priceInfoURL";

// Media & Resources
export const MEDIA_RESOURCES_WEB_IMAGES = "mediaAndResources.webImages";
export const MEDIA_RESOURCES_VIDEO_URL = "mediaAndResources.videoURL";
export const MEDIA_RESOURCES_VIDEO_URLS = "mediaAndResources.videoURLs";

// App & Extension URLs
export const APP_EXT_URLS_IOS = "appAndExtURLs.iosAppURL";
export const APP_EXT_URLS_ANDROID = "appAndExtURLs.androidAppURL";
export const APP_EXT_URLS_CHROME = "appAndExtURLs.chromeExtensionURL";
export const APP_EXT_URLS_FIREFOX = "appAndExtURLs.firefoxAddonURL";
export const APP_EXT_URLS_EDGE = "appAndExtURLs.edgeExtensionURL";
export const APP_EXT_URLS_SAFARI = "appAndExtURLs.safariExtensionURL";
export const APP_EXT_URLS_LINUX = "appAndExtURLs.linuxPackageURL";
export const APP_EXT_URLS_WINDOWS = "appAndExtURLs.windowsStoreURL";
export const APP_EXT_URLS_MACOS = "appAndExtURLs.macosAppStoreURL";
export const APP_EXT_URLS_APK = "appAndExtURLs.apkDownloadURL";

// Affiliate and API Information
export const AFFILIATE_API_INFO_API_DOC_URL =
    "affiliateAndApiInfo.apiDocumentationURL";
export const AFFILIATE_API_INFO_AFFILIATE_RESOURCE_URL =
    "affiliateAndApiInfo.affiliateResourceURL";
export const AFFILIATE_API_INFO_CUSTOM_AFFILIATE_URL =
    "affiliateAndApiInfo.customAffiliateURL";
