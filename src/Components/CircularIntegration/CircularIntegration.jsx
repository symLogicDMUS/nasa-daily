import * as React from "react";
import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactComponent as NASA } from "../APIComponents/APOD/APODMediaCard/nasa_logo.svg";
import { useTheme } from "@emotion/react";

export default function CircularIntegration({ ...props }) {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const timer = React.useRef();
    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    const theme = useTheme();

    return (
        <Stack {...props}>
            <CircularProgress
                size={100}
                thickness={2}
                sx={{ color: "#ff3f23" }}
            />
            <NASA
                style={{
                    width: 65,
                    height: 65,
                    position: "relative",
                    left: 20,
                    top: -80,
                }}
                onClick={handleClick}
            />
        </Stack>
    );
}
