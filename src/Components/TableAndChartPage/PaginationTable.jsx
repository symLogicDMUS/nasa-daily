import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { PaginationTableActions } from "./PaginationTableActions";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {TableHead} from "@mui/material";

export default function PaginationTable({header, rows, colSpan}) {
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
            ? Math.max(0, (1 + tablePage) * rowsPerPage - rows.length)
            : 0;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    {header}
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(
                              tablePage * rowsPerPage,
                              tablePage * rowsPerPage + rowsPerPage
                          )
                        : rows
                    ).map((row, index) => {
                        const cells = [];
                        Object.values(row).forEach((cellValue, i) => {
                            cells.push(
                                <TableCell
                                    style={{ width: 160 }}
                                    align="right"
                                    key={i}
                                >
                                    {cellValue}
                                </TableCell>
                            );
                        });
                        return <TableRow key={index}>{cells}</TableRow>;
                    })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: "All", value: -1 },
                            ]}
                            colSpan={colSpan}
                            count={rows.length}
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
    );
}
