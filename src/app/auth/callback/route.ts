// import { AppUser } from "@/db/drizzle/schemas";
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
// import { createEntityOrEntities } from "@/services/actions/server/crud/createEntityOrEntities";

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get("next") ?? "/";

    if (code) {
        const supabase = createClient();
        const {
            data: { user },
            error,
        } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            if (user && user.email) {
                // const { data: appUser } = await supabase
                //     .from("appUsers")
                //     .select()
                //     .eq("userId", user.id)
                //     .single();
                // if (!appUser) {
                //     await createEntityOrEntities({
                //         table: AppUser,
                //         relation: "AppUser",
                //         formData: {
                //             email: user.email,
                //             userId: user.id,
                //             avatarUrl:
                //                 user.user_metadata.avatar_url ||
                //                 user.user_metadata.picture ||
                //                 null,
                //             name: (
                //                 user.user_metadata.name ||
                //                 user.user_metadata.full_name
                //             ).trim(),
                //         },
                //     });
                // }
            }

            const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === "development";
            if (isLocalEnv) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${next}`);
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`);
            } else {
                return NextResponse.redirect(`${origin}${next}`);
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/login`);
}
