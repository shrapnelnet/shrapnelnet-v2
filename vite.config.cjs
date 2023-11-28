import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    server: {
        proxy: {
            "/api/login": {
                target: "https://login.shrapnelnet.workers.dev",
                changeOrigin: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization",
                    "Access-Control-Allow-Credentials": "true"
                }
            },
            "/api/isLoggedIn": {
                target: "https://decodejwt.shrapnelnet.workers.dev",
                changeOrigin: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization",
                    "Access-Control-Allow-Credentials": "true"
                }
            },
            "/api/logout": {
                target: "https://logout.shrapnelnet.workers.dev",
                changeOrigin: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization",
                    "Access-Control-Allow-Credentials": "true"
                }
            },
            "/api/post": {
                target: "https://post.shrapnelnet.workers.dev",
                changeOrigin: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization",
                    "Access-Control-Allow-Credentials": "true"
                }
            },
            "/api/getposts": {
                target: "https://getposts.shrapnelnet.workers.dev",
                changeOrigin: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, OPTIONS",
                    "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization",
                    "Access-Control-Allow-Credentials": "true"
                }
            }
        }
    }
})
