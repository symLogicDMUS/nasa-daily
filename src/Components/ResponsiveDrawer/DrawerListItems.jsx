import * as React from "react";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { PageListItem } from "./PageListItem";
import { pages } from "../../pages";
import { routeDictionary } from "../../routes/routeDictionary";

export function DrawerListItems() {
    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {pages.map((pageTitle, index) => (
                    <PageListItem key={index} pageTitle={pageTitle}>
                        {routeDictionary[pageTitle]}
                    </PageListItem>
                ))}
            </List>
        </div>
    );
}
