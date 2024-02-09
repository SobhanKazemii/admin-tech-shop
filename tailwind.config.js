/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            fontSize: {
                extrabold_1: [
                    "2rem",
                    {
                        fontWeight: 900,
                    },
                ],
                extrabold_2: [
                    "1.5rem",
                    {
                        fontWeight: 900,
                    },
                ],
                extrabold_3: [
                    "1.25rem",
                    {
                        fontWeight: 900,
                    },
                ],
                bold_1: [
                    "1.5rem",
                    {
                        fontWeight: 800,
                    },
                ],
                bold_2: [
                    "1.25rem",
                    {
                        fontWeight: 800,
                    },
                ],
                bold_3: [
                    "1rem",
                    {
                        fontWeight: 800,
                    },
                ],
                bold_4: [
                    "0.875rem",
                    {
                        fontWeight: 800,
                    },
                ],
                medium_1: [
                    "1.25rem",
                    {
                        fontWeight: 600,
                    },
                ],
                medium_2: [
                    "1rem",
                    {
                        fontWeight: 600,
                    },
                ],
                medium_3: [
                    "0.875rem",
                    {
                        fontWeight: 600,
                    },
                ],
                medium_4: [
                    "0.75rem",
                    {
                        fontWeight: 600,
                    },
                ],
                medium_5: [
                    "0.625rem",
                    {
                        fontWeight: 600,
                    },
                ],
                medium_6: [
                    "0.5rem",
                    {
                        fontWeight: 600,
                    },
                ],
                regular_1: [
                    "1.25rem",
                    {
                        fontWeight: 400,
                    },
                ],
                regular_2: [
                    "1rem",
                    {
                        fontWeight: 400,
                    },
                ],
                regular_3: [
                    "0.875rem",
                    {
                        fontWeight: 400,
                    },
                ],
                regular_4: [
                    "0.75rem",
                    {
                        fontWeight: 400,
                    },
                ],
                regular_5: [
                    "0.625rem",
                    {
                        fontWeight: 400,
                    },
                ],
                regular_6: [
                    "0.5rem",
                    {
                        fontWeight: 400,
                    },
                ],
            },
            screens: {
                desktop: "1400px",
                tablet: "768px",
                mobile: "420px",
            },
            maxWidth: {
                desktop: "1200px",
                tablet: "730px",
                mobile: "380px",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
