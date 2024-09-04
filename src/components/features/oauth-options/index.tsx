"use client";

import React, { useState } from "react";

import OAuthOption from "./oauth-option";
import { TOAuthOption } from "@/types";
import { oauthList } from "./data/oauth-list";

const OAuthOptions = () => {
    const [oauthOptions, _] = useState<TOAuthOption[]>(oauthList);

    if (!oauthOptions.length) return null;

    return (
        <ul>
            {oauthList.map((option) => (
                <li key={option.provider}>
                    <OAuthOption {...option} />
                </li>
            ))}
        </ul>
    );
};

export default OAuthOptions;
