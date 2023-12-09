import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // server: {
    //     cors: {
    //         origin: false,
    //     },
    //     proxy: {
    //         "/wss/v2/1/demo/abcd": {
    //             target: "wss://socketsbay.com",
    //             ws: true,
    //         },
    //     },
    // },
    resolve: {
        alias: {
            "~": path.resolve("src"),
        },
    },
});
