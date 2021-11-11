import React, { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { getScatterPlotTheme } from "./getScatterPlotTheme";
import { ResponsiveScatterPlotCanvas } from "@nivo/scatterplot";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { CustomTooltip } from "../CustomTooltip";
import CustomNode from "./CustomNode";

export function MyResponsiveScatterPlot({ data, handlePointClick }) {
    const theme = useTheme();
    const scatterPlotTheme = useMemo(
        () => getScatterPlotTheme(theme),
        [theme.palette.mode]
    );

    return (
        <ResponsiveScatterPlot
            data={data}
            nodeSize={6}
            xFormat=">-.2f"
            yFormat=">-.2f"
            blendMode="normal"
            theme={scatterPlotTheme}
            colors={[theme.palette.secondary.main]}
            xScale={{ type: "linear", min: -180, max: 180 }}
            yScale={{ type: "linear", min: -82, max: 82 }}
            nodeComponent={CustomNode}
            // renderNode={
            //     (ctx, props) => {
            //         ctx.fillStyle = '#e55'
            //         ctx.beginPath()
            //         ctx.arc(props.data.x, props.data.y, 5, 0, 2*Math.PI)
            //         ctx.fill()
            //         console.log("PROPS", props)
            //     }
            // }
            tooltip={(point) => <CustomTooltip point={point} />}
        />
    );
}
