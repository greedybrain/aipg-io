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
import { PRICING_INFO_HAS_FREE_TRIAL } from "@/constants";
import { cn } from "@/utils/tailwind/tw-merge";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";

const HasFreeTierOrTrial = () => {
    const methods = useAiToolFormContext();

    return (
        <FormField
            control={methods.control}
            name={PRICING_INFO_HAS_FREE_TRIAL}
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
                                        PRICING_INFO_HAS_FREE_TRIAL,
                                        !!checked,
                                    )
                                }
                            />
                        </FormControl>
                        <FormLabel className={cn("font-normal text-[16px]")}>
                            Has Free Tier or Trial
                        </FormLabel>
                    </Group>
                </FormItem>
            )}
        />
    );
};

export default HasFreeTierOrTrial;
