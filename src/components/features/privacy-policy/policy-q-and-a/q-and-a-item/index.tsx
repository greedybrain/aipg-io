import { QAndA } from "../../data/policy-content";
import { cn } from "@/utils/tailwind/tw-merge";

const QAndAItem = ({ answer, question, id }: QAndA & { id: string }) => {
    return (
        <li className={cn("")}>
            <p id={id} className={cn("font-bold md:text-2xl text-xl")}>
                {question}
            </p>
            <p className={cn("md:text-lg mt-5")}>{answer}</p>
        </li>
    );
};

export default QAndAItem;
