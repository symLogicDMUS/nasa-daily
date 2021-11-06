import React from "react";
import { Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./SearchField.jss";

export function SearchField({ value, handleChange }) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <SearchIcon sx={{ marginRight: "0.25rem" }} />
            <input
                value={value}
                onChange={handleChange}
                placeholder={"search event by name..."}
                className={classes.input}
            />
        </Paper>
    );
}
