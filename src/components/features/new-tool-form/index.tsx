"use client";

import {
    AiToolSchema,
    defaultValues as defaultAiToolValues,
} from "@/types/zod/ai-tools";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useTransition } from "react";

import APKDownloadURLField from "./app-extension-urls/apk-download-url-field";
import AffiliateResourceURLField from "./affiliate-api-information/affiliate-resource-url-field";
import AndroidAppURLField from "./app-extension-urls/android-app-url-field";
import ApiResourceURLField from "./affiliate-api-information/api-resource-url-field";
import { Button } from "@/components/ui/button";
import ChromeExtensionURLField from "./app-extension-urls/chrome-ext-url-field";
import CustomAffiliateURLField from "./affiliate-api-information/custom-affiliate-url-field";
import DescriptionField from "./basic-information/description-field";
import DeveloperOrCompanyNameField from "./basic-information/developer-or-company-name-field";
import EdgeExtensionURLField from "./app-extension-urls/edge-extension-url-field";
import FeatureField from "./platform-technical-information/feature-field";
import FirefoxAddOnField from "./app-extension-urls/firefox-add-on-url-field";
import { Form } from "@/components/ui/form";
import HasFreeTierOrTrial from "./pricing-information/has-free-tier-or-trial";
import IOSAppURLField from "./app-extension-urls/ios-app-url-field";
import IntegrationsField from "./platform-technical-information/integrations-field";
import IsFreeToUseCheckboxField from "./pricing-information/is-free-to-use-checkbox-field";
import LinuxPackageURLField from "./app-extension-urls/linux-package-url-field";
import LogoUploadField from "./basic-information/logo-upload-field";
import MacOSAppStoreURLField from "./app-extension-urls/macos-app-store-url-field";
import MaxPriceField from "./pricing-information/max-price-field";
import MinPriceField from "./pricing-information/min-price-field";
import OfficialWebsiteURLField from "./basic-information/official-website-url-field";
import OneTimePurchasePriceField from "./pricing-information/one-time-purhcase-price-field";
import OperatingSystemsCheckboxField from "./platform-technical-information/operating-systems-checkbox-field";
import { PRICING_INFO_IS_FREE } from "@/constants";
import PlatformsCheckboxField from "./platform-technical-information/platforms-checkbox-field";
import PriceInfoURLField from "./pricing-information/price-info-url-field";
import SafariExtensionURLField from "./app-extension-urls/safari-extension-url-field";
import TagsField from "./basic-information/tags-field";
import TiersField from "./pricing-information/tier-field";
import ToolNameField from "./basic-information/tool-name-field";
import VideoURLField from "./media-resources/video-url-field";
import VideoURLFieldContextProvider from "@/contexts/video-url-field-context";
import WebImagesUploadField from "./media-resources/web-images-upload-field";
import WindowsStoreURLField from "./app-extension-urls/window-store-url-field";
import { cn } from "@/utils/tailwind/tw-merge";
import { notify } from "@/utils/alerts/toast";
import useAiToolFormDraft from "@/hooks/use-ai-tool-form-draft";
import useAiToolsStore from "@/stores/ai-tools";
import useIntegrationsStore from "@/stores/integrations";
import useTagsStore from "@/stores/tags";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const fieldsetStyles =
    "border-2 border-app-tertiary/25 p-5 space-y-10 rounded-lg";

