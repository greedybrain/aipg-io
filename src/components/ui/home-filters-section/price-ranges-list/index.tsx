import PriceRange from "./price-range";
import { cn } from "@/utils/tailwind/tw-merge";
import { priceRanges } from "@/utils/data/price-ranges";

const PriceRangesList = () => {
    return (
        <ul className={cn("flex flex-wrap gap-2 mt-2")}>
            {priceRanges.map((range) => (
                <li
                    key={range}
                    className={cn(
                        "text-sm text-app-tertiary/75 border-2 rounded-full border-app-tertiary/65 px-3 py-2 cursor-pointer hover:scale-105 transition-all",
                    )}
                >
                    <PriceRange key={range} range={range} />
                </li>
            ))}
        </ul>
    );
};

export default PriceRangesList;
