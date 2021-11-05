import { alpha, lighten, styled } from "@mui/material/styles";

export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor:
        theme.palette.mode === "dark"
            ? alpha(theme.palette.common.white, 0.15)
            : "#f0f0f0",
    "&:hover": {
        backgroundColor:
            theme.palette.mode === "dark"
                ? alpha(theme.palette.common.white, 0.25)
                : lighten("#f0f0f0", 0.35),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "auto",
    },
    maxWidth: "30vw",
    minWidth: 345,
}));
