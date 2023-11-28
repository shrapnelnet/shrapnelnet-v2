import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
// https://github.com/mui/material-ui/issues/31835#issuecomment-1154846767
import { Box } from "@mui/material/"
import { Avatar } from "@mui/material"
import Navbar from "./Navbar.jsx"
import React, { useEffect, useState, Suspense } from "react"
import { useNavigate } from "react-router-dom"

export default function Account() {
    const navigate = useNavigate()
    const [logOut, setLogOut] = useState(false)
    const [username, setUsername] = useState("")
    const [showChangeUsername, setShowChangeUsername] = useState(false)

    useEffect(() => {
        fetch("/api/isLoggedIn")
            .then((res) => res.json())
            .then((res) => {
                setUsername(res.username)
            })
    }, [])

    useEffect(() => {
        if (logOut) {
            fetch("/api/logout")
                .then(() => {
                    navigate("/")
                })
        }
    }, [logOut]);

    return (
        <React.Fragment>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Avatar sx={{ marginRight: "20px", height: "56px", width: "56px" }} src={"/anon.jpg"} alt="profile picture" />
                    <Typography variant="h5">{username}</Typography>
                </Box>
            </Box>
            <Box className="profile-button-group" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                <Button onClick={() => { setShowChangeUsername(true) }}>Change username</Button>
                {
                    showChangeUsername
                    ?
                        <Typography>lol no</Typography>
                    :
                        null
                }
                <Button>Change profile picture</Button>
                <Button onClick={() => { setLogOut(true) }} sx={{ color: "red" }}>Log out</Button>
            </Box>
        </React.Fragment>
    )
}