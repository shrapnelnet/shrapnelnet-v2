// https://github.com/mui/material-ui/issues/31835#issuecomment-1154846767
import { Box } from "@mui/material/"
import Paper from "@mui/material/Paper"
import Skeleton from "@mui/material/Skeleton"

export default function PostSkeleton() {
    return (
        <Paper className="skeleton" sx={{ width: "45vw", height: "200px", margin: "0 auto 20px auto", padding: "1%" }}>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <Skeleton variant="circular" sx={{ width: "40px", height: "40px", marginRight: "10px" }} />
                <Skeleton variant="rounded" sx={{ width: "75px" }} />
            </Box>
            <Box>
                <Skeleton variant="rounded" sx={{ width: "100%", marginBottom: "10px" }} />
                <Skeleton variant="rounded" sx={{ width: "100%", marginBottom: "10px" }} />
                <Skeleton variant="rounded" sx={{ width: "100%" }} />
            </Box>
        </Paper>
    )
}