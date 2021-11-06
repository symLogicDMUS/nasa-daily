import React, { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import {Paper, Typography} from "@mui/material";
import { getScatterPlotTheme } from "./getScatterPlotTheme";
import { ResponsiveScatterPlotCanvas } from "@nivo/scatterplot";
import {CustomTooltip} from "../APIComponents/EONET/CustomTooltip";

export function MyResponsiveScatterPlot({ data }) {
    const theme = useTheme();
    const scatterPlotTheme = useMemo(
        () => getScatterPlotTheme(theme),
        [theme.palette.mode]
    );

    return (
        <ResponsiveScatterPlotCanvas
            data={data}
            xFormat=">-.2f"
            yFormat=">-.2f"
            blendMode="normal"
            theme={scatterPlotTheme}
            colors={[theme.palette.secondary.main]}
            xScale={{ type: "linear", min: -180, max: 180 }}
            yScale={{ type: "linear", min: -82, max: 82 }}
        />
    );
}
