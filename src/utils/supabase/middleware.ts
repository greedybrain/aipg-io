import {
    AUTH_ROUTES,
    HOME_ROUTE,
    LOGIN_ROUTE,
    PROTECTED_ROUTES,
} from "@/constants";
import { Database } from "@/types/database.types";
import { createServerClient } from "@supabase/ssr";
import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value),
                    );
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options),
                    );
                },
            },
        },
    );

    // IMPORTANT: Avoid writing any logic between createServerClient and
    // supabase.auth.getUser(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const isAuthRoute = AUTH_ROUTES.includes(request.nextUrl.pathname);
    const isProtectedRoute = PROTECTED_ROUTES.includes(
        request.nextUrl.pathname,
    );
    const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

    if (!user) {
        if (isAdminRoute) {
            const url: NextURL = request.nextUrl.clone();
            url.pathname = LOGIN_ROUTE;
            return NextResponse.redirect(url);
        }
    }

    if (!user && isProtectedRoute) {
        const url: NextURL = request.nextUrl.clone();
        url.pathname = LOGIN_ROUTE;
        return NextResponse.redirect(url);
    }

    if (user) {
        const { data: appUser } = await supabase
            .from("appUsers")
            .select("role")
            .eq("userId", user.id)
            .returns<Database["public"]["Tables"]["appUsers"]["Row"]>();

        if (appUser && appUser.role) {
            if (isAdminRoute && ["ADMIN", "OWNER"].includes(appUser.role)) {
                const url: NextURL = request.nextUrl.clone();
                url.pathname = HOME_ROUTE;
                return NextResponse.redirect(url);
            }
        }
    }

    if (user && isAuthRoute) {
        const url: NextURL = request.nextUrl.clone();
        url.pathname = HOME_ROUTE;
        return NextResponse.redirect(url);
    }

    // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
    // creating a new response object with NextResponse.next() make sure to:
    // 1. Pass the request in it, like so:
    //    const myNewResponse = NextResponse.next({ request })
    // 2. Copy over the cookies, like so:
    //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
    // 3. Change the myNewResponse object to fit your needs, but avoid changing
    //    the cookies!
    // 4. Finally:
    //    return myNewResponse
    // If this is not done, you may be causing the browser and server to go out
    // of sync and terminate the user's session prematurely!

    return supabaseResponse;
}
