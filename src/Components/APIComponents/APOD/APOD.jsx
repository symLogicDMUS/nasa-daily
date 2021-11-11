import React from "react";
import { apiKey } from "../../../apiKey";
import AppContext from "../../../context/AppContext";
import MediaCard from "../../MediaCard/MediaCard";
import { nasaAPICall } from "../../../API/nasaAPICall";
import { yyyy_mm_dd } from "../../../helpers/yyyy_mm_dd";
import SnackbarAlert from "../../SnackbarAlert/SnackbarAlert";
import ResponsiveDatePicker from "../../ResponsiveDatePicker/ResponsiveDatePicker";

export function APOD() {
    const { state, dispatch } = React.useContext(AppContext);

    const [date, setDate] = React.useState(new Date());

    const [APOD, setAPOD] = React.useState({
        copyright: "",
        date: "",
        explanation: "",
        hdurl: null,
        media_type: "",
        service_version: "",
        title: "",
        url: null,
    });

    React.useEffect(() => {
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
