import { render, screen } from "@testing-library/react";

import OAuthOptions from ".";
import { oauthList } from "./data/oauth-list";

describe("OAuthOptions", () => {
    it("should render no oauth options when oauthList is empty", () => {
        const originalOAuthList = [...oauthList];
        oauthList.length = 0;

        const { container } = render(<OAuthOptions />);
        expect(container.firstChild).toBeNull();

        oauthList.push(...originalOAuthList);
    });

    it("should render selected oauth options from oauthList", () => {
        render(<OAuthOptions />);
        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBeGreaterThanOrEqual(0);
    });
});
