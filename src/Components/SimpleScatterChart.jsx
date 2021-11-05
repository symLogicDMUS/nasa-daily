import {data} from "./data";
import {getSize} from "./getSize";
import {Paper} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import React, {useEffect, useState} from "react";
import {ReactComponent as EarthMap} from "./earth outline.svg";
import {CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis,} from "recharts";
import {useStyles} from "./SimpleScatterChart.jss";

export default function SimpleScatterChart() {
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

    const classes = useStyles({size});

    const theme = useTheme()

    return (
        <Paper sx={{padding: theme.spacing(2)}}>
            <ScatterChart width={size.width} height={size.height}>
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
                    tick={{ fill: theme.palette.text.primary }}
                />
                <YAxis
                    type="number"
                    dataKey="y"
                    name="longitude"
                    tick={{ fill: theme.palette.text.primary }}
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="A school" data={data} fill={theme.palette.secondary.main} />
            </ScatterChart>
            <EarthMap className={classes.earthMap} />
        </Paper>
    );
}
