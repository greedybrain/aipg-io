import Group from "@/components/layout/group";
import { cn } from "@/utils/tailwind/tw-merge";
import useFeatureFieldCrud from "@/hooks/use-feature-field-crud";

interface Props {
    editMode: boolean;
    editFeature: (idx: number, feature: string) => void;
    deleteFeature: (feature: string) => void;
}

const AddedFeatures = ({ editMode, editFeature, deleteFeature }: Props) => {
    const { features } = useFeatureFieldCrud();

    return (
        <Group className={cn("mt-5")}>
            <p className={cn("underline font-bold")}>Added features</p>
            <ul className={cn("")}>
                {features.map((feature, idx) => {
                    return (
                        <li
                            key={feature}
                            className={cn(
                                "py-1 flex items-center justify-between",
                            )}
                        >
                            <p className={cn("")}>
                                {idx + 1}
                                {". "}
                                {feature}
                            </p>
                            {!editMode && (
                                <Group
                                    className={cn("flex items-center gap-x-3")}
                                >
                                    <p
                                        className={cn(
                                            "underline text-sm text-blue-500 cursor-pointer",
                                        )}
                                        onClick={() =>
                                            editFeature(idx, feature)
                                        }
                                    >
                                        Edit
                                    </p>
                                    <p
                                        className={cn(
                                            "underline text-sm text-red-500 cursor-pointer",
                                        )}
                                        onClick={() => deleteFeature(feature)}
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

export default AddedFeatures;
