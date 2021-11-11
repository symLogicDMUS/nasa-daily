import React from "react";
import { ReTooltip } from "./ReTooltip";
import { useTheme } from "@mui/material/styles";
import { margin } from "./EarthEventScatterChart.jss";
import {
    CartesianGrid,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
} from "recharts";

export default function ReScatterChart({ events, size, handlePointClick }) {
    const theme = useTheme();

    return (
        <ScatterChart
            width={size.width}
            height={size.height}
            style={{ zIndex: 2 }}
            margin={{
                top: margin,
                right: margin,
                bottom: margin,
                left: margin * 2,
            }}
        >
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
                domain={[-180, 180]}
                tick={{ fill: theme.palette.text.primary }}
            />
            <YAxis
                type="number"
                dataKey="y"
                name="longitude"
                unit="º"
                domain={[-90, 90]}
                tick={{ fill: theme.palette.text.primary }}
            />
            <ZAxis dataKey="payload" />
            <Tooltip content={<ReTooltip />} />
            <Scatter
                name="Earth"
                data={events}
                fill={theme.palette.secondary.main}
                style={{ cursor: "pointer" }}
                onClick={handlePointClick}
                ma
            />
        </ScatterChart>
    );
}
