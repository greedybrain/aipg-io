"use client";

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import Group from "@/components/layout/group";
import { cn } from "@/utils/tailwind/tw-merge";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";

const HasFreeTierOrTrial = () => {
    const methods = useAiToolFormContext();

    console.log(methods.getValues("pricingInfo.hasFreeTierOrTrial"));

    return (
        <FormField
            control={methods.control}
            name="pricingInfo.hasFreeTierOrTrial"
            render={({ field }) => (
                <FormItem>
                    <Group>
                        <FormLabel htmlFor="hasFreeTierOrTrial">
                            Free Tier or Trial Available?
                        </FormLabel>
                        <FormDescription>
                            Select whether the tool offers a free tier or trial
                            for users before committing to paid plans.
                        </FormDescription>
                    </Group>
                    <Group className={cn("flex items-center gap-x-3")}>
                        <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={(checked) =>
                                    methods.setValue(
                                        "pricingInfo.hasFreeTierOrTrial",
                                        !!checked,
                                    )
                                }
                            />
                        </FormControl>
                        <FormLabel className={cn("font-normal text-[16px]")}>
                            Enter one-time purchase price
                        </FormLabel>
                    </Group>
                </FormItem>
            )}
        />
    );
};

export default HasFreeTierOrTrial;
