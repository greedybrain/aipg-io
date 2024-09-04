import { TOAuthOption } from "../../../../types";
import { oauth } from "../../../../services/actions/server/supabase/auth/oauth";
import { redirect } from "next/navigation";

const OAuthOption = (option: TOAuthOption) => {
    const onSubmit = async () => {
        const { url } = await oauth(option.providerLower);

        if (url) {
            redirect(url);
        }
    };

    return (
        <>
            <form action={onSubmit}>
                <button
                    type="submit"
                    className="border-2 border-black p-3 bg-black text-white"
                >
                    {`${option.provider} sign in`}
                </button>
            </form>
        </>
    );
};

export default OAuthOption;
