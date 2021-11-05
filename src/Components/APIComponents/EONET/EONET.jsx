import { useEffect, useState } from "react";
import { nasaAPICall } from "../../../API/nasaAPICall";
import RenderCode from "../../SnackbarAlert/RenderCode";
import SimpleScatterChart from "../../SimpleScatterChart";

export function EONET() {
    const [state, setState] = useState(null);
    useEffect(() => {
        nasaAPICall("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events").then(
            (r) => {
                console.log(r);
                setState(r);
            }
        );
    }, []);

    return <SimpleScatterChart />;
}
