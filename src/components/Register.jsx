import React, { useState } from "react"
import Navbar from "./Navbar.jsx"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
// https://github.com/mui/material-ui/issues/31835#issuecomment-1154846767
import { Box } from "@mui/material/"
import { redirect } from "react-router-dom"

export default function Register() {
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
        await fetch("https://register.shrapnelnet.workers.dev", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        })
            .then((res) => {
                if (res.ok) {
                    setError("")
                    setSuccess("Registered successfully! Redirecting to login...")
                    setTimeout(() => {
                        redirect("/login")
                    }, 500)
                } else {
                    setError("Something went wrong! Maybe this username is in use.")
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
                <TextField onChange={handleUsernameChange} id="username" autoComplete="username" required name="username" sx={{ width: "20vw" }} label="Username"></TextField>
                <TextField onChange={handlePasswordChange} id="password" required autoComplete="new-password" type="password" name="password" sx={{ width: "20%", marginTop: "25px" }} label="Password"></TextField>
                <Button id={"register"} onClick={handleFormSubmit} type="submit" variant="contained" sx={{ width: "20%", margin: "25px 0", padding: "10px 0" }}>Register</Button>
                <Link to={"/login"}>Or log in...</Link>
                <Typography sx={{ margin: "40px" }}>If you forget your password, you're stuffed. remember it stupido</Typography>
                <Typography color={"red"}>{error}</Typography>
                <Typography color={"#00d000"}>{success}</Typography>
            </Box>
        </React.Fragment>
    )
}