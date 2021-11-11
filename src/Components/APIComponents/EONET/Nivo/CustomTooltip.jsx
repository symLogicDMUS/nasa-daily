import React, { useContext } from "react";
import AppContext from "../../../../context/AppContext";
import { useTheme } from "@mui/material/styles";
import { Alert, Backdrop, Paper, Typography } from "@mui/material";

export const CustomTooltip = (props) => {
    const theme = useTheme();

    if (
        !props.point ||
        !props.point.node ||
        !props.point.node.payload ||
        !props.point.node.payload.data
    ) {
        return (
            <Alert severity="warning">
                Error or no data to show for this event.
            </Alert>
        );
    }

    if (!props.point.node.payload.data.title) {
        return <Alert severity="warning">Event Title missing.</Alert>;
    }

    return (
        <Backdrop open={true}>
            <Paper
                sx={{
                    padding: "0.25rem",
                    color: theme.palette.text.primary,
                    background: theme.palette.background.paper + "aa",
                    zIndex: 1600,
                }}
            >
                <Typography>{props.point.node.data.title}</Typography>
            </Paper>
        </Backdrop>
    );
};
