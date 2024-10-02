"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { TVideoData } from "..";
import { cn } from "@/utils/tailwind/tw-merge";
import useVideoOrThumbnail from "@/hooks/use-video-or-thumbnail";

interface Props {
    videoData: TVideoData;
}

const ToolVideo = ({ videoData: { videoId, thumbnail } }: Props) => {
    const {
        shouldPlay,
        isThumbnailLoading,
        isIframeLoading,
        iframeRef,
        handleIframeLoad,
        handleThumbnailLoad,
        setShouldPlay,
        setIsIframeLoading,
    } = useVideoOrThumbnail();

    return (
        <li
            key={videoId}
            className={cn(
                "relative rounded-lg flex items-center justify-center w-full h-[150px]",
            )}
        >
            {!shouldPlay ? (
                thumbnail && (
                    <>
                        {isThumbnailLoading && (
                            <Skeleton className="absolute inset-0 flex items-center justify-center border-2 border-app-tertiary/50 rounded-lg shadow-neobrut2-loading" />
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
                        <Skeleton className="absolute inset-0 flex items-center justify-center border-2 border-app-tertiary/50 rounded-lg shadow-neobrut2-loading" />
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

export default ToolVideo;
