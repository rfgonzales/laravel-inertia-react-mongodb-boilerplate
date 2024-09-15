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
            red: "#cc0000",
        },
    },

    plugins: [],
};
