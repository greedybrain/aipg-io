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
import { PRICING_INFO_IS_FREE } from "@/constants";
import { cn } from "@/utils/tailwind/tw-merge";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";

const IsFreeToUseCheckboxField = () => {
    const methods = useAiToolFormContext();

    return (
        <FormField
            control={methods.control}
            name={PRICING_INFO_IS_FREE}
            render={({ field }) => (
                <FormItem>
                    <Group>
                        <FormLabel htmlFor="isFreeToUse">
                            Is this Tool Free to Use?
                        </FormLabel>
                        <FormDescription>
                            Indicate whether the tool is free to use for
                            customers without any paid plans.
                        </FormDescription>
                    </Group>
                    <Group className={cn("flex items-center gap-x-3")}>
                        <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={(checked) =>
                                    methods.setValue(
                                        PRICING_INFO_IS_FREE,
                                        !!checked,
                                    )
                                }
                            />
                        </FormControl>
                        <FormLabel className={cn("font-normal text-[16px]")}>
                            Is Free to Use
                        </FormLabel>
                    </Group>
                </FormItem>
            )}
        />
    );
};

export default IsFreeToUseCheckboxField;
