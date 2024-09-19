import { HOME_ROUTE, LOGIN_ROUTE, PRIVACY_ROUTE } from "@/constants";

export type TNavItem = {
    name: "Home" | "Login" | "Privacy policy" | "Logout";
    route: typeof HOME_ROUTE | typeof LOGIN_ROUTE | typeof PRIVACY_ROUTE;
};

const navItems = [
    {
        name: "Home",
        route: HOME_ROUTE,
    },
    {
        name: "Login",
        route: LOGIN_ROUTE,
    },
    {
        name: "Privacy policy",
        route: PRIVACY_ROUTE,
    },
    {
        name: "Logout",
        route: LOGIN_ROUTE,
    },
] as TNavItem[];

export default navItems;
