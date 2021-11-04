import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { NumberFormatCustom } from "./NumberFormatCustom";

export default function SolInput({ value, handleChangeSol }) {
    return (
        <Box
            sx={{
                "& > :not(style)": {
                    m: 1,
                },
            }}
        >
            <TextField
                value={value}
                onChange={handleChangeSol}
                label="Enter Sol..."
                variant="outlined"
                name="numberformat"
                helperText="Martian day (1-1000)"
                id="formatted-numberformat-input"
                InputProps={{
                    inputComponent: NumberFormatCustom,
                }}
            />
        </Box>
    );
}
