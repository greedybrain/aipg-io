"use client";

import {
    MEDIA_RESOURCES_VIDEO_URL,
    MEDIA_RESOURCES_VIDEO_URLS,
} from "@/constants";
import React, { useContext, useEffect, useState } from "react";

import { extractVideoId } from "@/utils/video/extract-video-id";
import { extractVideoThumbnail } from "@/utils/video/extract-video-thumbnail";
import { notify } from "@/utils/alerts/toast";
import { useAiToolFormContext } from "@/hooks/use-ai-tool-form-context";

export type TVideoData = {
    url: string;
    videoId: string | null;
    thumbnail: string | null;
};

export type TVideoURLFieldContext = {
    url: string | null;
    urls: string[];
    videoDataArr: TVideoData[];
    addURL: () => void;
    addBulkURLs: () => void;
    deleteURL: (url: string) => void;
};

export const VideoURLFieldContext = React.createContext<
    TVideoURLFieldContext | undefined
>(undefined);

const VideoURLFieldContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const methods = useAiToolFormContext();
    const url = methods.watch(MEDIA_RESOURCES_VIDEO_URL);
    const urls = methods.watch(MEDIA_RESOURCES_VIDEO_URLS);

    const [videoDataArr, setVideoDataArr] = useState<TVideoData[]>([]);

    useEffect(() => {
        const fetchVideoData = async () => {
            const data = await Promise.all(
                urls.map(async (url) => ({
                    url,
                    videoId: extractVideoId(url),
                    thumbnail: (await extractVideoThumbnail(url)) || "",
                })),
            );
            setVideoDataArr(data);
        };

        fetchVideoData();
    }, [urls]);

    const addURL = () => {
        if (url) {
            if (urls.includes(url)) {
                notify({
                    type: "error",
                    message: "URL already exists",
                    id: "duplicate-url",
                });
                return;
            }
            const existingURLs = getExistingURLs();
            methods.setValue(MEDIA_RESOURCES_VIDEO_URLS, [
                ...existingURLs,
                url,
            ]);
        }
        resetURL();
    };

    const addBulkURLs = () => {
        if (url) {
            const urlsByComma = url.split(",");
            const potentialDuplicates = Array.from(new Set(urlsByComma));

            if (potentialDuplicates.length < urlsByComma.length) {
                notify({
                    type: "error",
                    message: "Duplicate url detected",
                    id: "duplicate-detected",
                });
                return;
            }

            methods.setValue(MEDIA_RESOURCES_VIDEO_URLS, [...urlsByComma]);

            resetURL();
        }
    };

    const deleteURL = (url: string) => {
        const existingURLs = getExistingURLs();

        methods.setValue(
            MEDIA_RESOURCES_VIDEO_URLS,
            existingURLs.filter((existingURL) => existingURL !== url),
        );
        setVideoDataArr((prev) => {
            const videoDataArrCopy = [...prev];

            const newVideoDataArr = videoDataArrCopy.filter(
                (item) => item.url !== url,
            );
            return newVideoDataArr;
        });
    };

    // Helpers
    const getExistingURLs = () => methods.getValues(MEDIA_RESOURCES_VIDEO_URLS);

    const resetURL = () => {
        methods.resetField(MEDIA_RESOURCES_VIDEO_URL);
    };

    return (
        <VideoURLFieldContext.Provider
            value={{
                url,
                urls,
                videoDataArr,
                addURL,
                addBulkURLs,
                deleteURL,
            }}
        >
            {children}
        </VideoURLFieldContext.Provider>
    );
};

export const useVideoURLFieldContext = () => {
    const context = useContext(VideoURLFieldContext);

    if (context === undefined) {
        throw new Error(
            "VideoURLFieldContextProvider is missing for this context",
        );
    }

    return context;
};

export default VideoURLFieldContextProvider;
