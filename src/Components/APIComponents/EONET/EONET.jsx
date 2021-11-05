import { useEffect, useState } from "react";
import RenderCode from "../../SnackbarAlert/RenderCode";
import SimpleScatterChart from "../../SimpleScatterChart";
import { sampleAPI } from "./sampleAPI";
import { getArraySubset } from "../../../helpers/getArraySubset";
import { maxNumPoints } from "./maxNumPoints";
import CircularIntegration from "../../CircularIntegration/CircularIntegration";

export function EONET() {
    // const [state, setState] = useState(null);
    // useEffect(() => {
    //     nasaAPICall("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events").then(
    //         (r) => {
    //             console.log(r);
    //             setState(r);
    //         }
    //     );
    // }, []);

    const [state, setState] = useState(null);
    useEffect(() => {
        // const events = getArraySubset(sampleAPI.events, maxNumPoints);
        const events = sampleAPI.events.slice(0, maxNumPoints)
        const data = [];
        events.forEach((event) => {
            if (!!event.geometries) {
                for (let geo of event.geometries) {
                    if (!!geo.coordinates) {
                        data.push({
                            x: geo.coordinates[0],
                            y: geo.coordinates[1],
                            payload: {},
                        });
                        if (!!event.title) {
                            data[data.length - 1]["payload"]["title"] =
                                event.title;
                        }
                        if (!!event.sources && !!event.sources.length) {
                            data[data.length - 1]["payload"]["sources"] = []
                            event.sources.forEach(source => {
                                data[data.length - 1]["payload"]["sources"].push(source.url)
                            })
                        }
                    }
                }
            }
        });
        setState(data);
    }, []);

    return (
        <>
            <RenderCode>{state}</RenderCode>
            {!!state ? (
                <SimpleScatterChart data={state} />
            ) : (
                <CircularIntegration />
            )}
        </>
    );
}
