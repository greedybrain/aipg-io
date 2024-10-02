"use client";

import { useEffect, useState } from "react";

import ToolVideo from "./tool-video";
import { cn } from "@/utils/tailwind/tw-merge";
import { extractVideoId } from "@/utils/video/extract-video-id";
import { extractVideoThumbnail } from "@/utils/video/extract-video-thumbnail";

interface Props {
    urls: string[];
}

export type TVideoData = {
    videoId: string | null;
    thumbnail: string | null;
};

const ToolVideos = ({ urls }: Props) => {
    const [videoIdsAndThumbnails, setVideoIdsAndThumbnails] = useState<
        TVideoData[]
    >([]);

    useEffect(() => {
        const fetchVideoData = async () => {
            const data = await Promise.all(
                urls.map(async (url) => ({
                    videoId: extractVideoId(url),
                    thumbnail: await extractVideoThumbnail(url),
                })),
            );
            setVideoIdsAndThumbnails(data);
        };

        fetchVideoData();
    }, [urls]);

    return (
        <ul className={cn("grid grid-cols-2")}>
            {videoIdsAndThumbnails.map((data) => (
                <ToolVideo key={data.videoId} videoData={data} />
            ))}
        </ul>
    );
};

export default ToolVideos;
