import { useMemo, useReducer } from "react";
import { appDefaultState } from "./context/appDefaultState";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./Components/ResponsiveDrawer/ResponsiveDrawer";
import MarsRoverPhotos from "./Components/APIComponents/MarsRoverPhotos/MarsRoverPhotos";
import { APOD } from "./Components/APIComponents/APOD/APOD";
import { EONET } from "./Components/APIComponents/EONET/EONET";
import { Box, CssBaseline } from "@mui/material";
import AppContext from "./context/AppContext";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import { reducer } from "./App.red";
import "./App.scss";

function App() {
    const [state, dispatch] = useReducer(reducer, appDefaultState);

    const contextValue = useMemo(
        () => ({ state, dispatch }),
        [state, dispatch]
    );

    const theme = useMemo(() => {
        if (state.isDarkMode) {
            document.body.className = "scrollbars-dark";
            return createTheme(darkTheme);
        } else {
            document.body.className = "scrollbars-light";
            return createTheme(lightTheme);
        }
    }, [state.isDarkMode]);

    return (
        <AppContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={(props) => (
                                <ResponsiveDrawer title={"Home"}>
                                    <APOD {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                        <Route
                            exact
                            path="/MarsRoverPhotos"
                            component={(props) => (
                                <ResponsiveDrawer
                                    title={
                                        "Mars Rover Photos: Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars"
                                    }
                                >
                                    <MarsRoverPhotos {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                        <Route
                            exact
                            path="/EONET"
                            component={(props) => (
                                <ResponsiveDrawer
                                    title={
                                        "EONET: The Earth Observatory Natural Event Tracker"
                                    }
                                >
                                    <EONET {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                    </Switch>
                </Router>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
