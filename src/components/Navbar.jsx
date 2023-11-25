import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

export default function Navbar(isLoggedIn) {
    return (
        <React.Fragment>
            <Box id={"nav-button-parent"}>
                <Box sx={{ display: "flex", padding: "30px 0", background: "#111", boxShadow: "0 0 0 3px #242424" }}>
                    <Box sx={{ display: "flex", flex: "1", justifyContent: "space-evenly" }}>
                        <Link to={"/"}>
                            <Button>Home</Button>
                        </Link>
                        <Button>Friends</Button>
                    </Box>
                    <Box sx={{ display: "flex", margin: "0 auto" }}>
                        <Typography variant={"h3"}>Shrapnelnet</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flex: "1", justifyContent: "space-evenly" }}>
                        <Button>Messages</Button>
                        <Link to={"/login"}>
                            <Button>Login</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}