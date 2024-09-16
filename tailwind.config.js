import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    prefix: "tw-",
    corePlugins: {
        preflight: false,
    },

    important: true,
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            //matching bootsrap breakouts to avoid problems with react-bootstrap
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px",
            "2xl": "1400px",
        },
        colors: {
            black: {
                DEFAULT: "#000000", // Base color for black
                70: "rgba(0, 0, 0, 0.7)", // Black with 70% opacity
            },
            white: "#ffffff",
            gray: {
                100: "#f7fafc",
                200: "#edf2f7",
                300: "#e2e8f0",
                400: "#cbd5e0",
                500: "#a0aec0",
                600: "#718096",
                700: "#4a5568",
                800: "#2d3748",
                900: "#1a202c",
            },
            red: {
                DEFAULT: "#CC0000",
                100: "#fff5f5",
                200: "#fed7d7",
                300: "#feb2b2",
                400: "#fc8181",
                500: "#f56565",
                600: "#e53e3e",
                700: "#c53030",
                800: "#9b2c2c",
                900: "#742a2a",
            },
            blue: {
                100: "#ebf8ff",
                200: "#bee3f8",
                300: "#90cdf4",
                400: "#63b3ed",
                500: "#4299e1",
                600: "#3182ce",
                700: "#2b6cb0",
                800: "#2c5282",
                900: "#2a4365",
            },
            // Add other colors as needed
        },
        opacity: {
            70: "0.7",
        },
    },

    plugins: [forms],
};
