import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { theme } from "./components/Theme.jsx"
import "./globals.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from "./error.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"

const router = createBrowserRouter([
    {
        basename: "/",
        path: "/",
        element: <App />,
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
)