const NewToolForm = () => {
    const [isPending, startTransition] = useTransition();
    const { selectedTags, resetSelectedTags } = useTagsStore((state) => ({
        selectedTags: state.selectedTags,
        resetSelectedTags: state.resetSelected,
    }));
    const { selectedIntegrations, resetSelectedIntegrations } =
        useIntegrationsStore((state) => ({
            selectedIntegrations: state.selectedIntegrations,
            resetSelectedIntegrations: state.resetSelected,
        }));
    const { addNew } = useAiToolsStore((state) => ({
        addNew: state.addNew,
    }));
    const methods = useForm<z.infer<typeof AiToolSchema>>({
        resolver: zodResolver(AiToolSchema),
        defaultValues: defaultAiToolValues,
    });

    useAiToolFormDraft({
        methods,
        selectedIntegrations,
        selectedTags,
        resetSelectedIntegrations,
        resetSelectedTags,
    });

    useEffect(() => {
        console.log("Errors: ", methods.formState.errors);
    }, [methods.formState.errors]);

    const isFreeToUse = methods.watch(PRICING_INFO_IS_FREE);

    const onSubmit: SubmitHandler<typeof defaultAiToolValues> = (data) => {
        startTransition(async () => {
            const {
                affiliateAndApiInfo,
                appAndExtURLs,
                basicInfo,
                mediaAndResources,
                platformAndTechnicalInfo,
                pricingInfo,
            } = data;

            const { message, success } = await addNew({
                affiliateResourceURL: affiliateAndApiInfo.affiliateResourceURL,
                androidAppURL: appAndExtURLs.androidAppURL,
                apiDocumentationURL: affiliateAndApiInfo.affiliateResourceURL,
                apkDownloadURL: appAndExtURLs.apkDownloadURL,
                chromeExtensionURL: appAndExtURLs.chromeExtensionURL,
                customAffiliateURL: affiliateAndApiInfo.customAffiliateURL,
                description: basicInfo.description,
                developerOrCompanyName: basicInfo.developerOrCompanyName,
                edgeExtensionURL: appAndExtURLs.edgeExtensionURL,
                features: platformAndTechnicalInfo.features,
                file: basicInfo.logo,
                files: mediaAndResources.webImages,
                firefoxAddonURL: appAndExtURLs.firefoxAddonURL,
                inReview: true,
                integrations: Object.values(selectedIntegrations),
                iosAppURL: appAndExtURLs.iosAppURL,
                linuxPackageURL: appAndExtURLs.linuxPackageURL,
                macosAppStoreURL: appAndExtURLs.macosAppStoreURL,
                name: basicInfo.name,
                officialWebsiteURL: basicInfo.officialWebsiteURL,
                operatingSystems: platformAndTechnicalInfo.operatingSystems,
                platforms: platformAndTechnicalInfo.platforms,
                safariExtensionURL: appAndExtURLs.safariExtensionURL,
                pricingInfo,
                tags: Object.values(selectedTags),
                videoURLs: mediaAndResources.videoURLs,
                windowsStoreURL: appAndExtURLs.windowsStoreURL,
            });

            notify({
                type: success ? "success" : "error",
                message,
                id: success ? "create-tool-success" : "create-tool-fail",
            });

            if (success) {
                methods.reset();
                resetSelectedTags();
                resetSelectedIntegrations();
            }
        });
    };

    return (
        <FormProvider {...methods}>
            <Form {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className={cn(
                        "max-w-[500px] mx-auto py-20 space-y-10 hidden lg:block",
                    )}
                >
                    {/* FIELDS  */}
                    <fieldset className={cn(fieldsetStyles)}>
                        <legend className={cn("text-2xl font-bold")}>
                            Basic Information
                        </legend>
                        <ToolNameField />
                        <DeveloperOrCompanyNameField />
                        <OfficialWebsiteURLField />
                        <LogoUploadField />
                        <DescriptionField />
                        <TagsField />
                    </fieldset>
                    <fieldset className={cn(fieldsetStyles)}>
                        <legend className={cn("text-2xl font-bold")}>
                            Platform & Technical Information
                        </legend>
                        <PlatformsCheckboxField />
                        <OperatingSystemsCheckboxField />
                        <FeatureField />
                        <IntegrationsField />
                    </fieldset>
                    <fieldset className={cn(fieldsetStyles)}>
                        <legend className={cn("text-2xl font-bold")}>
                            Pricing Information
                        </legend>
                        <IsFreeToUseCheckboxField />
                        {!isFreeToUse && (
                            <>
                                <HasFreeTierOrTrial />
                                <OneTimePurchasePriceField />
                                <TiersField />
                                <MaxPriceField />
                                <MinPriceField />
                                <PriceInfoURLField />
                            </>
                        )}
                    </fieldset>
                    <fieldset className={cn(fieldsetStyles)}>
                        <legend className={cn("text-2xl font-bold")}>
                            Media & Resources
                        </legend>
                        <WebImagesUploadField />
                        <VideoURLFieldContextProvider>
                            <VideoURLField />
                        </VideoURLFieldContextProvider>
                    </fieldset>
                    <fieldset className={cn(fieldsetStyles)}>
                        <legend className={cn("text-2xl font-bold")}>
                            App & Extension URLs
                        </legend>
                        <IOSAppURLField />
                        <AndroidAppURLField />
                        <ChromeExtensionURLField />
                        <FirefoxAddOnField />
                        <EdgeExtensionURLField />
                        <SafariExtensionURLField />
                        <LinuxPackageURLField />
                        <WindowsStoreURLField />
                        <MacOSAppStoreURLField />
                        <APKDownloadURLField />
                    </fieldset>
                    <fieldset className={cn(fieldsetStyles)}>
                        <legend className={cn("text-2xl font-bold")}>
                            Affiliate and API Information
                        </legend>
                        <ApiResourceURLField />
                        <AffiliateResourceURLField />
                        <CustomAffiliateURLField />
                    </fieldset>
                    {/* FIELDS  */}
                    <Button
                        type="submit"
                        className={cn(
                            "w-full h-[60px] text-[16px] relative top-10",
                        )}
                    >
                        {isPending ? "Submitting..." : "Submit for review"}
                    </Button>
                </form>
            </Form>
        </FormProvider>
    );
};

export default NewToolForm;
