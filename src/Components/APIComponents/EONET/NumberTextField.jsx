import clsx from "clsx";
import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/styles";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
import { NumberFormatCustom } from "./NumberFormatCustom";

export const useStyles = makeStyles(
    (theme) => ({
        input: {
            // [theme.breakpoints.up("sm")]: {
            //     width: "4rem",
            // },
            // [theme.breakpoints.down("sm")]: {
            //     width: "95%",
            // },
            minWidth: "3rem",
            borderRadius: 2,
            paddingLeft: "0.5rem",
            "& .MuiInput-input": {
                transform: `translate(0, ${theme.spacing(0.1)})`,
            },
        },
        active: {
            border: `1px solid ${theme.palette.primary.main}`,
            background: theme.palette.primary.main + "09",
        },
        inactive: {
            border: `1px solid ${theme.palette.divider}`,
        },
    }),
    { index: 1 }
);

export default function NumberTextField(props) {
    const { value, onChange } = props;

    const [active, setActive] = useState(false);
    const onFocus = () => setActive(true);
    const onBlur = () => setActive(false);

    const theme = useTheme();

    const classes = useStyles();

    return (
        <TextField
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            variant="standard"
            className={clsx(classes.input, {
                [classes.active]: active,
                [classes.inactive]: !active,
            })}
            InputProps={{
                inputComponent: NumberFormatCustom,
                disableUnderline: true,
            }}
        />
    );
}
