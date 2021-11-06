import Box from "@mui/material/Box";
import { getSize } from "../../getSize";
import { sliderMax } from "./sliderMax";
import * as PropTypes from "prop-types";
import EventDialog from "../../EventDialog";
import { SearchField } from "./SearchField";
import NumberTextField from "./NumberTextField";
import { useTheme } from "@mui/material/styles";
import { CustomTooltip } from "../../CustomTooltip";
import { sliderDefaultValue } from "./sliderDefaultValue";
import React, { useEffect, useMemo, useState } from "react";
import { ReactComponent as EarthMap } from "../../earth outline.svg";
import { Link, Paper, Slider, Stack, Typography } from "@mui/material";
import {CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis} from "recharts";
import { useStyles } from "../../SimpleScatterChart.jss";

SearchField.propTypes = { theme: PropTypes.any };
export default function EarthEventScatterChart({ data }) {
    const [size, setSize] = useState(getSize());
    useEffect(() => {
        function handleResize() {
            setSize(getSize());
        }

        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = useStyles({ size });

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
            title: e.payload.payload.title,
            sources: e.payload.payload.sources,
            latitude: e.payload.x,
            longitude: e.payload.y,
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
                setEventNumber(1)
            } else {
                setEventNumber(sliderDefaultValue)
            }
        } else if (Number(n) > sliderMax) {
            setEventNumber(sliderMax)
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
        <Paper sx={{ padding: theme.spacing(2) }}>
            <ScatterChart
                width={size.width}
                height={size.height}
                style={{ zIndex: 2 }}
            >
                <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={
                        theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.2)"
                            : "rgba(0, 0, 0, 0.2)"
                    }
                />
                <XAxis
                    type="number"
                    dataKey="x"
                    name="latitude"
                    unit="º"
                    domain={[-180, 180]}
                    tick={{ fill: theme.palette.text.primary }}
                />
                <YAxis
                    type="number"
                    dataKey="y"
                    name="longitude"
                    unit="º"
                    domain={[-82, 82]}
                    tick={{ fill: theme.palette.text.primary }}
                />
                <ZAxis dataKey="payload" />
                <Tooltip content={<CustomTooltip />} />
                <Scatter
                    name="Earth"
                    data={events}
                    fill={theme.palette.secondary.main}
                    style={{ cursor: "pointer" }}
                    onClick={handlePointClick}
                />
            </ScatterChart>
            <EarthMap className={classes.earthMap} />
            <Box
                pl={3}
                pr={3}
                pt={6}
                sx={{ position: "relative", top: -size.height }}
            >
                <Box pt={2} pb={2}>
                    <Typography variant={"body"} sx={{ opacity: 0.9 }}>
                        Storms are regularly spotted in the tropics, dust storms
                        over deserts, forest fires in the summers. These events are
                        occurring constantly and{" "}
                        <Link
                            href={
                                "https://worldview.earthdata.nasa.gov/?v=-171.44332957697642,-46.546875,40.662079576976424,53.015625&t=2021-11-05-T19%3A42%3A52Z"
                            }
                        >
                            NASA EOSDIS’ Worldview
                        </Link>{" "}
                        tracks them all
                    </Typography>
                </Box>
                <Stack
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    direction={{ xs: "column", sm: "row" }}
                    pt={2}
                    pb={2}
                >
                    <NumberTextField
                        value={eventNumber}
                        onChange={adjustEventNumber}
                    />
                    <Slider
                        min={1}
                        max={sliderMax}
                        sx={{ width: "50%", transform: `translate(0, ${theme.spacing(0.5)})` }}
                        value={eventNumber}
                        valueLabelDisplay="auto"
                        onChange={adjustEventNumber}
                    />
                    <SearchField
                        theme={theme}
                        value={searchText}
                        handleChange={updateSearchText}
                    />
                </Stack>
            </Box>
            <EventDialog
                open={dialog.open}
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
