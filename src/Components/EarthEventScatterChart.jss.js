import makeStyles from "@mui/styles/makeStyles";
import { drawerWidth } from "./ResponsiveDrawer/ResponsiveDrawer.jss";

export const useStyles = makeStyles(
    (theme) => ({
        earthMap: {
            [theme.breakpoints.up("xs")]: {
                "--width": `calc(100vw - ${theme.spacing(2)})`,
                width: "var(--width)",
                height: "calc(var(--width) * 0.38993)",
                position: "relative",
                top: "calc(var(--width) * -0.38993)",
            },
            [theme.breakpoints.up("sm")]: {
                "--width": `calc(100vw - ${theme.spacing(4)})`,
                width: "var(--width)",
                height: "calc(var(--width) * 0.38993)",
                position: "relative",
                top: "calc(var(--width) * -0.38993)",
            },
            [theme.breakpoints.up("md")]: {
                "--width": `calc(100vw - ${drawerWidth}px - ${theme.spacing(6)})`,
                width: "var(--width)",
                height: "calc(var(--width) * 0.38993)",
                position: "relative",
                top: "calc(var(--width) * -0.38993)",
            },
            zIndex: 0,
            stroke: theme.palette.primary.main,
            fill: theme.palette.primary.main + "09",
        },
        scatterPlot: {
            zIndex: 2,
            [theme.breakpoints.up("xs")]: {
                "--width": `calc(100vw - ${theme.spacing(2)})`,
                width: "var(--width)",
                height: "calc(var(--width) * 0.38993)",
            },
            [theme.breakpoints.up("sm")]: {
                "--width": `calc(100vw - ${theme.spacing(4)})`,
                width: "var(--width)",
                height: "calc(var(--width) * 0.38993)",
            },
            [theme.breakpoints.up("md")]: {
                "--width": `calc(100vw - ${drawerWidth}px - ${theme.spacing(
                    6
                )})`,
                width: "var(--width)",
                height: "calc(var(--width) * 0.38993)",
            },
        },
        actions: {
            [theme.breakpoints.up("xs")]: {
                "--width": `calc(100vw - ${theme.spacing(2)})`,
                position: "relative",
                top: "calc(var(--width) * -0.38993)",
            },
            [theme.breakpoints.up("sm")]: {
                "--width": `calc(100vw - ${theme.spacing(4)})`,
                position: "relative",
                top: "calc(var(--width) * -0.38993)",
            },
            [theme.breakpoints.up("md")]: {
                "--width": `calc(100vw - ${drawerWidth}px - ${theme.spacing(6)})`,
                position: "relative",
                top: "calc(var(--width) * -0.38993)",
            },
            zIndex: 0,
        },
    }),
    { index: 1 }
);
