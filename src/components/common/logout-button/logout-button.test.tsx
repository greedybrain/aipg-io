import { render, screen } from "@testing-library/react";

import LogoutButton from ".";

describe("LogoutButton", () => {
    it("should render button with Sign Up text", () => {
        render(<LogoutButton />);

        const button = screen.getByRole("button", { name: /log out/i });
        expect(button).toBeInTheDocument();
    });
});
