import { Link, Dialog, DialogTitle, TableCell } from "@mui/material";
import React from "react";
import * as PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell } from "./StyledTableCell";
import TableBody from "@mui/material/TableBody";

export default function EventDialog({
    open,
    latitude,
    longitude,
    date,
    title,
    sources,
    onBackdropClick,
}) {
    const theme = useTheme();
    const fill = theme.palette.background.paper + "66";
    const captionSx = {
        background: fill,
        borderBottom: `1px solid ${theme.palette.divider}`,
    };
    const valueSx = { borderBottom: `1px solid ${theme.palette.divider}` };
    return (
        <Dialog open={open} onBackdropClick={onBackdropClick}>
            <DialogTitle
                sx={{ backgroundColor: theme.palette.background.paper + "88" }}
            >
                <strong>{title}</strong>
            </DialogTitle>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left" sx={captionSx}>
                                <strong>Date:</strong>
                            </TableCell>
                            <TableCell align="left" sx={valueSx}>
                                {String(new Date(date))}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left" sx={captionSx}>
                                <strong>Latitude:</strong>
                            </TableCell>
                            <TableCell align="left" sx={valueSx}>
                                {latitude}
                                {"º"}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left" sx={captionSx}>
                                <strong>Longitude:</strong>
                            </TableCell>
                            <TableCell align="left" sx={valueSx}>
                                {longitude}
                                {"º"}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell align="left" sx={captionSx}>
                                <strong>Sources:</strong>
                            </StyledTableCell>
                            <StyledTableCell align="left" sx={valueSx}>
                                <Link href={sources}>{sources}</Link>
                                {/*{sources.map((s, index) => (*/}
                                {/*    <Link key={index} href={s}>{s}</Link>*/}
                                {/*))}*/}
                            </StyledTableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Dialog>
    );
}

EventDialog.propTypes = {
    dialog: PropTypes.shape({
        latitude: PropTypes.any,
        sources: PropTypes.string,
        title: PropTypes.string,
        open: PropTypes.bool,
        longitude: PropTypes.any,
    }),
    onBackdropClick: PropTypes.func,
};
