import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

export const useStyles = makeStyles(
    (theme) => ({
        bottomBar: {
            position: "sticky",
            bottom: 0,
        },
        bottomBarContent: {
            backgroundColor: alpha("#fff", 0.05),
        },
    }),
    { index: 1 }
);
