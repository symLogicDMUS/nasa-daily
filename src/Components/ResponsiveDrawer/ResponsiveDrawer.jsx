import * as React from "react";
import * as PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { DrawerListItems } from "./DrawerListItems";
import { drawerWidth } from "./ResponsiveDrawer.jss";
import { MyAppBar } from "./MyAppBar";

function ResponsiveDrawer(props) {
    const { window, title, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <MyAppBar handleDrawerToggle={handleDrawerToggle} title={title} />
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    <DrawerListItems />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "none", md: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    <DrawerListItems />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1 }}
                p={{ xs: 1, sm: 2, md: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;
