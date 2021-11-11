import {useState} from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import ScrollFab from "../../ScrollFab/ScrollFab";
import { ReactComponent as GlobeIcon } from "./globe_icon.svg";
import {Alert, AlertTitle, Paper, Snackbar, useMediaQuery} from "@mui/material";

export default function MapDefaultMessage() {
    const [defaultAlert, setDefaultAlert] = useState(true);

    const lg = useMediaQuery("(min-width: 1440px)");

    const theme = useTheme();

    return (
        <>
            <Snackbar open={defaultAlert}>
                <Paper>
                    <Alert
                        severity="info"
                        color="warning"
                        iconMapping={{
                            info: (
                                <GlobeIcon fill={theme.palette.warning.light} />
                            ),
                        }}
                        action={
                            <Button
                                size="small"
                                color="warning"
                                variant="outlined"
                                onClick={() => setDefaultAlert(false)}
                                sx={{ color: theme.palette.warning.main }}
                            >
                                <strong>Got It</strong>
                            </Button>
                        }
                    >
                        <AlertTitle sx={{ color: theme.palette.warning.light }}>
                            Click a point on the map for more info.
                        </AlertTitle>
                    </Alert>
                </Paper>
            </Snackbar>
            {!defaultAlert && lg && (
                <ScrollFab showOnce />
            )}
        </>
    );
}