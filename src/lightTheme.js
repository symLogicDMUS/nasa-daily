import { lighten } from "@mui/material";

const lightTheme = {
    palette: {
        mode: "light",
        primary: {
            main: "#0a66c2",
        },
        secondary: {
            main: "#FF9900",
            light: "#ffca47",
            dark: "#c66a00",
        },
        background: {
            default: lighten("#0a66c2", 0.9),
        },
    },
};

export default lightTheme;
