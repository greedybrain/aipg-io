import Group from "@/components/layout/group";
import { cn } from "@/utils/tailwind/tw-merge";
import useVideoURLFieldCrud from "@/hooks/use-video-url-field-crud";

interface Props {
    deleteURL: (url: string) => void;
}

const AddedURLs = ({ deleteURL }: Props) => {
    const { urls } = useVideoURLFieldCrud();

    return (
        <Group className={cn("mt-5")}>
            <p className={cn("underline font-bold")}>Added urls</p>
            <ul className={cn("")}>
                {urls.map((url, idx) => {
                    return (
                        <li
                            key={url}
                            className={cn(
                                "py-1 flex items-center justify-between",
                            )}
                        >
                            <p className={cn("")}>
                                {idx + 1}
                                {". "}
                                {url}
                            </p>
                            <p
                                className={cn(
                                    "underline text-sm text-red-500 cursor-pointer",
                                )}
                                onClick={() => deleteURL(url)}
                            >
                                Delete
                            </p>
                        </li>
                    );
                })}
            </ul>
        </Group>
    );
};

export default AddedURLs;
