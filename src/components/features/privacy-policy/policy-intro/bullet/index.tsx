import { Check, ExternalLink } from "lucide-react";

import { Bullet as BulletType } from "../../data/policy-content";
import { cn } from "@/utils/tailwind/tw-merge";

const Bullet = ({ content, link }: BulletType) => {
    return (
        <li className={cn("flex gap-x-5")}>
            <div>
                <Check size={20} />
            </div>
            <p className={cn("md:text-lg")}>
                {content}{" "}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        className={cn("inline-flex relative top-1")}
                    >
                        <ExternalLink
                            size={20}
                            className={cn("inline-block ml-1 text-blue-500")}
                        />
                    </a>
                )}
            </p>
        </li>
    );
};

export default Bullet;
