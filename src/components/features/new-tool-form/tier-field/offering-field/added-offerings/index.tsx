import Group from "@/components/layout/group";
import { cn } from "@/utils/tailwind/tw-merge";
import useOfferingFieldCrud from "@/hooks/use-offering-field-crud";

interface Props {
    editMode: boolean;
    editOffering: (idx: number, offering: string) => void;
    deleteOffering: (offering: string) => void;
}

const AddedFeatures = ({ editMode, editOffering, deleteOffering }: Props) => {
    const { offerings } = useOfferingFieldCrud();

    return (
        <Group className={cn("mt-5")}>
            <p className={cn("underline font-bold")}>Added offerings</p>
            <ul className={cn("")}>
                {offerings.map((offering, idx) => {
                    return (
                        <li
                            key={offering}
                            className={cn(
                                "py-1 flex items-center justify-between",
                            )}
                        >
                            <p className={cn("")}>
                                {idx + 1}
                                {". "}
                                {offering}
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
                                            editOffering(idx, offering)
                                        }
                                    >
                                        Edit
                                    </p>
                                    <p
                                        className={cn(
                                            "underline text-sm text-red-500 cursor-pointer",
                                        )}
                                        onClick={() => deleteOffering(offering)}
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
