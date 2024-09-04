import { render, screen } from "@testing-library/react";

import OAuthOption from ".";
import { TOAuthOption } from "@/types";

describe("OAuthOption", () => {
    it("should render no oauth with button that displays provider name followed by 'sign in'", () => {
        const option = {
            icon: "",
            provider: "Google",
            providerLower: "google",
        } as TOAuthOption;
        render(<OAuthOption {...option} />);

        const signInButton = screen.getByRole("button");

        expect(signInButton).toBeInTheDocument();
        expect(signInButton).toHaveTextContent(/google sign in/i);
    });
});
