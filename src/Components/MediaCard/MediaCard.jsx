import * as React from "react";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActions, CardMedia } from "@mui/material";
import { getContainerHeight } from "./getContainerHeight";
import CircularIntegration from "../CircularIntegration/CircularIntegration";
import { useTheme } from "@mui/material/styles";

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

    const theme = useTheme();

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
                        height: height * 0.7 - bottom,
                    }}
                >
                    <CircularIntegration style={{ margin: "auto" }} />
                </CardMedia>
            )}
            <CardActions sx={{ height: bottom, padding: theme.spacing(2) }}>
                {children}
            </CardActions>
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(2),
                    margin: 0,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ padding: theme.spacing(2) }}
            >
                {explanation}
            </Typography>
        </Card>
    );
}
