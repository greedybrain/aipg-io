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
import { cn } from "@/utils/tailwind/tw-merge";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";
import { z } from "zod";

const operatingSystems = [
    {
        id: "Windows",
        label: "Windows",
    },
    {
        id: "macOS",
        label: "macOS",
    },
    {
        id: "Linux",
        label: "Linux",
    },
    {
        id: "iOS",
        label: "iOS",
    },
    {
        id: "Android",
        label: "Android",
    },
] as {
    id: z.infer<
        typeof AiToolSchema
    >["platformAndTechnicalInfo"]["operatingSystems"][0];
    label: z.infer<
        typeof AiToolSchema
    >["platformAndTechnicalInfo"]["operatingSystems"][0];
}[];

const OperatingSystemsCheckboxField = () => {
    const methods = useAiToolFormContext();

    return (
        <FormField
            control={methods.control}
            name="platformAndTechnicalInfo.platforms"
            render={() => (
                <FormItem>
                    <Group>
                        <FormLabel htmlFor="platforms">
                            Supported Operating Systems
                        </FormLabel>
                        <FormDescription>
                            Choose the operating systems that are compatible
                            with the tool (e.g., Windows, macOS, Linux, iOS,
                            Android).
                        </FormDescription>
                    </Group>
                    {operatingSystems.map((os) => {
                        return (
                            <FormField
                                key={os.id}
                                control={methods.control}
                                name="platformAndTechnicalInfo.operatingSystems"
                                render={({ field }) => {
                                    return (
                                        <FormItem
                                            key={os.id}
                                            className={cn(
                                                "flex items-center space-x-3 space-y-0",
                                            )}
                                        >
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(
                                                        os.id,
                                                    )}
                                                    onCheckedChange={(
                                                        checked,
                                                    ) => {
                                                        return checked
                                                            ? field.onChange([
                                                                  ...field.value,
                                                                  os.id,
                                                              ])
                                                            : field.onChange(
                                                                  field.value?.filter(
                                                                      (value) =>
                                                                          value !==
                                                                          os.id,
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
                                                {os.label}
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

export default OperatingSystemsCheckboxField;
