import makeStyles from "@mui/styles/makeStyles";

export const margin = -30;

export const useStyles = makeStyles(
    (theme) => ({
        earthMap: (props) => ({
            width: props.size.width,
            height: props.size.height,
            stroke: theme.palette.primary.main,
            fill: theme.palette.primary.main + "09",
            transform: `translate(0, -${props.size.height}px)`,
        }),
    }),
    { index: 1 }
);
