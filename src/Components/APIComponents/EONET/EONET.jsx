import { useEffect, useState } from "react";
// import { sliderMax } from "./sliderMax";
import EarthEventScatterChart from "./EarthEventScatterChart";
import CircularIntegration from "../../CircularIntegration/CircularIntegration";
import { getArraySubset } from "../../../helpers/getArraySubset";
import { sliderMax } from "./sliderMax";
import { sampleAPI } from "./sampleAPI";
// import { getArraySubset } from "../../../helpers/getArraySubset";
// import { nasaAPICall } from "../../../API/nasaAPICall";

export function EONET() {
    const [state, setState] = useState(null);
    // useEffect(() => {
    //     nasaAPICall("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events").then(
    //         (result) => {
    //             const events = getArraySubset(result.events, sliderMax);
    //             const data = [];
    //             events.forEach((event) => {
    //                 if (!!event.geometries) {
    //                     for (let geo of event.geometries) {
    //                         if (!!geo.coordinates) {
    //                             data.push({
    //                                 x: geo.coordinates[0],
    //                                 y: geo.coordinates[1],
    //                                 payload: {
    //                                     date: !!geo.date ? geo.date : NaN,
    //                                 },
    //                             });
    //                             if (!!event.title) {
    //                                 data[data.length - 1]["payload"]["title"] =
    //                                     event.title;
    //                             }
    //                             if (!!event.sources && !!event.sources.length) {
    //                                 data[data.length - 1]["payload"][
    //                                     "sources"
    //                                 ] = [];
    //                                 event.sources.forEach((source) => {
    //                                     data[data.length - 1]["payload"][
    //                                         "sources"
    //                                     ].push(source.url);
    //                                 });
    //                             }
    //                         }
    //                     }
    //                 }
    //             });
    //             setState(data);
    //         }
    //     );
    // }, []);

    useEffect(() => {
        const events = getArraySubset(sampleAPI.events, sliderMax);
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
                            data[data.length - 1]["payload"]["sources"] = [];
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
        setState(data);
    }, []);

    return (
        <>
            {!!state ? (
                <EarthEventScatterChart data={state} />
            ) : (
                <CircularIntegration />
            )}
        </>
    );
}
