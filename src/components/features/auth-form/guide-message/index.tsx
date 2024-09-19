"use client";

import { cn } from "@/utils/tailwind/tw-merge";
import { useAuthFormContext } from "@/contexts/auth-form-context";

const GuideMessage = () => {
    const { formCriteria } = useAuthFormContext();

    return (
        <p className={cn("mt-2 md:text-lg text-center")}>
            {formCriteria.formGuideMessage}
        </p>
    );
};

export default GuideMessage;
