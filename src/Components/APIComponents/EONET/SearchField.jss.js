import makeStyles from "@mui/styles/makeStyles";
import { alpha, lighten } from "@mui/material/styles";

export const useStyles = makeStyles(
    (theme) => ({
        paper: {
            backgroundColor:
                theme.palette.mode === "dark" ? "#132f4c" : "#f0f0f0",
            "&:hover": {
                backgroundColor:
                    theme.palette.mode === "dark"
                        ? lighten("#132f4c", 0.05)
                        : lighten("#f0f0f0", 0.35),
            },
            width: "50%",
            padding: theme.spacing(1, 1, 1, 2),
            display: "flex",
        },
        input: {
            width: "100%",
            border: "none",
            outline: "none",
            background: "none",
            fontFamily: "Roboto",
            fontSize: theme.typography.htmlFontSize,
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            "&::placeholder": {
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.htmlFontSize,
                color: "#ffffff66",
            },
            transform: `translate(0, -0.1rem)`,
        },
    }),
    { index: 1 }
);
