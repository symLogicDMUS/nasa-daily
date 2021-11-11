import * as React from "react";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActions, CardMedia } from "@mui/material";
import { getContainerHeight } from "./getContainerHeight";
import CircularIntegration from "../../../CircularIntegration/CircularIntegration";
import { useTheme } from "@mui/material/styles";
import ResponsiveDatePicker from "../../../ResponsiveDatePicker/ResponsiveDatePicker";
import RenderCode from "../../../RenderCode/RenderCode";

export default function APODMediaCard({
    date,
    title,
    explanation,
    onDateChange,
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

    const media = !!children ? (
        children
    ) : (
        <CardMedia
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                height: height * 0.7 - bottom,
            }}
            component="div"
        >
            <CircularIntegration style={{ margin: "auto" }} />
        </CardMedia>
    );

    return (
        <Card>
            {media}
            <CardActions sx={{ height: bottom, padding: theme.spacing(2) }}>
                <ResponsiveDatePicker value={date} onChange={onDateChange} />
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
