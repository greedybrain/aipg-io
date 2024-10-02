import Group from "@/components/layout/group";
import ToolVideosFromForm from "../tool-videos-from-form";
import { cn } from "@/utils/tailwind/tw-merge";

const AddedURLs = () => {
    return (
        <Group className={cn("mt-5")}>
            <p className={cn("underline font-bold")}>
                Videos added based on URLs
            </p>
            <ToolVideosFromForm />
        </Group>
    );
};

export default AddedURLs;
