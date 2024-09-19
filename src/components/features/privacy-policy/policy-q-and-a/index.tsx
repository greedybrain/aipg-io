import QAndAItem from "./q-and-a-item";
import { cn } from "@/utils/tailwind/tw-merge";
import { policy } from "../data/policy-content";

const goTos = policy.section2.contents.map((obj) => obj.goTo);

const PolicyQAndAs = () => {
    return (
        <div className={cn("mt-16")}>
            <ul className={cn("space-y-10 mt-5")}>
                {policy.section3.map((qAndA, index) => (
                    <QAndAItem
                        key={qAndA.question}
                        id={goTos[index].slice(1)}
                        {...qAndA}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PolicyQAndAs;
