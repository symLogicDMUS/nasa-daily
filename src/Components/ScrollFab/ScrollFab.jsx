import Portal from "@mui/material/Portal";
import { Fab, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowDownward } from "@mui/icons-material";
import { getNewDisplayValue } from "./getNewDisplayValue";
import { useEffect, useState } from "react";
import {vh} from "../../helpers/windowMeasurements";

export default function ScrollFab({
    showOnce = false,
    element = "html",
}) {
    const [display, setDisplay] = useState(true);
    useEffect(() => {
        function handleChange() {
            setDisplay(
                getNewDisplayValue(showOnce, element)
            );
        }
        window.addEventListener("scroll", handleChange);
        return (_) => {
            window.removeEventListener("scroll", handleChange);

        };
    });

    const scroll = () => {
        if (element==="html") {
            window.document.documentElement.scrollTop = vh() * 0.5;
        } else {
            window.document.body.scrollTop = vh() * 0.5;
        }
    };

    const theme = useTheme();

    return (
        <>
            {display && (
                <Portal>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        sx={{
                            width: "100vw",
                            position: "fixed",
                            bottom: 0,
                            zIndex: 1600,
                            padding: theme.spacing(3),
                        }}
                    >
                        <Fab size={"small"} onClick={scroll}>
                            <ArrowDownward fontSize={"small"} />
                        </Fab>
                    </Stack>
                </Portal>
            )}
        </>
    );
}
