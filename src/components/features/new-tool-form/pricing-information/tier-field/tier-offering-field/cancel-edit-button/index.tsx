"use client";

import { Button } from "@/components/ui/button";
import { PRICING_INFO_TIER_OFFERING } from "@/constants";
import { SetStateAction } from "react";
import useFeatureFieldCrud from "@/hooks/use-feature-field-crud";

interface Props {
    editMode: boolean;
    setEditMode: React.Dispatch<SetStateAction<boolean>>;
}

const CancelEditButton = ({ editMode, setEditMode }: Props) => {
    const { methods } = useFeatureFieldCrud();

    if (!editMode) return null;

    return (
        <Button
            type="button"
            variant={"outline"}
            onClick={() => {
                setEditMode(false);
                methods.resetField(PRICING_INFO_TIER_OFFERING);
            }}
        >
            Cancel
        </Button>
    );
};

export default CancelEditButton;
