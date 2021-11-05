import React from "react";
import { Paper, Stack } from "@mui/material";
import PrimarySearch from "./PrimarySearch";
import { useStyles } from "./BottomBarWithSearch.jss";

function BottomBarWithSearch(props) {
    const { handleChange, ...other } = props;

    const classes = useStyles();

    return (
        <Paper className={classes.bottomBar} {...other}>
            <Stack p={2} className={classes.bottomBarContent}>
                <PrimarySearch handleChange={handleChange} />
            </Stack>
        </Paper>
    );
}

export default BottomBarWithSearch;
