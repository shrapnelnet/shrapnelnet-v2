import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar.jsx"
import Entry from "./components/Entry.jsx"
import PostSkeleton from "./components/PostSkeleton.jsx"
import Post from "./components/Post.jsx"
import { Box } from "@mui/material"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import CircularProgress from "@mui/material/CircularProgress"

export default function App({isLoggedIn}) {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [offset, setOffset] = useState(0)
    const [paginateLoading, setPaginateLoading] = useState(false)
    const [noMorePosts, setNoMorePosts] = useState(false)

    useEffect(() => {
        fetch("/api/getposts", {
            body: JSON.stringify({offset}),
            method: "POST"
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.length < 10) {
                    setNoMorePosts(true)
                    if (res.length === 0)
                        return
                }
                setPosts([...posts, ...res])
                setOffset(offset + 10)
                setLoading(false)
                setPaginateLoading(false)
            })
    }, [paginateLoading])

    return (
        <React.Fragment>
            <Navbar isLoggedIn={isLoggedIn} />
            <Entry />
            {
                loading
                ?
                    <React.Fragment>
                        <PostSkeleton />
                        <PostSkeleton />
                        <PostSkeleton />
                    </React.Fragment>
                :
                    posts
                    ?
                        posts.map((post, index) => (
                            <Post key={index} content={post.content} date={post.date} author={post.username} />
                        ))
                    :
                        null
            }
            <Box sx={{ display: "flex", justifyContent: "center", padding: "20px 0 100px 0" }}>
                {
                    noMorePosts
                    ?
                        <Typography>So this is the end...</Typography>
                    :
                        <React.Fragment>
                            <Button onClick={() => {setPaginateLoading(true)}} variant={"contained"}>Load More</Button>
                            <CircularProgress sx={{ marginLeft: "20px", display: paginateLoading ? "block": "none" }} />
                        </React.Fragment>
                }
            </Box>
        </React.Fragment>
    )
}