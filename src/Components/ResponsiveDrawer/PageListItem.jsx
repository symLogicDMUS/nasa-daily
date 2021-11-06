import { useHistory } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

export function PageListItem({ pageTitle, children }) {
    const history = useHistory();

    const goToPage = () => {
        history.push(children);
    };

    return (
        <ListItem button onClick={goToPage}>
            <ListItemText primary={pageTitle} />
        </ListItem>
    );
}
