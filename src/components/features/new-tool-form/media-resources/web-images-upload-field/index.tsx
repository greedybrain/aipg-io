"use client";

import Image from "next/image";
import { MEDIA_RESOURCES_WEB_IMAGES } from "@/constants";
import { Upload } from "lucide-react";
import { cn } from "@/utils/tailwind/tw-merge";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";
import { useState } from "react";

const WebImagesUploadField = () => {
    const [webImagesPreview, setWebImagesPreview] = useState<string[]>([]);
    const methods = useAiToolFormContext();
    const webImages = methods.getValues(MEDIA_RESOURCES_WEB_IMAGES);
    const webImagesError =
        methods.formState.errors.mediaAndResources?.webImages?.[0];

    const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (fileList) {
            const files = Array.from(fileList);
            methods.setValue(MEDIA_RESOURCES_WEB_IMAGES, files);
            setWebImagesPreview(files.map((file) => URL.createObjectURL(file)));
        }

        methods.trigger(MEDIA_RESOURCES_WEB_IMAGES);
    };

    return (
        <div>
            <label htmlFor="webImages" className={cn("w-fit")}>
                {!webImages.length ? (
                    <div
                        className={cn(
                            "border-2 shadow-neobrut2 border-app-tertiary flex items-center gap-x-3 active:shadow-neobrut1 w-fit rounded-lg px-4 py-3 bg-app-primary font-medium",
                        )}
                    >
                        <span>Upload images</span>
                        <Upload />
                    </div>
                ) : (
                    <ul className={cn("grid grid-cols-2 gap-3")}>
                        {webImages.map((image, idx) => (
                            <li
                                key={`${idx}_${image.name}`}
                                className={cn("relative w-full h-[150px]")}
                            >
                                <Image
                                    src={webImagesPreview[idx] ?? ""}
                                    alt="company logo preview"
                                    fill
                                    className={cn(
                                        "cursor-pointer border-2 border-app-tertiary rounded-lg shadow-neobrut2 hover:scale-[2.5] hover:z-50 z-10 transition-all relative",
                                    )}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </label>
            <input
                id="webImages"
                type="file"
                multiple
                hidden
                {...methods.register(MEDIA_RESOURCES_WEB_IMAGES, {
                    onChange: handleFilesChange,
                })}
            />
            <p className={cn("text-sm text-muted-foreground mt-8")}>
                Upload images related to the tool for use on the website. This
                could include screenshots or promotional images.
            </p>
            {webImagesError && (
                <p className={cn("text-red-500 mt-2 font-medium")}>
                    {webImagesError.message}
                </p>
            )}
        </div>
    );
};

export default WebImagesUploadField;

// const WebImagesUploadField = () => {
//     return (
//         <NewToolFormField
//             name={MEDIA_RESOURCES_WEB_IMAGES}
//             type="file"
//             placeholder="Upload web images (JPEG/PNG, max 3MB)"
//             labelContent="Web Images"
//             formDescription="Upload images related to the tool for use on the website. This could include screenshots or promotional images."
//         />
//     );
// };

// export default WebImagesUploadField;
