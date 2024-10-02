"use client";

import { Check, ChevronsUpDown, CirclePlus } from "lucide-react";
import { useRef, useState } from "react";

import CreateNewIntegration from "./create-new-integration";
import Group from "@/components/layout/group";
import Image from "next/image";
import { cn } from "@/utils/tailwind/tw-merge";
import useIntegrations from "@/hooks/use-integrations";
import { useOnClickOutside } from "usehooks-ts";

const IntegrationsField = () => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const ulRef = useRef<HTMLUListElement>(null);
    const {
        integrations,
        selectedIntegrations,
        showList,
        handleHideList,
        handleShowList,
        handleAddOrRemoveIntegration,
        checkIfIntegrationAdded,
    } = useIntegrations();

    useOnClickOutside(ulRef, handleHideList, "mouseup");

    const handleOpenForm = () => void setShowForm(true);
    const handleCloseForm = () => void setShowForm(false);

    return (
        <Group className={cn("space-y-2 relative")}>
            <Group className={cn("space-y-2")}>
                <p className={cn("font-bold text-lg")}>Integrations</p>
                <Group
                    role="button"
                    className={cn(
                        "flex border-2 border-app-tertiary justify-between rounded-lg items-center space-x-2 h-[60px] px-3 shadow-neobrut2 hover:shadow-neobrut3 transition-all bg-white active:shadow-neobrut2 w-fit min-w-[200px]",
                    )}
                    onClick={handleShowList}
                >
                    <span className={cn("font-medium")}>
                        {!selectedIntegrations.length
                            ? "Select integrations..."
                            : `${selectedIntegrations.length} selected`}
                    </span>
                    <ChevronsUpDown />
                </Group>
            </Group>
            {showList && (
                <ul
                    className={cn(
                        "absolute top-22 border-2 border-app-tertiary rounded-lg shadow-neobrut2 px-2 py-4 max-h-[300px] overflow-y-scroll bg-white w-[300px]",
                    )}
                    ref={ulRef}
                >
                    {Object.values(integrations).map((integration) => {
                        return (
                            <li
                                key={integration.id}
                                className={cn(
                                    "cursor-pointer px-2 py-3 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-between",
                                )}
                                onClick={() =>
                                    void handleAddOrRemoveIntegration(
                                        integration,
                                    )
                                }
                            >
                                <Group
                                    className={cn(
                                        "flex items-center space-x-2",
                                    )}
                                >
                                    <Image
                                        src={integration.branding ?? ""}
                                        alt={`${integration.name} logo`}
                                        width={30}
                                        height={30}
                                    />
                                    <span>{integration.name}</span>
                                </Group>
                                {checkIfIntegrationAdded(integration.id) && (
                                    <Check size={20} />
                                )}
                            </li>
                        );
                    })}
                    <li
                        className={cn(
                            "flex cursor-pointer px-2 py-3 rounded-lg hover:bg-gray-100 transition-all items-center gap-x-3 mt-3",
                        )}
                        onClick={handleOpenForm}
                    >
                        <CirclePlus />
                        Create new
                    </li>
                </ul>
            )}
            {showForm && (
                <CreateNewIntegration handleCloseForm={handleCloseForm} />
            )}
        </Group>
    );
};

export default IntegrationsField;
