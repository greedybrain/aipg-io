"use client";

import Lottie, { LottieComponentProps } from "lottie-react";

import circularLoadingAnimation from "../../../../public/aiplayground-aipg-loading-indicator.json";

const LoadingIndicator = ({
    ...rest
}: Omit<LottieComponentProps, "animationData">) => {
    return (
        <Lottie
            {...rest}
            animationData={circularLoadingAnimation}
            loop={rest.loop ?? true}
        />
    );
};

export default LoadingIndicator;
