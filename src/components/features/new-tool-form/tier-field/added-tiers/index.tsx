import Group from "@/components/layout/group";
import { TTier } from "@/types/ai-tools";
import { cn } from "@/utils/tailwind/tw-merge";
import useTierFieldCrud from "@/hooks/use-tier-field-crud";

interface Props {
    editMode: boolean;
    editTier: (idx: number, tier: TTier) => void;
    deleteTier: (tierName: string) => void;
}

const AddedTiers = ({ editMode, editTier, deleteTier }: Props) => {
    const { tiers } = useTierFieldCrud();

    return (
        <Group className={cn("mt-5")}>
            <p className={cn("underline font-bold")}>Added tiers</p>
            <ul className={cn("")}>
                {tiers.map((tier, idx) => {
                    return (
                        <li
                            key={tier.name}
                            className={cn(
                                "py-1 flex items-center justify-between",
                            )}
                        >
                            <p className={cn("")}>
                                {idx + 1}
                                {". "}
                                {tier.name}
                            </p>
                            {!editMode && (
                                <Group
                                    className={cn("flex items-center gap-x-3")}
                                >
                                    <p
                                        className={cn(
                                            "underline text-sm text-blue-500 cursor-pointer",
                                        )}
                                        onClick={() => editTier(idx, tier)}
                                    >
                                        Edit
                                    </p>
                                    <p
                                        className={cn(
                                            "underline text-sm text-red-500 cursor-pointer",
                                        )}
                                        onClick={() => deleteTier(tier.name)}
                                    >
                                        Delete
                                    </p>
                                </Group>
                            )}
                        </li>
                    );
                })}
            </ul>
        </Group>
    );
};

export default AddedTiers;
