import React from "react";
import Box from "@mui/material/Box";
import { sliderMax } from "./sliderMax";
import { SearchField } from "./SearchField";
import NumberTextField from "./NumberTextField";
import { useTheme } from "@mui/material/styles";
import { Link, Slider, Stack, Typography } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({}), { index: 1 });

export default function EarthEventActions({
    size,
    eventNumber,
    adjustEventNumber,
    searchText,
    updateSearchText,
}) {
    const theme = useTheme();

    return (
        <Box
            p={{ xs: 1, sm: 2, md: 3 }}
            sx={{
                transform: `translate(0, -${size.height}px)`,
            }}
        >
            <Stack mb={3} spacing={3} direction={{ xs: "column", sm: "row" }}>
                <NumberTextField
                    value={eventNumber}
                    onChange={adjustEventNumber}
                />
                <Slider
                    min={1}
                    max={sliderMax}
                    sx={{
                        transform: `translate(0, ${theme.spacing(0.5)})`,
                    }}
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
            <Box>
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
        </Box>
    );
}
