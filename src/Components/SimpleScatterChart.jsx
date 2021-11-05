import {getSize} from "./getSize";
import {Paper,} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import React, {useEffect, useState} from "react";
import {CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis,} from "recharts";
import {CustomTooltip} from "./CustomTooltip";
import EventDialog from "./EventDialog";
import {ReactComponent as EarthMap} from "./earth outline.svg";
import {useStyles} from "./SimpleScatterChart.jss";

export default function SimpleScatterChart({ data }) {
    const [size, setSize] = useState(getSize());
    useEffect(() => {
        function handleResize() {
            setSize(getSize());
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = useStyles({ size });

    const theme = useTheme();

    const [dialog, setDialog] = useState({
        open: false,
        title: "",
        sources: "",
        longitude: null,
        latitude: null,
    });

    const handlePointClick = (e) => {
        setDialog({
            open: true,
            title: e.payload.payload.title,
            sources: e.payload.payload.sources,
            latitude: e.payload.x,
            longitude: e.payload.y,
        });
    };

    return (
        <Paper sx={{ padding: theme.spacing(2) }}>
            <ScatterChart width={size.width} height={size.height} style={{zIndex: 2}}>
                <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={
                        theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.2)"
                            : "rgba(0, 0, 0, 0.2)"
                    }
                />
                <XAxis
                    type="number"
                    dataKey="x"
                    name="latitude"
                    unit="º"
                    tick={{ fill: theme.palette.text.primary }}
                />
                <YAxis
                    type="number"
                    dataKey="y"
                    name="longitude"
                    unit="º"
                    tick={{ fill: theme.palette.text.primary }}
                />
                <ZAxis dataKey="payload" />
                <Tooltip content={<CustomTooltip />} />
                <Scatter
                    name="Earth"
                    data={data}
                    fill={theme.palette.secondary.main}
                    style={{ cursor: "pointer" }}
                    onClick={handlePointClick}
                />
            </ScatterChart>
            <EarthMap className={classes.earthMap} />
            <EventDialog
                open={dialog.open}
                title={dialog.title}
                sources={dialog.sources}
                latitude={dialog.latitude}
                longitude={dialog.longitude}
                onBackdropClick={() =>
                    setDialog({
                        open: false,
                        title: "",
                        sources: "",
                        latitude: null,
                        longitude: null,
                    })
                }
            />
        </Paper>
    );
}
