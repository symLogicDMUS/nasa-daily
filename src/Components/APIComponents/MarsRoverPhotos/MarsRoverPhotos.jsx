import { apiKey } from "../../../apiKey";
import Paper from "@mui/material/Paper";
import React, { useContext, useEffect, useReducer } from "react";
import { Stack } from "@mui/material";
import CircularIntegration from "../../CircularIntegration/CircularIntegration";
import ResponsiveDatePicker from "../../ResponsiveDatePicker/ResponsiveDatePicker";
import { nasaAPICall } from "../../../API/nasaAPICall";
import AppContext from "../../../context/AppContext";
import SnackbarAlert from "../../SnackbarAlert/SnackbarAlert";
import { useTheme } from "@mui/material/styles";
import { reducer } from "./MarsRoverPhotos.red";
import RoverPhoto from "./RoverPhoto";

export default function MarsRoverPhotos() {
    const theme = useTheme();

    const { state, dispatch } = useContext(AppContext);

    const [localState, localDispatch] = useReducer(reducer, {
        date: new Date(),
        sol: 1000,
        photos: [],
        index: 0,
    });

    useEffect(() => {
        nasaAPICall(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${localState.sol}&page=2&api_key=${apiKey}`
        ).then((result) => {
            localDispatch({ type: "update-photos", photos: result.photos });
        });
    }, [localState.sol]);

    return (
        <>
            <Paper
                style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                }}
            >
                {localState.photos.length > 0 ? (
                    <RoverPhoto
                        parentState={localState}
                        current={localState.photos[localState.index]}
                        prevPhoto={() =>
                            localDispatch({ type: "decrement-index" })
                        }
                        nextPhoto={() =>
                            localDispatch({ type: "increment-index" })
                        }
                    />
                ) : (
                    <CircularIntegration />
                )}
            </Paper>
            <Paper
                style={{
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    padding: theme.spacing(1),
                }}
            >
                <ResponsiveDatePicker
                    value={localState.date}
                    onChange={(newDate) =>
                        localDispatch({
                            type: "update-date",
                            date: newDate,
                        })
                    }
                />
            </Paper>
            <SnackbarAlert />
        </>
    );
}
