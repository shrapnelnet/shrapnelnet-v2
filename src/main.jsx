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
import Account from "./components/Account.jsx"
import Profile from "./components/Profile.jsx"

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
    },
    {
        path: "/account",
        element: <Account />,
        errorElement: <Error />
    },
    {
        path: "/profile/:username",
        element: <Profile />,
        errorElement: <Error />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
)
