import { useRef, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import Group from "@/components/layout/group";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { cn } from "@/utils/tailwind/tw-merge";
import { notify } from "@/utils/alerts/toast";
import useIntegrationsStore from "@/stores/integrations";
import { useOnClickOutside } from "usehooks-ts";

interface Props {
    handleCloseForm: () => void;
}

const CreateNewIntegration = ({ handleCloseForm }: Props) => {
    const addNew = useIntegrationsStore((state) => state.addNew);
    const [isPending, startTransition] = useTransition();
    const groupRef = useRef<HTMLDivElement>(null);
    const [name, setName] = useState("");
    const [file, setFile] = useState<File | undefined>();
    const [preview, setPreview] = useState<string>();
    useOnClickOutside(groupRef, handleCloseForm);

    const handleSubmit = () => {
        startTransition(async () => {
            if (!name) {
                notify({
                    type: "error",
                    message: "Name is required",
                    id: "name-missing",
                });
                return;
            }

            const { success, message } = await addNew(name, file);

            notify({
                type: success ? "success" : "error",
                message,
                id: success ? "creation-success" : "creation-failed",
            });

            success && handleCloseForm();
        });
    };

    return (
        <div
            className={cn(
                "flex items-center justify-center fixed top-0 left-0 z-50 w-full h-full bg-black/65",
            )}
        >
            <Group
                ref={groupRef}
                className={cn(
                    "bg-white border-2 border-app-tertiary shadow-neobrut3 w-[500px] min-w-[400px] max-w-[500px] rounded-lg px-5 py-10 flex flex-col items-center",
                )}
            >
                <p className={cn("font-bold text-xl")}>
                    Upload Integration Logo
                </p>
                <Group className={cn("space-y-10 w-full")}>
                    <label
                        htmlFor="integrationLogo"
                        className={cn(
                            "mt-7 flex items-center gap-x-3 cursor-pointer mx-auto w-fit",
                        )}
                    >
                        {preview ? (
                            <Image
                                src={preview}
                                alt="integration logo preview"
                                width={75}
                                height={75}
                            />
                        ) : (
                            <Group
                                className={cn(
                                    "border-2 border-app-tertiary w-fit rounded-lg p-3 shadow-neobrut2 flex items-center gap-x-3 cursor-pointer hover:shadow-neobrut3 active:shadow-neobrut2 transition-all",
                                )}
                            >
                                <Upload />
                                Browse files
                            </Group>
                        )}
                    </label>
                    <input
                        type="file"
                        name="integrationLogo"
                        hidden
                        id="integrationLogo"
                        onChange={(event) => {
                            const file = event.currentTarget.files?.[0];

                            if (file) {
                                setFile(file);
                                setPreview(URL.createObjectURL(file));
                            }
                        }}
                    />
                    <Input
                        type="text"
                        placeholder="Enter integration name"
                        onChange={(event) => setName(event.currentTarget.value)}
                        value={name}
                    />
                    <Button
                        type="button"
                        variant={"tertiary"}
                        onClick={handleSubmit}
                        className={cn("w-full h-[60px]")}
                    >
                        {isPending
                            ? "Adding integration..."
                            : "Add integration"}
                    </Button>
                </Group>
            </Group>
        </div>
    );
};

export default CreateNewIntegration;
