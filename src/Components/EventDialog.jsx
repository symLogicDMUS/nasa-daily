import {
    Dialog,
    DialogContent,
    DialogTitle,
    Link,
    ListItem,
    Typography,
} from "@mui/material";
import List from "@mui/material/List";
import React from "react";
import * as PropTypes from "prop-types";

export default function EventDialog({
    open,
    latitude,
    longitude,
    title,
    sources,
    onBackdropClick,
}) {
    return (
        <Dialog open={open} onBackdropClick={onBackdropClick}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Typography>Latitude: {latitude}</Typography>
                <Typography>Longitude: {longitude}</Typography>
                <Typography>Sources:</Typography>
                {!!sources && (
                    <List disablePadding>
                        {sources.map((source, index) => (
                            <ListItem
                                key={index}
                                sx={{ padding: 0, paddingLeft: "1rem" }}
                            >
                                <Link href={source}>○ {source}</Link>
                            </ListItem>
                        ))}
                    </List>
                )}
            </DialogContent>
        </Dialog>
    );
}

EventDialog.propTypes = {
    dialog: PropTypes.shape({
        latitude: PropTypes.any,
        sources: PropTypes.string,
        title: PropTypes.string,
        open: PropTypes.bool,
        longitude: PropTypes.any,
    }),
    onBackdropClick: PropTypes.func,
};
