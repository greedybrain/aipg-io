import {
    AiToolSchema,
    defaultValues as defaultAIToolValues,
} from "@/types/zod/ai-tools";
import { ControllerRenderProps, FieldPath } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { HTMLInputTypeAttribute } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";
import { z } from "zod";

type FormValues = z.infer<typeof AiToolSchema>;

interface Props<TFieldName extends FieldPath<FormValues>> {
    name: TFieldName;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    labelContent: string;
    formDescription: string;
    elementType?: "textarea" | "integration-select";
}

const NewToolFormField = <TFieldName extends FieldPath<FormValues>>({
    name,
    placeholder,
    type = "text",
    labelContent,
    formDescription,
    elementType,
}: Props<TFieldName>) => {
    const methods = useAiToolFormContext();

    const renderFormItem = (
        field: ControllerRenderProps<typeof defaultAIToolValues, TFieldName>,
    ) => {
        switch (elementType) {
            case "textarea":
                return (
                    <FormControl>
                        <Textarea
                            id={name}
                            placeholder={placeholder}
                            isError={
                                !!methods.formState.errors[
                                    name as keyof typeof methods.formState.errors
                                ]
                            }
                            {...field}
                            value={
                                typeof field.value === "string" ||
                                typeof field.value === "number"
                                    ? field.value
                                    : ""
                            }
                        />
                    </FormControl>
                );

            default:
                return (
                    <FormControl>
                        <Input
                            id={name}
                            placeholder={placeholder}
                            type={type}
                            isError={
                                !!methods.formState.errors[
                                    name as keyof typeof methods.formState.errors
                                ]
                            }
                            {...field}
                            value={
                                typeof field.value === "string" ||
                                typeof field.value === "number"
                                    ? field.value
                                    : ""
                            }
                        />
                    </FormControl>
                );
        }
    };

    return (
        <FormField
            control={methods.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel htmlFor={name}>{labelContent}</FormLabel>
                    {renderFormItem(field)}
                    <FormDescription>{formDescription}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default NewToolFormField;
