import { TSuccessMessageArgs, TTable } from "../../types";

const messageGenerators: Record<
    TSuccessMessageArgs["messageType"],
    (args: TSuccessMessageArgs) => string
> = {
    readOne: ({ entityName }) =>
        entityName
            ? `${entityName} retrieved successfully!`
            : "Entity retrieved successfully!",
    readMany: ({ relation }) =>
        relation
            ? `${relation} retrieved successfully!`
            : "Entities retrieved successfully!",
    readAll: ({ relation }) =>
        relation
            ? `${relation} retrieved successfully!`
            : "Entities retrieved successfully!",
    createOne: ({ entityName }) =>
        entityName
            ? `${entityName} created successfully!`
            : "Entity created successfully!",
    createMany: ({ relation }) =>
        relation
            ? `${relation} created successfully!`
            : "Entities created successfully!",
    updateOne: ({ entityName }) =>
        entityName
            ? `${entityName} upserted successfully!`
            : "Entity upserted successfully!",
    upsertOne: ({ entityName }) =>
        entityName
            ? `${entityName} upserted successfully!`
            : "Entity upserted successfully!",
    upsertMany: ({ relation }) =>
        relation
            ? `${relation} upserted successfully!`
            : "Entities upserted successfully!",
    deleteOne: ({ entityName }) =>
        entityName
            ? `${entityName} deleted successfully!`
            : "Entity deleted successfully!",
    deleteMany: ({ relation }) =>
        relation
            ? `${relation} deleted successfully!`
            : "Entities deleted successfully!",
};

export const getEntitySuccessMessage = (args: TSuccessMessageArgs): string => {
    const generateMessage = messageGenerators[args.messageType];
    return generateMessage(args);
};
