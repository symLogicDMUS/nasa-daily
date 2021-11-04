import {IconButton, Popover, Stack} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import React from "react";
import * as PropTypes from "prop-types";

export default function RoverPhoto(props) {
    const {parentState, current, prevPhoto, nextPhoto} = props;
    return (
        <Stack direction={"row"}>
            <IconButton
                onClick={prevPhoto}
                disabled={parentState.index === 0}
                style={{zIndex: 2}}
                size={"large"}
            >
                <ArrowBack fontSize={"large"}/>
            </IconButton>
            <img
                src={current.img_src}
                alt={current.id}
                style={{minWidth: "100%", maxWidth: '100%', position: 'relative', right: 56}}
            />
            <IconButton
                onClick={nextPhoto}
                disabled={
                    parentState.index ===
                    parentState.photos.length - 1
                }
                style={{position: 'relative', right: 112, zIndex: 2}}
                size={"large"}
            >
                <ArrowForward fontSize={"large"}/>
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