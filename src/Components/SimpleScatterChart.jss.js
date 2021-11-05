import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        earthMap: (props) => ({
            position: "relative",
            left: "7.5%",
            top: -props.size.height * 0.99,
            width: props.size.width * 0.9,
            height: props.size.height * 0.9,
            stroke: theme.palette.primary.main,
            fill: theme.palette.primary.main + "09",
            right: theme.spacing(2),
            padding: theme.spacing(1),
        }),
    }),
    { index: 1 }
);
