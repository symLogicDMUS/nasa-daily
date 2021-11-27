import * as React from "react";
import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactComponent as NASA } from "../APIComponents/APOD/APODMediaCard/nasa_logo.svg";
import { useTheme } from "@emotion/react";
import "./CircularIntegration.scss";

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
            <NASA
                className="app-logo"
                onClick={handleClick}
            />
        </Stack>
    );
}
