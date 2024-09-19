"use client";

import { cn } from "@/utils/tailwind/tw-merge";
import { useAuthFormContext } from "@/contexts/auth-form-context";

const FormHeading = () => {
    const { formCriteria } = useAuthFormContext();

    return (
        <h1 className={cn("font-extrabold md:text-5xl text-center text-3xl")}>
            {formCriteria.formHeading}
        </h1>
    );
};

export default FormHeading;
