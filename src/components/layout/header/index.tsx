import BrandLogo from "@/components/common/brand-logo";
import DrawerMenuTrigger from "@/components/widgets/drawer-menu-trigger";
import FixedContainer from "../fixed-container";
import Group from "../group";
import NavItemsLarge from "../nav-items-large";
import SignupButton from "@/components/common/signup-button";
import UserAvatar from "@/components/common/user-avatar";
import { cn } from "@/utils/tailwind/tw-merge";
import { getUser } from "@/services/actions/server/auth/authenticate";

const Header = async () => {
    const {
        user: { appUser },
    } = await getUser();

    return (
        <header>
            <FixedContainer
                className={cn("flex items-center justify-between py-5")}
            >
                <BrandLogo
                    imageProps={{
                        width: 60,
                        height: 60,
                    }}
                />
                <Group className={cn("flex items-center gap-x-3")}>
                    <NavItemsLarge userId={appUser?.id} />
                    {appUser?.id ? (
                        <UserAvatar avatarUrl={appUser.avatarUrl} />
                    ) : (
                        <SignupButton />
                    )}
                    <div className={cn("sm:hidden")}>
                        <DrawerMenuTrigger userId={appUser?.id} />
                    </div>
                </Group>
            </FixedContainer>
        </header>
    );
};

export default Header;
