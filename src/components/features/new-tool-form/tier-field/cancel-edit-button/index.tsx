"use client";

import { Button } from "@/components/ui/button";
import { SetStateAction } from "react";
import { defaultValues as defaultAiToolValues } from "@/types/zod/ai-tools";
import useTierFieldCrud from "@/hooks/use-tier-field-crud";
import { PRICING_INFO_TIER } from "@/constants";

interface Props {
    editMode: boolean;
    setEditMode: React.Dispatch<SetStateAction<boolean>>;
}

const CancelEditButton = ({ editMode, setEditMode }: Props) => {
    const { methods } = useTierFieldCrud();

    if (!editMode) return null;

    return (
        <Button
            type="button"
            variant={"outline"}
            onClick={() => {
                setEditMode(false);
                methods.resetField(PRICING_INFO_TIER, {
                    defaultValue: defaultAiToolValues.pricingInfo.tier,
                });
            }}
        >
            Cancel
        </Button>
    );
};

export default CancelEditButton;
