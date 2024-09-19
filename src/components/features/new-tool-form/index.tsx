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
import PlatformsCheckboxField from "./platforms-checkbox-field";
import TiersField from "./tier-field";
import ToolNameField from "./tool-name-field";
import { cn } from "@/utils/tailwind/tw-merge";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const NewToolForm = () => {
    const methods = useForm<z.infer<typeof AiToolSchema>>({
        resolver: zodResolver(AiToolSchema),
        defaultValues: defaultAiToolValues,
    });

    console.log("Errors: ", methods.formState.errors);

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
                    <fieldset
                        className={cn(
                            "border-2 border-app-tertiary/25 p-5 space-y-10",
                        )}
                    >
                        <legend className={cn("text-2xl font-bold")}>
                            Basic Information
                        </legend>
                        <ToolNameField />
                        <DeveloperOrCompanyNameField />
                        <OfficialWebsiteURLField />
                        <LogoUploadField />
                        <DescriptionField />
                    </fieldset>
                    <fieldset
                        className={cn(
                            "border-2 border-app-tertiary/25 p-5 space-y-10",
                        )}
                    >
                        <legend className={cn("text-2xl font-bold")}>
                            Platform & Technical Information
                        </legend>
                        <PlatformsCheckboxField />
                        <OperatingSystemsCheckboxField />
                        <FeatureField />
                    </fieldset>
                    <fieldset
                        className={cn(
                            "border-2 border-app-tertiary/25 p-5 space-y-10",
                        )}
                    >
                        <legend className={cn("text-2xl font-bold")}>
                            Pricing Information
                        </legend>
                        <IsFreeToUseCheckboxField />
                        <HasFreeTierOrTrial />
                        <OneTimePurchasePriceField />
                        <TiersField />
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
