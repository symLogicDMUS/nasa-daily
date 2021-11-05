import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        color: theme.palette.mode === "dark" ? "#fff" : "#000",
        transition: theme.transitions.create("width"),
        width: "100%",
        maxWidth: "30vw",
        minWidth: 345,
    },
}));
