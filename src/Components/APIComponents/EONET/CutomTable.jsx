import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./StyledTableCell";
import { StyledTableRow } from "./StyledTableRow";

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            Dessert (100g serving)
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            Latitude
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            Longitude
                        </StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Sources</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell align="right">
                            {latitude}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            {longitude}
                        </StyledTableCell>
                        <StyledTableCell align="right">{date}</StyledTableCell>
                        <StyledTableCell align="right">
                            {sources}
                        </StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
