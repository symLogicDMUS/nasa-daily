import React from "react";
import { useTheme } from "@mui/material/styles";
import { lighten, Paper, Typography } from "@mui/material";

export const CustomTooltip = ({ active, payload, label }) => {
    const theme = useTheme();
    if (active && payload && payload.length) {
        return (
            <Paper
                sx={{
                    padding: "0.25rem",
                    color: theme.palette.text.primary,
                    background: theme.palette.background.paper + "aa",
                }}
            >
                <Typography>{`${payload[2].value.title}`}</Typography>
            </Paper>
        );
    } else {
        return null;
    }
};
