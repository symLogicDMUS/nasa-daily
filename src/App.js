import { useMemo, useReducer } from "react";
import { appDefaultState } from "./appDefaultState";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./Components/ResponsiveDrawer/ResponsiveDrawer";
import { CssBaseline } from "@mui/material";
import AppContext from "./AppContext";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { reducer } from "./App.red";
import { APOD } from "./Components/APIComponents/APOD/APOD";
import "./App.scss";
import MarsRoverPhotos from "./Components/APIComponents/MarsRoverPhotos/MarsRoverPhotos";

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
                    </Switch>
                </Router>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
