import { emailProviderLinks } from "../data/email-provider-links";

export const getEmailProviderLink = (email: string) => {
    const domain = email.split("@")[1].toLocaleLowerCase();

    if (emailProviderLinks[domain]) {
        return emailProviderLinks[domain];
    }

    return `https://mail.${domain}`;
};
