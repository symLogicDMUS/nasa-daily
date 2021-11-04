import * as React from "react";
import Box from "@mui/material/Box";
import { ReactComponent as NASA } from "../MediaCard/nasa_logo.svg";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";

export default function CircularIntegration() {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const buttonSx = {
        background: "#00000000",
        width: "10vw",
        height: "10vw",
        boxShadow: "none",
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", margin: "auto" }}>
            <Box sx={{ m: 1, position: "relative" }}>
                <Fab
                    aria-label="save"
                    color="primary"
                    sx={buttonSx}
                    onClick={handleButtonClick}
                >
                    <NASA />
                </Fab>
                <CircularProgress
                    size={"10vw"}
                    sx={{
                        color: "#fc3d21ff",
                        position: "absolute",
                        top: -6,
                        left: -6,
                        width: "10vw",
                        height: "10vw",
                        zIndex: 1,
                    }}
                />
            </Box>
        </Box>
    );
}
