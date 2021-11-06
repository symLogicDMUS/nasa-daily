import { lighten } from "@mui/material";

const lightTheme = {
    palette: {
        mode: "light",
        primary: {
            main: "#0a66c2",
        },
        secondary: {
            main: "#60ad5e",
            light: "#91df8c",
            dark: "#2e7d32",
        },
        background: {
            default: lighten("#0a66c2", 0.9),
        },
    },
};

export default lightTheme;
