"use client";

import ToolVideoFromForm from "./tool-video-from-form";
import { cn } from "@/utils/tailwind/tw-merge";
import { useVideoURLFieldContext } from "@/contexts/video-url-field-context";

const ToolVideosFromForm = () => {
    const { videoDataArr } = useVideoURLFieldContext();

    return (
        <ul className={cn("mt-5 grid grid-cols-2 w-full gap-3")}>
            {videoDataArr.map((data) => (
                <ToolVideoFromForm key={data.videoId} videoData={data} />
            ))}
        </ul>
    );
};

export default ToolVideosFromForm;
