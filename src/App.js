import { useMemo, useReducer } from "react";
import { appDefaultState } from "./appDefaultState";
import { imageAPIRoutes } from "./routes/imageAPIRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./Components/ResponsiveDrawer/ResponsiveDrawer";
import TableAndChartPage from "./Components/TableAndChartPage/TableAndChartPage";
import { CssBaseline } from "@mui/material";
import AppContext from "./AppContext";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { reducer } from "./App.red";
import { Home } from "./Home";
import "./App.scss";
import InSight from "./Components/InSight/InSight";
import NeoWs from "./Components/NeoWs/NeoWs";
import DONKI from "./Components/DONKI/DONKI";

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
                                    <Home {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                        <Route
                            exact
                            path={"/InSight"}
                            component={(props) => (
                                <ResponsiveDrawer title={"InSight"}>
                                    <InSight {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                        <Route
                            exact
                            path={"/AsteroidsNeoWs"}
                            component={(props) => (
                                <ResponsiveDrawer title={"Asteroids - NeoWs: Near Earth Object Web Service"}>
                                    <NeoWs {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                        <Route
                            exact
                            path={"/DONKI"}
                            component={(props) => (
                                <ResponsiveDrawer title={"DONKI: Space Weather Database Of Notifications, Knowledge, Information"}>
                                    <DONKI {...props} />
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
