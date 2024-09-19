"use client";

import SignInWithOAuthOption from "./sign-in-with-oauth-option";
import { TOAuthOption } from "@/types";
import { cn } from "@/utils/tailwind/tw-merge";
import { oauthList } from "./data/oauth-list";
import { useState } from "react";

const SignInWithOAuthOptions = () => {
    const [oauthOptions, _] = useState<TOAuthOption[]>(oauthList);

    if (!oauthOptions.length) return null;

    return (
        <ul className={cn("flex gap-x-3 mt-5 w-full")}>
            {oauthList.map((option) => (
                <li
                    key={option.provider}
                    className={cn(
                        "flex w-full flex-col items-center transition-all",
                    )}
                >
                    <SignInWithOAuthOption {...option} />
                </li>
            ))}
        </ul>
    );
};

export default SignInWithOAuthOptions;
