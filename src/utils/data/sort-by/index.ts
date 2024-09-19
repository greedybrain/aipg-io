export type TSortByItem =
    | "Newly Added"
    | "Oldest"
    | "Name (asc)"
    | "Name (desc)"
    | "Company (asc)"
    | "Company (desc)"
    | "Highest Price"
    | "Lowest Price";

export const sortByList = [
    "Newly Added",
    "Oldest",
    "Name (asc)",
    "Name (desc)",
    "Company (asc)",
    "Company (desc)",
    "Highest Price",
    "Lowest Price",
] as TSortByItem[];
