"use server";

import { extractVideoId } from "./extract-video-id";

export const extractVideoThumbnail = async (
    url: string,
): Promise<string | null> => {
    const videoId = extractVideoId(url);

    const resolutions = [
        "maxresdefault",
        "hqdefault",
        "mqdefault",
        "sddefault",
        "default",
    ];

    for (const resolution of resolutions) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${resolution}.jpg`;

        const response = await fetch(thumbnailUrl, { method: "HEAD" });

        if (response.ok) return thumbnailUrl;
    }

    return null;
};
