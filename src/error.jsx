import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function Error() {
    return (
        <React.Fragment>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "2%" }}>
                <img width={250} height={250} src="/boykisser.png" alt="image of a fluffy cat"/>
                <Typography sx={{ marginTop: "2%" }} variant={"h5"}>You like 404s, don't you?</Typography>
            </Box>
        </React.Fragment>
    )
}