const darkTheme = {
    breakpoints: {
        keys: [
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
        ],
        values: {
            xs: 0,
            sm: 900,
            md: 1200,
            lg: 1536,
            xl: 2304,
        }
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
            dark: "#007fff",
            light: "#e3f2fd",
            contrastText: "#1c252b",
        },
        secondary: {
            main: "#ffca47",
            light: "#fffd79",
            dark: "#c89a06",
            contrastText: "#1c252b",
        },
        background: {
            paper: "#001e3c",
            default: "#071a2f",
        },
    },
};

export default darkTheme;
