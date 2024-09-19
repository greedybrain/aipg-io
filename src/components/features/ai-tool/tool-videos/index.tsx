"use client";

import { HTMLAttributes, useEffect, useState } from "react";

import { cn } from "@/utils/tailwind/tw-merge";
import { extractVideoId } from "@/utils/video/extract-video-id";
import { extractVideoThumbnail } from "@/utils/video/extract-video-thumbnail";

interface Props extends HTMLAttributes<HTMLUListElement> {
    urls: string[];
    listItemProps: HTMLAttributes<HTMLLIElement>;
}

type TVideoIdsAndThumbnails = {
    videoId: string | null;
    thumbnail: string | null;
}[];

const ToolVideos = ({ urls, listItemProps, ...rest }: Props) => {
    const [videoIdsAndThumbnails, setVideoIdsAndThumbnails] =
        useState<TVideoIdsAndThumbnails>([]);

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
        <ul className={cn(rest.className)} {...rest}>
            {videoIdsAndThumbnails.map((data) => {
                return (
                    <li key={data.videoId} {...listItemProps}>
                        <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className={cn(
                                `h-[inherit] w-[inherit] rounded-[inherit]`,
                            )}
                            src={`https://www.youtube-nocookie.com/embed/${data.videoId}`}
                            title="YouTube video player"
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ToolVideos;
