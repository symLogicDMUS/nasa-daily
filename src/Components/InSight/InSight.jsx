import { apiKey } from "../../apiKey";
import { nasaAPICall } from "../../API/nasaAPICall";
import React, { useEffect, useState } from "react";
import TableAndChartPage from "../TableAndChartPage/TableAndChartPage";

export default function InSight() {
    /**https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf*/
    const [rows, setRows] = useState({});
    useEffect(() => {
        nasaAPICall(
            `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
        ).then((result) => {
            if (result.sol_keys.length === 0) {
                setRows([
                    {
                        sol1: "N/A",
                        sol2: "N/A",
                        sol3: "N/A",
                        sol4: "N/A",
                        sol5: "N/A",
                        sol6: "N/A",
                        sol7: "N/A",
                    },
                    {
                        sol1: "N/A",
                        sol2: "N/A",
                        sol3: "N/A",
                        sol4: "N/A",
                        sol5: "N/A",
                        sol6: "N/A",
                        sol7: "N/A",
                    },
                    {
                        sol1: "N/A",
                        sol2: "N/A",
                        sol3: "N/A",
                        sol4: "N/A",
                        sol5: "N/A",
                        sol6: "N/A",
                        sol7: "N/A",
                    },
                    {
                        sol1: "N/A",
                        sol2: "N/A",
                        sol3: "N/A",
                        sol4: "N/A",
                        sol5: "N/A",
                        sol6: "N/A",
                        sol7: "N/A",
                    },
                    {
                        sol1: "N/A",
                        sol2: "N/A",
                        sol3: "N/A",
                        sol4: "N/A",
                        sol5: "N/A",
                        sol6: "N/A",
                        sol7: "N/A",
                    },
                    {
                        sol1: "N/A",
                        sol2: "N/A",
                        sol3: "N/A",
                        sol4: "N/A",
                        sol5: "N/A",
                        sol6: "N/A",
                        sol7: "N/A",
                    },
                ]);
            } else {
                setRows(result);
            }
        });
    }, []);

    return <TableAndChartPage tableRows={rows} />;
}
