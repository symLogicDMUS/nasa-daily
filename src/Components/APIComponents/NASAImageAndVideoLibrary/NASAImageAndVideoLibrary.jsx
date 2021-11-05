import React, { useEffect, useState } from "react";
import { nasaAPICall } from "../../../API/nasaAPICall";
import RenderCode from "../../SnackbarAlert/RenderCode";

export default function NASAImageAndVideoLibrary() {
    const [state, setState] = useState(null);
    useEffect(() => {
        nasaAPICall(
            "https://images-api.nasa.gov/metadata/GSFC_20171102_Archive_e000579"
        ).then((r) => {
            setState(r);
        });
    });

    return (
        <div>
            <RenderCode>{state}</RenderCode>
        </div>
    );
}
