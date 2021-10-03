import {useEffect, useState} from "react";
import {nasaAPICall} from "../../API/nasaAPICall";
import RenderCode from "../SnackbarAlert/RenderCode";
import {apiKey} from "../../apiKey";
import {getLast7Days} from "../../helpers/getLast7Days";
import {CircularProgress} from "@mui/material";

const columns = [
    "flrID",
    "beginTime",
    "peakTime",
    "endTime",
    "classType",
    "sourceLocation",
    "activeRegionNum",
]

export default function DONKI() {

    const [donki, setDonki] = useState(null);
    useEffect(() => {
        const week = getLast7Days();
        nasaAPICall(
            `https://api.nasa.gov/DONKI/FLR?startDate=${week[0]}&endDate=${week[week.length-1]}&api_key=${apiKey}`
        )
        .then(days => {
            setDonki(days)
        })

    }, [])

    return (
        <>
            {donki ? (
                <RenderCode>
                    {donki}
                </RenderCode>
            ) : (
                <CircularProgress />
            )}
        </>
    )
}