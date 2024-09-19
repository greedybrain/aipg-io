import { render, screen } from "@testing-library/react";

import SignupButton from ".";

describe("SignupButton", () => {
    it("should render button with Sign Up text", () => {
        render(<SignupButton />);

        const button = screen.getByRole("button", { name: /sign up/i });
        expect(button).toBeInTheDocument();
    });
});
