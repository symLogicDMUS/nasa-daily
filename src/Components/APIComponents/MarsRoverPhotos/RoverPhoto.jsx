import { IconButton, Stack } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React from "react";
import * as PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

export default function RoverPhoto(props) {
    const { parentState, current, prevPhoto, nextPhoto } = props;

    const theme = useTheme();

    return (
        <Stack direction={"row"}>
            <IconButton
                onClick={prevPhoto}
                disabled={parentState.index === 0}
                style={{
                    zIndex: 2,
                    maxWidth: 48,
                    maxHeight: 48,
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: theme.spacing(1),
                    background:
                        parentState.index === 0
                            ? theme.palette.action.disabled
                            : theme.palette.secondary.main,
                }}
                size={"large"}
            >
                <ArrowBack fontSize={"large"} />
            </IconButton>
            <img
                alt={current.id}
                src={current.img_src}
                style={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    position: "relative",
                    right: 56,
                }}
            />
            <IconButton
                onClick={nextPhoto}
                disabled={parentState.index === parentState.photos.length - 1}
                style={{
                    position: "relative",
                    right: 112,
                    zIndex: 2,
                    maxWidth: 48,
                    maxHeight: 48,
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginRight: theme.spacing(1),
                    background:
                        parentState.index === parentState.photos.length - 1
                            ? theme.palette.action.disabled
                            : theme.palette.secondary.main,
                }}
                size={"large"}
            >
                <ArrowForward fontSize={"large"} />
            </IconButton>
        </Stack>
    );
}

RoverPhoto.propTypes = {
    current: PropTypes.any,
    onClick: PropTypes.func,
    localState: PropTypes.any,
    onClick1: PropTypes.func,
};
