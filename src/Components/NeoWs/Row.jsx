import * as React from "react";
import TableRow from "@mui/material/TableRow";
import { Collapse, Table, TableBody, TableCell } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TableHead from "@mui/material/TableHead";
import { KeyboardArrowUpIcon } from "./KeyboardArrowUpIcon";
import { KeyboardArrowDownIcon } from "./KeyboardArrowDownIcon";

export default function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.kilometers}</TableCell>
                <TableCell align="right">{row.meters}</TableCell>
                <TableCell align="right">{row.miles}</TableCell>
                <TableCell align="right">{row.feet}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                {/*<TableHead>*/}
                                {/*    <TableRow>*/}
                                {/*        <TableCell>Date</TableCell>*/}
                                {/*        <TableCell>Customer</TableCell>*/}
                                {/*        <TableCell align="right">Amount</TableCell>*/}
                                {/*        <TableCell align="right">Total price ($)</TableCell>*/}
                                {/*    </TableRow>*/}
                                {/*</TableHead>*/}
                                {/*<TableBody>*/}
                                {/*    {row.history.map((historyRow) => (*/}
                                {/*        <TableRow key={historyRow.date}>*/}
                                {/*            <TableCell component="th" scope="row">*/}
                                {/*                {historyRow.date}*/}
                                {/*            </TableCell>*/}
                                {/*            <TableCell>{historyRow.customerId}</TableCell>*/}
                                {/*            <TableCell align="right">{historyRow.amount}</TableCell>*/}
                                {/*            <TableCell align="right">*/}
                                {/*                {Math.round(historyRow.amount * row.price * 100) / 100}*/}
                                {/*            </TableCell>*/}
                                {/*        </TableRow>*/}
                                {/*    ))}*/}
                                {/*</TableBody>*/}
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}