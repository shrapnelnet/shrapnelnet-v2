import React, { useState } from "react"
// https://github.com/mui/material-ui/issues/31835#issuecomment-1154846767
import { Box } from "@mui/material/"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Navbar from "./Navbar.jsx"
import Typography from "@mui/material/Typography"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
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
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            credentials: "include"
        })
            .then(async (res) => {
                if (res.ok) {
                    setError("")
                    setSuccess("Logged in successfully! Redirecting to home...")
                    setTimeout(() => {
                        navigate("/")
                    }, 750)
                } else {
                    setError("Are you sure that's an account?")
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
                <Typography sx={{ marginTop: "15px", color: "#00c100" }}>{success}</Typography>
                <Typography sx={{ color: "red" }}>{error}</Typography>
            </Box>
        </React.Fragment>
    )
}