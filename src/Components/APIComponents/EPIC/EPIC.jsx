import React, { useEffect, useState } from "react";
import { nasaAPICall } from "../../../API/nasaAPICall";
import RenderCode from "../../SnackbarAlert/RenderCode";
import { apiKey } from "../../../apiKey";

export default function EPIC(props) {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const result = await nasaAPICall(
                `https://api.nasa.gov/EPIC/api/natural/available?api_key=${apiKey}`
            );
            const dates = Object.values(result);
            return Promise.all(
                dates.map(
                    async (date) =>
                        await fetch(
                            `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`
                        )
                )
            );
        };
        getData().then((result) => {
            setData(result);
        });
    }, []);

    return <RenderCode>{data}</RenderCode>;
}
