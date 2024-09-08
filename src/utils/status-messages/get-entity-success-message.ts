import { TSuccessMessageArgs } from "@/types";
import pluralize from "pluralize";

const messageGenerators: Record<
    TSuccessMessageArgs["messageType"],
    (args: TSuccessMessageArgs) => string
> = {
    readOne: ({ relation }) =>
        relation
            ? `${pluralize.singular(relation)} retrieved successfully!`
            : "Entity retrieved successfully!",
    readMany: ({ relation }) =>
        relation
            ? `${pluralize.plural(relation)} retrieved successfully!`
            : "Entities retrieved successfully!",
    readAll: ({ relation }) =>
        relation
            ? `${pluralize.plural(relation)} retrieved successfully!`
            : "Entities retrieved successfully!",
    createOne: ({ relation }) =>
        relation
            ? `${pluralize.singular(relation)} created successfully!`
            : "Entity created successfully!",
    createMany: ({ relation }) =>
        relation
            ? `${pluralize.plural(relation)} created successfully!`
            : "Entities created successfully!",
    updateOne: ({ relation }) =>
        relation
            ? `${pluralize.singular(relation)} upserted successfully!`
            : "Entity upserted successfully!",
    upsertOne: ({ relation }) =>
        relation
            ? `${pluralize.singular(relation)} upserted successfully!`
            : "Entity upserted successfully!",
    upsertMany: ({ relation }) =>
        relation
            ? `${pluralize.plural(relation)} upserted successfully!`
            : "Entities upserted successfully!",
    deleteOne: ({ relation }) =>
        relation
            ? `${pluralize.singular(relation)} deleted successfully!`
            : "Entity deleted successfully!",
    deleteMany: ({ relation }) =>
        relation
            ? `${pluralize.plural(relation)} deleted successfully!`
            : "Entities deleted successfully!",
};

export const getEntitySuccessMessage = (args: TSuccessMessageArgs): string => {
    const generateMessage = messageGenerators[args.messageType];
    return generateMessage(args);
};
