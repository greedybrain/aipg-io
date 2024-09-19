import Bullet from "./bullet";
import IntroContent from "./intro-content";
import { cn } from "@/utils/tailwind/tw-merge";
import { policy } from "../data/policy-content";

const PolicyIntro = () => {
    return (
        <div className={cn("mt-10")}>
            <IntroContent />
            <ul className={cn("mt-5 space-y-5")}>
                {policy.intro.bullets.map((bullet) => (
                    <Bullet key={bullet.content} {...bullet} />
                ))}
            </ul>
        </div>
    );
};

export default PolicyIntro;
