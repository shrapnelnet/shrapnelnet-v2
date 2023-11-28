import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#cafebabe"
        },
        background: {
            default: "#1a1a1a"
        }
    },
    typography: {
        fontFamily: "Roboto, system-ui"
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "white",
                    textShadow: "0 0 3px whitesmoke"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    textDecoration: "none"
                }
            }
        }
    }
})