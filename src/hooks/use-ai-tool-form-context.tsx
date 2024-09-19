import { UseFormReturn, useFormContext } from "react-hook-form";

import { AiToolSchema } from "@/types/zod/ai-tools";
import { z } from "zod";

export const useAiToolFormContext = (): UseFormReturn<
    z.infer<typeof AiToolSchema>
> => {
    return useFormContext<z.infer<typeof AiToolSchema>>();
};
