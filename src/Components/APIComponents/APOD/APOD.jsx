import React, { useContext, useEffect, useState } from "react";
import { apiKey } from "../../../apiKey";
import AppContext from "../../../AppContext";
import MediaCard from "../../MediaCard/MediaCard";
import ResponsiveDatePicker from "../../ResponsiveDatePicker/ResponsiveDatePicker";
import RenderCode from "../../SnackbarAlert/RenderCode";
import { nasaAPICall } from "../../../API/nasaAPICall";
import SnackbarAlert from "../../SnackbarAlert/SnackbarAlert";
import { CircularProgress } from "@mui/material";
import { yyyy_mm_dd } from "../../../helpers/yyyy_mm_dd";

export function APOD() {
    const { state, dispatch } = useContext(AppContext);

    const [date, setDate] = useState(new Date());

    const [APOD, setAPOD] = useState({
        copyright: "",
        date: "",
        explanation: "",
        hdurl: null,
        media_type: "",
        service_version: "",
        title: "",
        url: null,
    });

    useEffect(() => {
        nasaAPICall(
            `https://api.nasa.gov/planetary/apod?date=${yyyy_mm_dd(
                date
            )}&api_key=${apiKey}`
        )
            .then((response) => {
                setAPOD({
                    copyright: response.copyright,
                    date: response.date,
                    explanation: response.explanation,
                    hdurl: response.hdurl,
                    media_type: response.media_type,
                    service_version: response.service_version,
                    title: response.title,
                    url: response.url,
                });
            })
            .catch((err) => {
                console.log("ERROR retrieving picture of the day:", err);
                dispatch({
                    type: "new-alert",
                    alert: {
                        ...state.alert,
                        message: `ERROR retrieving picture of the day: ${err}`,
                        severity: "error",
                        open: true,
                    },
                });
            });
    }, [date]);

    const component = !APOD.url || !APOD.hdurl ? null : "img";

    return (
        <>
            <MediaCard
                url={APOD.url}
                date={APOD.date}
                title={APOD.title}
                copyright={APOD.copyright}
                mediaType={APOD.media_type}
                explanation={APOD.explanation}
                component={component}
            >
                <ResponsiveDatePicker
                    value={date}
                    onChange={(newValue) => {
                        setAPOD({
                            ...APOD,
                            url: null,
                            hdurl: null,
                        });
                        setDate(newValue);
                    }}
                />
            </MediaCard>
            <SnackbarAlert />
        </>
    );
}