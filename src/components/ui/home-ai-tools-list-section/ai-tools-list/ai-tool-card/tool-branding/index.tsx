import Image from "next/image";
import { cn } from "@/utils/tailwind/tw-merge";

interface ToolBrandingProps {
    imageURL: string;
    name: string;
    size?: number;
}

const ToolBranding = ({ imageURL, name, size = 65 }: ToolBrandingProps) => {
    return (
        <div className={cn(`relative`)} style={{ width: size, height: size }}>
            <Image
                src={imageURL}
                alt={`${name} logo`}
                fill
                className={cn("rounded-full drop-shadow-lg object-fill")}
            />
        </div>
    );
};

export default ToolBranding;
