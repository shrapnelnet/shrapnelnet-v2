import React, { useEffect, useState } from "react"
// https://github.com/mui/material-ui/issues/31835#issuecomment-1154846767
import { Box } from "@mui/material/"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import { Collapse, IconButton, List, ListItemButton, ListItemText } from "@mui/material"

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [menuExpanded, setMenuExpanded] = useState(false)

    useEffect(() => {
        fetch("/api/isLoggedIn")
            .then((res) => res.json())
            .then((res) => {
                setIsLoggedIn(res.isLoggedIn)
            })
            .catch(() => {
                setIsLoggedIn(false)
            })
    }, []);

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
                    <Box sx={{ position: "absolute", top: "39px", left: "20px" }}>
                        <IconButton onClick={() => { setMenuExpanded(!menuExpanded) }} id={"collapse"}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: "flex", margin: "0 auto" }}>
                        <Typography variant={"h3"}>Shrapnelnet</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flex: "1", justifyContent: "space-evenly" }}>
                        <Button>Messages</Button>
                        {
                            isLoggedIn
                            ?
                                <Link to={`/account`}>
                                    <Button>Account</Button>
                                </Link>
                            :
                                <Link to={"/login"}>
                                    <Button>Login</Button>
                                </Link>
                        }
                    </Box>
                </Box>
            </Box>
            <Collapse sx={{ marginTop: "2px", boxShadow: "0 0 0 3px #242424" }} className="menuBreakpoint" in={menuExpanded}>
                <Box sx={{ width: "100vw", background: "#111", position: "relative", zIndex: "1051" }}>
                    <List>
                        <Link to="/">
                            <ListItemButton>
                                <ListItemText>Home</ListItemText>
                            </ListItemButton>
                        </Link>
                        <Link to={"#"}>
                            <ListItemButton>
                                <ListItemText>Friends</ListItemText>
                            </ListItemButton>
                        </Link>
                        <Link to={"#"}>
                            <ListItemButton>
                                <ListItemText>Messages</ListItemText>
                            </ListItemButton>
                        </Link>
                        <Link to={isLoggedIn ? "/account" : "/login"}>
                            <ListItemButton>
                                <ListItemText>
                                    {
                                        isLoggedIn ?
                                            <>
                                                Account
                                            </> :
                                            <>
                                                Log In
                                            </>
                                    }
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </List>
                </Box>
            </Collapse>
        </React.Fragment>
    )
}