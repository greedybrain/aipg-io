import type { Config } from "tailwindcss";

const config: Config = {
    // darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                "app-primary": "#00E3FF",
                "app-secondary": "#D8F055",
                "app-tertiary": "#2F2549",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            boxShadow: {
                neobrut1: "2px 3px 0 0 #2F2549",
                neobrut2: "4px 5px 0 1px #2F2549",
                neobrut3: "6px 7px 0 2px #2F2549",
                neobrut4: "8px 9px 0 3px #2F2549",
                "neobrut1-loading": "2px 3px 0 0 #2f254935",
                "neobrut2-loading": "4px 5px 0 1px #2f254935",
                "neobrut3-loading": "6px 7px 0 2px #2f254935",
                "neobrut4-loading": "8px 9px 0 3px #2f254935",
                "neobrut1-error": "2px 3px 0 0 #ef4444",
                "neobrut2-error": "4px 5px 0 1px #ef4444",
                "neobrut3-error": "6px 7px 0 2px #ef4444",
                "neobrut4-error": "8px 9px 0 3px #ef4444",
                "outline-black": "0 0 0 4px black",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
