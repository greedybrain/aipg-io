type TPriceRange =
    | "Any price"
    | "Under $25"
    | "$25 to $75"
    | "$75 to $100"
    | "Over $100";

export const priceRanges = [
    "Any price",
    "Under $25",
    "$25 to $75",
    "$75 to $100",
    "Over $100",
] as TPriceRange[];
