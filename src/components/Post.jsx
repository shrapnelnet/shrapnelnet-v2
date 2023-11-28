import React, { useState } from "react"
import { Avatar, Box, Chip, IconButton, Tooltip } from "@mui/material"
import Paper from "@mui/material/Paper"
import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography"
import { AddComment, Favorite, FavoriteBorder } from "@mui/icons-material"


export default function Post({author, content, date}) {
    const [comments, setComments] = useState(0)
    const [likes, setLikes]= useState(0)
    const [liked, setLiked] = useState(false)

    const profilePicture = "/anon.jpg"
    return (
        <Box className="content" sx={{ width: "50vw", margin: "0 auto 10px auto" }}>
            <Paper sx={{ maxWidth: "90%", margin: "0 auto" }}>
                <Box sx={{ padding: "2%", display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ marginRight: "5px" }} src={profilePicture} />
                    <Link to={`/profile/${author}`}>
                        <Chip label={`@${author ?? ""}`} variant={"outlined"} clickable />
                    </Link>
                    <Tooltip title={new Date(date).toLocaleString()}>
                        <Typography sx={{ marginLeft: "auto" }}>{new Date(date).toLocaleDateString()}</Typography>
                    </Tooltip>
                </Box>
                <Box sx={{ padding: "15px" }}>
                    <Typography>{content}</Typography>
                </Box>
                <Box className="button-group" sx={{ padding: "10px", display: "flex", alignItems: "center" }}>
                    <IconButton>
                        <AddComment />
                    </IconButton>
                    <Typography>{comments}</Typography>
                    <IconButton onClick={() => {setLiked(!liked)}}>
                        {
                            liked ?
                                <Favorite sx={{ color: "red" }} />
                                :
                                <FavoriteBorder />
                        }
                    </IconButton>
                    <Typography>{likes}</Typography>
                </Box>
            </Paper>
        </Box>
    )
}