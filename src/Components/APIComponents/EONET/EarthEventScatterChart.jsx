import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { sliderMax } from "./sliderMax";
import EventDialog from "./EventDialog";
import React, { useMemo, useState } from "react";
import { useTheme } from "@mui/material/styles";
import EarthEventActions from "./EarthEventActions";
import { sliderDefaultValue } from "./sliderDefaultValue";
import { ReactComponent as EarthMap } from "../../earth outline.svg";
import { MyResponsiveScatterPlot }
    from "../../MyResponsiveScatterPlot/MyResponsiveScatterPlot";
import { useStyles } from "../../EarthEventScatterChart.jss";

export default function EarthEventScatterChart({ data }) {
    const classes = useStyles();

    const theme = useTheme();

    const [dialog, setDialog] = useState({
        open: false,
        title: "",
        sources: "",
        longitude: null,
        latitude: null,
    });

    const handlePointClick = (e) => {
        setDialog({
            open: true,
            latitude: e.payload.x,
            longitude: e.payload.y,
            title: e.payload.payload.title,
            date: String(e.payload.payload.date),
            sources: e.payload.payload.sources,
        });
    };

    const [searchText, setSearchText] = useState("");
    const updateSearchText = (e) => {
        setSearchText(e.target.value);
    };

    const [eventNumber, setEventNumber] = useState(sliderDefaultValue);
    const adjustEventNumber = (e) => {
        const n = e.target.value;
        if (isNaN(Number(n))) {
            if (n === "") {
                setEventNumber(1);
            } else {
                setEventNumber(sliderDefaultValue);
            }
        } else if (Number(n) > sliderMax) {
            setEventNumber(sliderMax);
        } else {
            setEventNumber(n);
        }
    };

    const events = useMemo(() => {
        let newData = data;
        if (searchText !== "") {
            newData = data.filter((event) =>
                event.payload.title
                    .toLowerCase()
                    .startsWith(searchText.toLowerCase())
            );
        }
        return newData.slice(0, eventNumber);
    }, [searchText, eventNumber, data, data.length]);

    return (
        <Paper
            sx={{
                background:
                    theme.palette.mode === "dark" ? "#0d294655" : "inherit",
            }}
        >
            <Box className={classes.scatterPlot}>
                <MyResponsiveScatterPlot
                    data={[{ id: "events", data: events }]}
                />
            </Box>
            <EarthMap className={classes.earthMap} />
            <EarthEventActions
                eventNumber={eventNumber}
                adjustEventNumber={adjustEventNumber}
                updateSearchText={updateSearchText}
                searchText={searchText}
            />
            <EventDialog
                open={dialog.open}
                date={dialog.date}
                title={dialog.title}
                sources={dialog.sources}
                latitude={dialog.latitude}
                longitude={dialog.longitude}
                onBackdropClick={() =>
                    setDialog({
                        open: false,
                        title: "",
                        sources: "",
                        latitude: null,
                        longitude: null,
                    })
                }
            />
        </Paper>
    );
}
