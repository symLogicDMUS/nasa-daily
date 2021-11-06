export const getScatterPlotTheme = (theme) => ({
    background: "#ffffff00",
    textColor: theme.palette.text.secondary,
    fontSize: "0.875rem",
    axis: {
        domain: {
            line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
            },
        },
        ticks: {
            line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
            },
        },
    },
    grid: {
        line: {
            stroke: theme.palette.divider,
            strokeWidth: 0.5,
            strokeStyle: 'dashed',
        },
    },
});
