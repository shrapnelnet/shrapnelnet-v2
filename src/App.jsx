import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar.jsx"
import Entry from "./components/Entry.jsx"
import PostSkeleton from "./components/PostSkeleton.jsx"
import Post from "./components/Post.jsx"

export default function App({isLoggedIn}) {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        fetch("/api/getposts", {
            body: JSON.stringify({offset}),
            method: "POST"
        })
            .then((res) => res.json())
            .then((res) => {
                setPosts(res)
                setOffset(offset + 10)
                setLoading(false)

            })
    }, [])

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
        </React.Fragment>
    )
}