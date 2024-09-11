import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            ssr: "resources/js/ssr.tsx",
            refresh: true,
        }),
        react(),
    ],
    server: {
        cors: {
            origin: "*",
        },
        hmr: {
            host: process.env.VITE_HOST ?? "localhost",
        },
        port: 3000,
        host: process.env.VITE_HOST ?? "0.0.0.0",
    },
});
