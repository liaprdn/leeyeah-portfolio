import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mustard: "#FFDC4E",
                "gray-black": "#37372F",
                "white-ish": "#FCF7EF",
            },
            letterSpacing: {
                "super-tight": "-0.06em", 
            },
        },
    },
    plugins: [],
};

export default config;