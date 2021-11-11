import React, { Suspense } from "react";
import { Backdrop, Paper } from "@mui/material";
import { sliderMax } from "./sliderMax";
import EventDialog from "./EventDialog";
import ReScatterChart from "./ReScatterChart";
import EarthEventActions from "./EarthEventActions";
import { ReactComponent as EarthMap } from "./earth map.svg";
import { sliderDefaultValue } from "./sliderDefaultValue";
import { getContainerWidth } from "../../getContainerWidth";
import { useStyles } from "./EarthEventScatterChart.jss";
import CircularIntegration from "../../CircularIntegration/CircularIntegration";

export default function EarthEventScatterChart({ data }) {
    const [dialog, setDialog] = React.useState({
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

    const [searchText, setSearchText] = React.useState("");
    const updateSearchText = (e) => {
        setSearchText(e.target.value);
    };

    const [eventNumber, setEventNumber] = React.useState(sliderDefaultValue);
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

    const events = React.useMemo(() => {
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

    const [size, setSize] = React.useState({
        width: getContainerWidth(),
        height: getContainerWidth() * 0.486022,
    });
    React.useEffect(() => {
        function handleResize() {
            setSize({
                width: getContainerWidth(),
                height: getContainerWidth() * 0.486022,
            });
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = useStyles({ size });

    return (
        <Paper>
            <Suspense
                fallback={
                    <Backdrop sx={{ display: "flex" }} open>
                        <CircularIntegration style={{ margin: "auto" }} />
                    </Backdrop>
                }
            >
                <ReScatterChart
                    size={size}
                    events={events}
                    handlePointClick={handlePointClick}
                />
            </Suspense>
            <EarthMap className={classes.earthMap} />
            <EarthEventActions
                size={size}
                searchText={searchText}
                eventNumber={eventNumber}
                adjustEventNumber={adjustEventNumber}
                updateSearchText={updateSearchText}
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
