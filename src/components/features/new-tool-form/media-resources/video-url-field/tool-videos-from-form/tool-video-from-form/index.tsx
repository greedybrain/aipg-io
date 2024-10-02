"use client";

import { Play, X } from "lucide-react";
import {
    TVideoData,
    useVideoURLFieldContext,
} from "@/contexts/video-url-field-context";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils/tailwind/tw-merge";
import useVideoOrThumbnail from "@/hooks/use-video-or-thumbnail";

interface Props {
    videoData: TVideoData;
}

const ToolVideoFromForm = ({
    videoData: { url, videoId, thumbnail },
}: Props) => {
    const { deleteURL } = useVideoURLFieldContext();

    const {
        shouldPlay,
        isThumbnailLoading,
        isIframeLoading,
        iframeRef,
        handleThumbnailLoad,
        handleIframeLoad,
        setIsIframeLoading,
        setShouldPlay,
    } = useVideoOrThumbnail();

    return (
        <li
            className={cn(
                "relative rounded-lg flex flex-col items-center justify-center w-full h-[150px]",
            )}
        >
            <div
                className={cn(
                    "absolute right-3 top-3 z-50 rounded-full p-1 bg-app-tertiary",
                )}
            >
                <X
                    size={20}
                    className={cn("text-white  cursor-pointer")}
                    onClick={() => deleteURL(url)}
                />
            </div>
            {!shouldPlay ? (
                thumbnail && (
                    <>
                        {isThumbnailLoading && (
                            <Skeleton className="absolute inset-0 flex items-center justify-center border-2 border-app-tertiary/50 rounded-lg shadow-neobrut2-loading h-[150px]" />
                        )}
                        <Image
                            src={thumbnail}
                            alt="video thumbnail"
                            fill
                            onLoad={handleThumbnailLoad}
                            className={cn(
                                "rounded-[inherit] border-2 border-app-tertiary shadow-neobrut2",
                                {
                                    invisible: isThumbnailLoading,
                                },
                            )}
                        />
                        <Play
                            className={cn(
                                "fill-app-secondary absolute z-50 scale-[2.5] hover:scale-[3] transition-all cursor-pointer",
                                {
                                    invisible: isThumbnailLoading,
                                },
                            )}
                            onClick={() => {
                                setIsIframeLoading(true);
                                setShouldPlay(true);
                            }}
                        />
                    </>
                )
            ) : (
                <>
                    {isIframeLoading && (
                        <Skeleton className="absolute inset-0 flex items-center justify-center border-2 border-app-tertiary/50 rounded-lg shadow-neobrut2-loading h-[150px]" />
                    )}
                    <iframe
                        ref={iframeRef}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        onLoad={handleIframeLoad}
                        className={cn(
                            `h-[inherit] w-[inherit] rounded-[inherit]`,
                            {
                                invisible: isIframeLoading,
                            },
                        )}
                        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                        title="YouTube video player"
                    />
                </>
            )}
        </li>
    );
};

export default ToolVideoFromForm;
