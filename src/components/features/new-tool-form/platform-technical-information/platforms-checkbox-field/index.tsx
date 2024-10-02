"use client";

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";

import { AiToolSchema } from "@/types/zod/ai-tools";
import { Checkbox } from "@/components/ui/checkbox";
import Group from "@/components/layout/group";
import { PLATFORM_INFO_PLATFORMS } from "@/constants";
import { cn } from "@/utils/tailwind/tw-merge";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";
import { z } from "zod";

const platforms = [
    {
        id: "Web-based",
        label: "Web-based",
    },
    {
        id: "Desktop",
        label: "Desktop",
    },
    {
        id: "Mobile",
        label: "Mobile",
    },
] as {
    id: z.infer<
        typeof AiToolSchema
    >["platformAndTechnicalInfo"]["platforms"][0];
    label: z.infer<
        typeof AiToolSchema
    >["platformAndTechnicalInfo"]["platforms"][0];
}[];

const PlatformsCheckboxField = () => {
    const methods = useAiToolFormContext();

    return (
        <FormField
            control={methods.control}
            name={PLATFORM_INFO_PLATFORMS}
            render={() => (
                <FormItem>
                    <Group>
                        <FormLabel htmlFor="platforms">
                            Supported Platforms
                        </FormLabel>
                        <FormDescription>
                            Select the platforms the tool is available on (e.g.,
                            Web-based, Desktop, Mobile).
                        </FormDescription>
                    </Group>
                    {platforms.map((platform) => {
                        return (
                            <FormField
                                key={platform.id}
                                control={methods.control}
                                name={PLATFORM_INFO_PLATFORMS}
                                render={({ field }) => {
                                    return (
                                        <FormItem
                                            key={platform.id}
                                            className={cn(
                                                "flex items-center space-x-3 space-y-0",
                                            )}
                                        >
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(
                                                        platform.id,
                                                    )}
                                                    onCheckedChange={(
                                                        checked,
                                                    ) => {
                                                        return checked
                                                            ? field.onChange([
                                                                  ...field.value,
                                                                  platform.id,
                                                              ])
                                                            : field.onChange(
                                                                  field.value?.filter(
                                                                      (value) =>
                                                                          value !==
                                                                          platform.id,
                                                                  ),
                                                              );
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel
                                                className={cn(
                                                    "font-normal text-[16px]",
                                                )}
                                            >
                                                {platform.label}
                                            </FormLabel>
                                        </FormItem>
                                    );
                                }}
                            />
                        );
                    })}
                </FormItem>
            )}
        />
    );
};

export default PlatformsCheckboxField;
