import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function ResponsiveDatePicker({ value, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                disableFuture
                value={value}
                onChange={onChange}
                views={["year", "month", "day"]}
                renderInput={(params) => (
                    <TextField
                        variant={"standard"}
                        sx={{ marginTop: "auto" }}
                        {...params}
                    />
                )}
            />
        </LocalizationProvider>
    );
}
