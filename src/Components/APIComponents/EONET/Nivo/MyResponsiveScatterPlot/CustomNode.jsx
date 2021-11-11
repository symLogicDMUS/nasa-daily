import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import EventDialog from "../../EventDialog";

export const useStyles = makeStyles(
    (theme) => ({
        node: {
            cursor: "pointer",
            "&:hover": {
                fill: "red",
            },
        },
    }),
    { index: 1 }
);

const CustomNode = ({ node }) => {
    const classes = useStyles();
    return (
        <>
            <g
                transform={`translate(${node.x},${node.y})`}
                style={{ cursor: "pointer" }}
            >
                <circle r={node.size} fill={node.color} />
            </g>
        </>
    );
};

export default CustomNode;
