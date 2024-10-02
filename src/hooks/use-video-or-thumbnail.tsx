import { useRef, useState } from "react";

import { useOnClickOutside } from "usehooks-ts";

const useVideoOrThumbnail = () => {
    const [isThumbnailLoading, setIsThumbnailLoading] = useState<boolean>(true);
    const [isIframeLoading, setIsIframeLoading] = useState<boolean>(true);
    const [shouldPlay, setShouldPlay] = useState<boolean>(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    useOnClickOutside(iframeRef, () => void setShouldPlay(false));

    const handleThumbnailLoad = () => {
        setIsThumbnailLoading(false);
    };

    const handleIframeLoad = () => {
        setIsIframeLoading(false);
    };

    return {
        isThumbnailLoading,
        isIframeLoading,
        shouldPlay,
        iframeRef,
        setShouldPlay,
        setIsIframeLoading,
        handleThumbnailLoad,
        handleIframeLoad,
    };
};

export default useVideoOrThumbnail;
