import React, { useContext } from "react";
import { Alert, Snackbar } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import AppContext from "../../AppContext";

function SnackbarAlert(props) {
    const { state, dispatch } = useContext(AppContext);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch({ type: "close-alert" });
    };

    return (
        <div {...props}>
            <Snackbar
                open={state.alert.open}
                onClose={handleClose}
                autoHideDuration={state.alert.autoHideDuration}
            >
                <Alert onClose={handleClose} severity={state.alert.severity}>
                    <AlertTitle>{state.alert.title}</AlertTitle>
                    {state.alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default SnackbarAlert;
