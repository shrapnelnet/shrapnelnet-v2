import Typography from "@mui/material/Typography"
import Fab from "@mui/material/Fab"
// https://github.com/mui/material-ui/issues/31835#issuecomment-1154846767
import { Box } from "@mui/material/"
import React, { useEffect, useRef, useState } from "react"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import CircularProgress from "@mui/material/CircularProgress"
import SendIcon from "@mui/icons-material/Send"
import { useNavigate } from "react-router-dom"

export default function Entry() {
    const [error, setError] = useState("")
    const [keyCount, setKeyCount] = useState(0)
    const [isMaxLength, setIsMaxLength] = useState(false)
    const [content, setContent] = useState("")
    const [makePost, setMakePost] = useState(false)
    const navigate = useNavigate()
    const ref = useRef(true)

    const handleKeyDown = (event) => {
        const contentRaw = event.target.value
        const len = event.target.value.length
        setContent(contentRaw)
        setKeyCount(len)
    }

    const handlePost = () => {
        if (keyCount > 150 || keyCount === 0) {
            setError("don't even try to post this! dumbass!")
            return
        }
        setMakePost(true)
    }

    useEffect(() => {
        if (keyCount > 150) {
            setIsMaxLength(true)
        } else {
            setIsMaxLength(false)
        }
    }, [keyCount])

    useEffect(() => {
        if (ref.current) {
            ref.current = false
            return
        }
        if (!makePost)
            return
        fetch("/api/post", {
            method: "POST",
            credentials: "same-origin",
            body: JSON.stringify({content}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                if (!res.ok) {
                    setMakePost(false)
                    setError("sorry! post failed.")
                } else {
                    setError("")
                    navigate(0)
                }
            })
    }, [makePost]);

    return (
        <>
            <Box className="content" sx={{ margin: "0 auto 20px", width: "50vw" }}>
                <Paper sx={{ padding: "5px 25px 0 25px", margin: "4% auto", maxWidth: "90%" }}>
                    <Box sx={{ width: "100%", height: "fit-content", margin: "5% auto", display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
                        <TextField className="entry" onChange={handleKeyDown} rows="2" variant="outlined" multiline placeholder="Share your awful opinion!"></TextField>
                        <Typography sx={{ color: "red", marginTop: "10px" }}>{error}</Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography sx={{ margin: "20px 20px 20px 0" }}>{keyCount}/150</Typography>
                            <Box sx={{ flex: "auto" }}>
                                <CircularProgress size={25} variant="determinate" value={(keyCount / 150) * 100} />
                            </Box>
                            <Fab onClick={handlePost} disabled={isMaxLength} variant="extended" color="primary" sx={{ margin: "20px 0 20px 20px", display: "flex", alignItems: "center" }}>
                                <SendIcon sx={{ marginRight: "5px" }} />
                                <Typography>Send</Typography>
                            </Fab>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    )
}