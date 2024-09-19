import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { AiToolSchema } from "@/types/zod/ai-tools";
import { FieldPath } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";
import { Input } from "@/components/ui/input";
import { MEDIA_RESOURCES_WEB_IMAGES } from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";
import { z } from "zod";

type FormValues = z.infer<typeof AiToolSchema>;

interface Props<TFieldName extends FieldPath<FormValues>> {
    name: TFieldName;
    placeholder: string;
    type?: HTMLInputTypeAttribute;
    labelContent: string;
    formDescription: string;
    elementType?: "textarea" | "select";
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

    return (
        <FormField
            control={methods.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel htmlFor={name}>{labelContent}</FormLabel>
                    <FormControl>
                        {elementType === "textarea" ? (
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
                        ) : (
                            <Input
                                id={name}
                                placeholder={placeholder}
                                type={type}
                                multiple={
                                    type === "file" &&
                                    name === MEDIA_RESOURCES_WEB_IMAGES
                                }
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
                        )}
                    </FormControl>
                    <FormDescription>{formDescription}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default NewToolFormField;
