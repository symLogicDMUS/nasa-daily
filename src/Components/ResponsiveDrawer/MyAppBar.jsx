import * as React from "react";
import {useContext} from "react";
import {Tooltip} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import {GitHub} from "@mui/icons-material";
import AppContext from "../../AppContext";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { drawerWidth } from "./ResponsiveDrawer.jss";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";


export function MyAppBar(props) {
    const { handleDrawerToggle, title } = props;

    const { state, dispatch } = useContext(AppContext);

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
                <img
                    src={"/Images/title.svg"}
                    alt={"title of app"}
                    style={{height: 24, marginRight: '1rem', cursor: "pointer"}}
                    onClick={() => window.location.href = "https://api.nasa.gov/"}
                />
                <Tooltip title={title}>
                    <Typography
                        variant="subtitle1"
                        noWrap
                        component="div"
                        sx={{ opacity: 0.9, marginRight: 'auto' }}
                    >
                        {title}
                    </Typography>
                </Tooltip>
                <Tooltip title={"Toggle light/dark theme"}>
                    <IconButton
                        onClick={() =>
                            dispatch({
                                type: "update-mode",
                                isDarkMode: !state.isDarkMode,
                            })
                        }
                        size="large"
                    >
                        {state.isDarkMode ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                </Tooltip>

                <Tooltip title="Author's GitHub">
                    <IconButton
                        onClick={() =>
                            (window.location.href =
                                "https://github.com/symLogicDMUS/word-morph-image")
                        }
                        size="large"
                    >
                        <GitHub />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}
