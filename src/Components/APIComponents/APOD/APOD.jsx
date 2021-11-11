import React, { useEffect, useMemo, useState } from "react";
import { apiKey } from "../../../apiKey";
import AppContext from "../../../context/AppContext";
import APODMediaCard from "./APODMediaCard/APODMediaCard";
import { nasaAPICall } from "../../../API/nasaAPICall";
import { yyyy_mm_dd } from "../../../helpers/yyyy_mm_dd";
import SnackbarAlert from "../../SnackbarAlert/SnackbarAlert";
import { getContainerHeight } from "./APODMediaCard/getContainerHeight";
import { CardMedia } from "@mui/material";
import {useTheme} from "@mui/material";

export function APOD() {
    const { state, dispatch } = React.useContext(AppContext);

    const [APOD, setAPOD] = React.useState({
        date: new Date(),
        explanation: "",
        media_type: "",
        title: "",
        url: null,
    });

    React.useEffect(() => {
        nasaAPICall(
            `https://api.nasa.gov/planetary/apod?date=${yyyy_mm_dd(
                APOD.date
            )}&api_key=${apiKey}`
        )
            .then((response) => {
                setAPOD({
                    date: APOD.date,
                    explanation: response.explanation,
                    media_type: response.media_type,
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
    }, [APOD.date]);

    const [cardHeight, setCardHeight] = useState(getContainerHeight());
    useEffect(() => {
        function handleResize() {
            setCardHeight(getContainerHeight());
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const theme = useTheme()

    const mediaComponent = () => {
        const bottom = 64;
        if (!APOD.url) {
            return null;
        }
        switch (APOD.media_type) {
            case "video":
                return (
                    <iframe
                        src={APOD.url}
                        title={APOD.title}
                        style={{
                            width: "100%",
                            height: cardHeight * 0.7 - bottom,
                            border: `1px solid ${theme.palette.divider}`
                        }}
                    />
                );
            default:
                return (
                    <CardMedia
                        image={APOD.url}
                        alt={APOD.title}
                        component="img"
                        height={cardHeight * 0.7 - bottom}
                    />
                );
        }
    };

    return (
        <>
            <APODMediaCard
                date={APOD.date}
                title={APOD.title}
                explanation={APOD.explanation}
                onDateChange={(newValue) => {
                    setAPOD({
                        ...APOD,
                        url: null,
                        date: newValue,
                    });
                }}
            >
                {mediaComponent()}
            </APODMediaCard>
            <SnackbarAlert />
        </>
    );
}
