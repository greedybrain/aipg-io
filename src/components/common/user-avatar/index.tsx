import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/utils/tailwind/tw-merge";

interface Props {
    avatarUrl: string | null;
}

const UserAvatar = ({ avatarUrl }: Props) => {
    return (
        <Avatar className={cn("border p-[2px] border-app-tertiary")}>
            <AvatarImage
                src={avatarUrl || ""}
                alt="users avatar"
                className={cn("rounded-full")}
            />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;
