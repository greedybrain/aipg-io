"use client";

import {
    AiToolSchema,
    defaultValues as defaultAiToolValues,
} from "@/types/zod/ai-tools";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import DescriptionField from "./description-field";
import DeveloperOrCompanyNameField from "./developer-or-company-name-field";
import FeatureField from "./feature-field";
import { Form } from "@/components/ui/form";
import HasFreeTierOrTrial from "./has-free-tier-or-trial";
import IsFreeToUseCheckboxField from "./is-free-to-use-checkbox-field";
import LogoUploadField from "./logo-upload-field";
import OfficialWebsiteURLField from "./official-website-url-field";
import OneTimePurchasePriceField from "./one-time-purhcase-price-field";
import OperatingSystemsCheckboxField from "./operating-systems-checkbox-field";
import { PRICING_INFO_IS_FREE } from "@/constants";
import PlatformsCheckboxField from "./platforms-checkbox-field";
import PriceInfoURLField from "./price-info-url-field";
import TiersField from "./tier-field";
import ToolNameField from "./tool-name-field";
import VideoURLField from "./video-url-field";
import WebImagesUploadField from "./web-images-upload-field";
import { cn } from "@/utils/tailwind/tw-merge";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const fieldsetStyles =
    "border-2 border-app-tertiary/25 p-5 space-y-10 rounded-lg";

const NewToolForm = () => {
    const methods = useForm<z.infer<typeof AiToolSchema>>({
        resolver: zodResolver(AiToolSchema),
        defaultValues: defaultAiToolValues,
    });

    const isFreeToUse = methods.watch(PRICING_INFO_IS_FREE);

    const onSubmit: SubmitHandler<typeof defaultAiToolValues> = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <Form {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className={cn("max-w-[500px] mx-auto py-20 space-y-10")}
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
                    </fieldset>
                    <fieldset className={cn(fieldsetStyles)}>
                        <legend className={cn("text-2xl font-bold")}>
                            Platform & Technical Information
                        </legend>
                        <PlatformsCheckboxField />
                        <OperatingSystemsCheckboxField />
                        <FeatureField />
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
                                <PriceInfoURLField />
                            </>
                        )}
                    </fieldset>
                    <fieldset className={cn(fieldsetStyles)}>
                        <legend className={cn("text-2xl font-bold")}>
                            Media & Resources
                        </legend>
                        <WebImagesUploadField />
                        <VideoURLField />
                    </fieldset>
                    {/* FIELDS  */}
                    <Button
                        type="submit"
                        className={cn(
                            "w-full h-[60px] text-[16px] relative top-10",
                        )}
                    >
                        Submit for review
                    </Button>
                </form>
            </Form>
        </FormProvider>
    );
};

export default NewToolForm;
