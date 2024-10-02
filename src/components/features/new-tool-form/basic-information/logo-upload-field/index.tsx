"use client";

import { BASIC_INFO_LOGO, BASIC_INFO_LOGO_PREVIEW } from "@/constants";

import Group from "@/components/layout/group";
import Image from "next/image";
import { Upload } from "lucide-react";
import { cn } from "@/utils/tailwind/tw-merge";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";

const LogoUploadField = () => {
    const methods = useAiToolFormContext();
    const logoPreview = methods.getValues(BASIC_INFO_LOGO_PREVIEW);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (fileList) {
            const file = Array.from(fileList)[0];
            const { name, type, size } = file;
            methods.setValue(BASIC_INFO_LOGO, {
                name,
                type,
                size,
                logoPreview: URL.createObjectURL(file),
            });
        }

        methods.trigger(BASIC_INFO_LOGO);
    };

    return (
        <div>
            <label htmlFor="companyLogo" className={cn("w-fit")}>
                {!logoPreview ? (
                    <Group
                        className={cn(
                            "border-2 shadow-neobrut2 border-app-tertiary flex items-center gap-x-3 active:shadow-neobrut1 w-fit rounded-lg px-4 py-3 bg-app-primary font-medium",
                        )}
                    >
                        <span>Upload</span>
                        <Upload />
                    </Group>
                ) : (
                    <Image
                        src={logoPreview}
                        alt="company logo preview"
                        width={75}
                        height={75}
                        className={cn("mt-4 cursor-pointer")}
                    />
                )}
            </label>
            <input
                id="companyLogo"
                type="file"
                hidden
                {...methods.register(BASIC_INFO_LOGO, {
                    onChange: handleFileChange,
                })}
            />
            <p className={cn("text-sm text-muted-foreground mt-3")}>
                Upload the logo image for the tool. Preferably a high-quality
                image in PNG or JPEG format.
            </p>
        </div>
    );
};

export default LogoUploadField;
