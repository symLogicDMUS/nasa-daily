import { useContext, useEffect, useState } from "react";
import { sliderMax } from "./sliderMax";
import { nasaAPICall } from "../../../API/nasaAPICall";
import EarthEventScatterChart from "./EarthEventScatterChart";
import { Paper } from "@mui/material";
import { getArraySubset } from "../../../helpers/getArraySubset";
import CircularIntegration from "../../CircularIntegration/CircularIntegration";
import AppContext from "../../../context/AppContext";
import MapDefaultMessage from "./MapDefaultMessage";

export function EONET() {
    const { state, dispatch } = useContext(AppContext);
    const [source, setSource] = useState(null);
    useEffect(() => {
        nasaAPICall("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events").then(
            (result) => {
                const events = getArraySubset(result.events, sliderMax);
                const data = [];
                events.forEach((event) => {
                    if (!!event.geometries) {
                        for (let geo of event.geometries) {
                            if (!!geo.coordinates) {
                                data.push({
                                    x: geo.coordinates[0],
                                    y: geo.coordinates[1],
                                    payload: {
                                        date: !!geo.date ? geo.date : NaN,
                                    },
                                });
                                if (!!event.title) {
                                    data[data.length - 1]["payload"]["title"] =
                                        event.title;
                                }
                                if (!!event.sources && !!event.sources.length) {
                                    data[data.length - 1]["payload"][
                                        "sources"
                                    ] = [];
                                    event.sources.forEach((source) => {
                                        data[data.length - 1]["payload"][
                                            "sources"
                                        ].push(source.url);
                                    });
                                }
                            }
                        }
                    }
                });
                setSource(data);
            }
        );
    }, []);

    return (
        <>
            {!!source ? (
                <>
                    <EarthEventScatterChart data={source} />
                    <MapDefaultMessage />
                </>
            ) : (
                <Paper sx={{ display: "flex", height: "100%" }}>
                    <CircularIntegration style={{ margin: "auto" }} />
                </Paper>
            )}
        </>
    );
}
