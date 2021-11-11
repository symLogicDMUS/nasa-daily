import React from "react";
import { useTheme } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

export const ReTooltip = ({ active, payload, label }) => {
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
                <Typography>
                    <strong>{`${payload[2].value.title}`}</strong>
                </Typography>
            </Paper>
        );
    } else {
        return null;
    }
};
