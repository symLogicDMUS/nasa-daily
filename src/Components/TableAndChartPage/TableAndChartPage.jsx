import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "../TabPanel/TabPanel";
import { a11yProps } from "../TabPanel/a11yProps";
import PaginationTable from "./PaginationTable";

export default function TableAndChartPage({ tableRows, graphs }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Table" {...a11yProps(0)} />
                    <Tab label="Graphs" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <PaginationTable>{tableRows}</PaginationTable>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {graphs}
            </TabPanel>
        </Box>
    );
}
