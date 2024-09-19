import { render, screen } from "@testing-library/react";

import BrandLogo from ".";

describe("BrandLogo", () => {
    it("should render a link that wraps the image representing the apps brand logo", () => {
        render(
            <BrandLogo
                imageProps={{
                    width: 0,
                    height: 0,
                }}
            />,
        );

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/");
    });

    it("should render and image representing the apps brand logo", () => {
        render(
            <BrandLogo
                imageProps={{
                    width: 0,
                    height: 0,
                }}
            />,
        );

        const brandLogo = screen.getByAltText(/aiplayground logo/i);
        expect(brandLogo).toBeInTheDocument();
    });

    it("should throw an error if no width or height is set in props", () => {
        expect(() => {
            render(<BrandLogo />);
        }).toThrow();
    });
});
