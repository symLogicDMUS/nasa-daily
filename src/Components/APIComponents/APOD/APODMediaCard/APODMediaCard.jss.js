import { makeStyles } from "@mui/styles";
import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
} from "../../../ResponsiveDrawer/ResponsiveDrawer.jss";

const padding = 24;

export const useStyles = makeStyles((theme) => ({
    root: {
        "--containerHeightSm": `calc(100vh - ${
            appBarHeightSm + padding * 2
        }px)`,
        "--containerHeightMd": `calc(100vh - ${
            appBarHeightMd + padding * 2
        }px)`,
        "--containerHeightLg": `calc(100vh - ${
            appBarHeightLg + padding * 2
        }px)`,
    },
    container: {
        maxHeight: "var(--containerHeightMd)",
        "@media (min-width:0px) and (orientation: landscape)": {
            maxHeight: "var(--containerHeightSm)",
        },
        [theme.breakpoints.up("sm")]: {
            maxHeight: "var(--containerHeightLg)",
        },
    },
}));
