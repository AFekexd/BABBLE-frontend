const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1d85c2",
                secondary: "#f5f5f5",
                mainbg: "#08202ea6",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
