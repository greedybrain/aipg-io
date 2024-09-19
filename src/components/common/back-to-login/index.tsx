import { ArrowLeft } from "lucide-react";
import Group from "@/components/layout/group";
import { LOGIN_ROUTE } from "@/constants";
import Link from "next/link";
import { cn } from "@/utils/tailwind/tw-merge";

const BackToLogin = () => {
    return (
        <Group
            className={cn(
                "flex items-center justify-center gap-x-3 text-app-tertiary/75 mt-10",
            )}
        >
            <ArrowLeft />

            <Link href={LOGIN_ROUTE}>Back to login</Link>
        </Group>
    );
};

export default BackToLogin;
