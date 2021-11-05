import { useEffect, useState } from "react";
import { sampleAPI } from "./sampleAPI";
import { sliderMax } from "./sliderMax";
import EarthEventScatterChart from "./EarthEventScatterChart";
import { getArraySubset } from "../../../helpers/getArraySubset";
import CircularIntegration from "../../CircularIntegration/CircularIntegration";

export function EONET() {

    const [state, setState] = useState(null);
    useEffect(() => {
        // const events = getArraySubset(sampleAPI.events, sliderMax);
        const events = sampleAPI.events.slice(0, sliderMax)
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
