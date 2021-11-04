import * as React from "react";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActions, CardMedia } from "@mui/material";
import { getContainerHeight } from "./getContainerHeight";
import CircularIntegration from "../CircularIntegration/CircularIntegration";

export default function MediaCard({
    component,
    url,
    title,
    explanation,
    children,
}) {
    const [height, setHeight] = useState(getContainerHeight());
    useEffect(() => {
        function handleResize() {
            setHeight(getContainerHeight());
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const bottom = 64;

    return (
        <Card>
            {!!url ? (
                <CardMedia
                    image={url}
                    alt={title}
                    component={component}
                    height={height * 0.7 - bottom}
                />
            ) : (
                <CardMedia
                    component={"div"}
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        // background: '#000',
                        height: height * 0.7 - bottom,
                    }}
                >
                    <CircularIntegration />
                </CardMedia>
            )}
            <CardContent
                sx={{ maxHeight: height * 0.3 - bottom, overflowY: "scroll" }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {explanation}
                </Typography>
            </CardContent>
            <CardActions sx={{ height: bottom }}>{children}</CardActions>
        </Card>
    );
}
