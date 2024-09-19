import Image from "next/image";
import { TOAuthOption } from "@/types";
import { cn } from "@/utils/tailwind/tw-merge";
import { oauth } from "@/services/actions/server/auth/oauth";

const SignInWithOAuthOption = (option: TOAuthOption) => {
    const onSubmit = async () => {
        const { url } = await oauth(option.providerLower);

        if (url) {
            window.location.href = url;
        }
    };

    return (
        <>
            <form action={onSubmit} className={cn("size-[40px]")}>
                <button type="submit">
                    <Image
                        src={option.icon}
                        alt={`${option.provider}'s brand logo`}
                        width={40}
                        height={40}
                        priority
                    />
                </button>
            </form>
        </>
    );
};

export default SignInWithOAuthOption;
