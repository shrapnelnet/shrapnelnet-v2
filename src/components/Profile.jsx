import React from "react"
import Navbar from "./Navbar.jsx"
import { Avatar, Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useParams } from "react-router"
import Button from "@mui/material/Button"

export default function Profile() {
    const { username } = useParams()

    return (
        <React.Fragment>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Avatar sx={{ marginRight: "20px", height: "56px", width: "56px" }} src={"/anon.jpg"} alt="profile picture" />
                    <Typography variant="h5">{username}</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <Button>Add Friend</Button>
                <Button>Message</Button>
            </Box>
        </React.Fragment>
    )
}