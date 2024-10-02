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
        <Group className={cn("mt-10")}>
            <p className={cn("underline font-bold")}>Added tiers</p>
            <ul className={cn("py-3")}>
                {tiers.map((tier, idx) => {
                    return (
                        <li
                            key={tier.name}
                            className={cn(
                                "flex flex-col border border-app-tertiary p-3 rounded-lg",
                            )}
                        >
                            <Group>
                                <p className={cn("text-xl font-bold")}>
                                    Tier Name:{" "}
                                    <span
                                        className={cn(
                                            "text-[16px] font-normal",
                                        )}
                                    >
                                        {tier.name}
                                    </span>
                                </p>
                                <p className={cn("text-xl font-bold")}>
                                    Tier Description:{" "}
                                    <span
                                        className={cn(
                                            "text-[16px] font-normal",
                                        )}
                                    >
                                        {tier.description}
                                    </span>
                                </p>
                                {tier.price?.monthly && (
                                    <p className={cn("text-xl font-bold")}>
                                        Monthly Price:{" "}
                                        <span
                                            className={cn(
                                                "text-[16px] font-normal",
                                            )}
                                        >
                                            ${tier.price.monthly}
                                        </span>
                                    </p>
                                )}
                                {tier.price?.annually && (
                                    <p className={cn("text-xl font-bold")}>
                                        Annual Price:{" "}
                                        <span
                                            className={cn(
                                                "text-[16px] font-normal",
                                            )}
                                        >
                                            ${tier.price.annually}
                                        </span>
                                    </p>
                                )}
                                <Group
                                    className={cn(
                                        "mt-3 border border-app-tertiary/50 p-2 rounded-lg",
                                    )}
                                >
                                    <p
                                        className={cn(
                                            "text-xl font-bold underline",
                                        )}
                                    >
                                        Tier Offerings
                                    </p>
                                    <ul className={cn("py-2")}>
                                        {tier.offerings.map((offering, idx) => {
                                            return (
                                                <li key={offering}>
                                                    <p>
                                                        {idx + 1}. {offering}
                                                    </p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Group>
                            </Group>
                            {!editMode && (
                                <Group
                                    className={cn(
                                        "flex items-center gap-x-3 self-end mt-3",
                                    )}
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
                                        onClick={() => {
                                            if (tier.name) {
                                                deleteTier(tier.name);
                                            }
                                        }}
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
