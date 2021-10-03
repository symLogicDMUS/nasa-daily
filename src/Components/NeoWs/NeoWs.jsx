import * as React from "react";
import { useEffect, useState } from "react";
import { nasaAPICall } from "../../API/nasaAPICall";
import { apiKey } from "../../apiKey";
import RenderCode from "../SnackbarAlert/RenderCode";
import {
    CircularProgress,
    MenuItem, Paper,
    Select,
    Table,
    TableBody,
    TableCell, TableContainer,
} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import {PaginationTableActions} from "../TableAndChartPage/PaginationTableActions";
import {yyyy_mm_dd} from "../../helpers/yyyy_mm_dd";

export default function NeoWs() {
    const [neo, setNeo] = useState({});
    useEffect(() => {
        const date = new Date();
        const dateStr = yyyy_mm_dd(date)
        nasaAPICall(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateStr}&end_date=${dateStr}&api_key=${apiKey}`
        ).then(async (result) => {
            setNeo(Object.values(result.near_earth_objects)[0]);
        });
    }, []);

    const [tablePage, setTablePage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(7);

    const handleChangePage = (event, newPage) => {
        setTablePage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setTablePage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        tablePage > 0
            ? Math.max(0, (1 + tablePage) * rowsPerPage - neo.length)
            : 0;

    const units = ["kilometers", "miles", "feet", "meters"];
    const shorthandUnits = {"kilometers": "km", "miles": "mi", "feet": "ft", "meters": "m"}

    const [minUnit, setMinUnit] = useState("kilometers");
    const minUnits = units;

    const [maxUnit, setMaxUnit] = useState("kilometers");
    const maxUnits = units;

    const getEstimatedDiameterMin = (estimatedDiameter, unit) => {
        const estimatedDiameterMin = {};
        for (let unitType of Object.keys(estimatedDiameter)) {
            estimatedDiameterMin[unitType] =
                estimatedDiameter[unitType].estimated_diameter_min;
        }
        return estimatedDiameterMin[unit];
    };

    const getEstimatedDiameterMax = (estimatedDiameter, unit) => {
        const estimatedDiameterMax = {};
        for (let unitType of Object.keys(estimatedDiameter)) {
            estimatedDiameterMax[unitType] =
                estimatedDiameter[unitType].estimated_diameter_max;
        }
        return estimatedDiameterMax[unit];
    };

    return (
        <>
            <RenderCode childName={"NeoWs"}>{neo}</RenderCode>
            {!neo ? (
                <CircularProgress />
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell key="id" style={{ minWidth: 170 }}>
                                    ID
                                </TableCell>
                                <TableCell key="name" style={{ minWidth: 170 }}>
                                    Name
                                </TableCell>
                                <TableCell
                                    key="absolute_magnitude_h"
                                    style={{ minWidth: 170 }}
                                >
                                    Absolute Magnitude H
                                </TableCell>
                                <TableCell
                                    key={"estimated_diameter_min"}
                                    style={{ minWidth: 170 }}
                                >
                                    <Select
                                        value={minUnit}
                                        variant={"standard"}
                                        style={{marginRight: '0.5rem'}}
                                        onChange={(e) => setMinUnit(e.target.value)}
                                    >
                                        {minUnits.map((unit) => (
                                            <MenuItem value={unit}>{shorthandUnits[unit]}</MenuItem>
                                        ))}
                                    </Select>
                                    Estimated Diameter Min
                                </TableCell>
                                <TableCell
                                    key={"estimated_diameter_max"}
                                    style={{ minWidth: 170 }}
                                >
                                    <Select
                                        value={maxUnit}
                                        variant={"standard"}
                                        style={{marginRight: '0.5rem'}}
                                        onChange={(e) => setMaxUnit(e.target.value)}
                                    >
                                        {maxUnits.map((unit) => (
                                            <MenuItem value={unit}>{shorthandUnits[unit]}</MenuItem>
                                        ))}
                                    </Select>
                                    Estimated Diameter Max
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                    ? Object.values(neo).slice(
                                        tablePage * rowsPerPage,
                                        tablePage * rowsPerPage + rowsPerPage
                                    )
                                    : Object.values(neo)
                            ).map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>
                                        {row.absolute_magnitude_h}
                                    </TableCell>
                                    <TableCell>
                                        {getEstimatedDiameterMin(
                                            row.estimated_diameter,
                                            minUnit,
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {getEstimatedDiameterMax(
                                            row.estimated_diameter,
                                            maxUnit,
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[
                                        5,
                                        7,
                                        10,
                                        25,
                                        { label: "All", value: -1 },
                                    ]}
                                    colSpan={5}
                                    count={neo.length}
                                    rowsPerPage={rowsPerPage}
                                    page={tablePage}
                                    SelectProps={{
                                        inputProps: {
                                            "aria-label": "rows per page",
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={PaginationTableActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            )}
        </>
    );
}
