import { useEffect, useState } from "react";

import { TSelectIntegration } from "@/db/drizzle/schemas";
import useIntegrationsStore from "@/stores/integrations";

const useIntegrations = () => {
    const [showList, setShowList] = useState<boolean>(false);
    const {
        integrations,
        selectedIntegrations,
        loadAndSetIntegrations,
        addSelection,
        removeIntegration,
    } = useIntegrationsStore((state) => ({
        integrations: state.integrations,
        selectedIntegrations: state.selectedIntegrations,
        loadAndSetIntegrations: state.loadAndSetIntegrations,
        addSelection: state.addSelection,
        removeIntegration: state.removeIntegration,
    }));

    useEffect(() => {
        loadAndSetIntegrations();
    }, [loadAndSetIntegrations]);

    const handleShowList = () => {
        setShowList(true);
    };

    const handleHideList = () => {
        setShowList(false);
    };

    const handleAddOrRemoveIntegration = (integration: TSelectIntegration) => {
        const foundIntegration = findIntegration(integration.id);

        if (foundIntegration) {
            removeIntegration(integration.id);
        } else {
            addSelection(integration);
        }
    };

    const checkIfIntegrationAdded = (id: string) => {
        const foundIntegration = findIntegration(id);

        return !!foundIntegration;
    };

    const findIntegration = (id: string) =>
        Object.values(selectedIntegrations).find(
            (selected) => selected.id === id,
        );

    return {
        integrations,
        selectedIntegrations,
        showList,
        handleAddOrRemoveIntegration,
        checkIfIntegrationAdded,
        handleShowList,
        handleHideList,
    };
};

export default useIntegrations;
