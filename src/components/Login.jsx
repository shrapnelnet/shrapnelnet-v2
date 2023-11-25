import React, { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Navbar from "./Navbar.jsx"
import Typography from "@mui/material/Typography"
import { Link, redirect } from "react-router-dom"

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleFormSubmit = async () => {
        if (username.length === 0 || password.length === 0) {
            setError("Please enter a value for your password")
            setSuccess("")
            return
        }
        await fetch("https://login.shrapnelnet.workers.dev", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            credentials: "include"
        })
            .then((res) => res.text())
            .then(async (res) => {
                if (res.ok) {
                    setError("")
                    setSuccess("Logged in successfully! Redirecting to home...")
                    setTimeout(() => {
                        redirect("/")
                    }, 500)
                } else {
                    setError(res)
                }
            })
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <React.Fragment>
            <Navbar />
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "50px" }}>
                <TextField onChange={handleUsernameChange} id="username" autoComplete="username" required name="username" sx={{ width: "20%" }} label="Username"></TextField>
                <TextField onChange={handlePasswordChange} id="password" autoComplete="password" required type="password" name="password" sx={{ width: "20%", marginTop: "25px" }} label="Password"></TextField>
                <Button onClick={handleFormSubmit} type="submit" variant="contained" sx={{ width: "20%", margin: "25px 0", padding: "10px 0" }}>Log In</Button>
                <Link to={"/register"}>
                    <Typography>Or register...</Typography>
                </Link>
            </Box>
        </React.Fragment>
    )
}