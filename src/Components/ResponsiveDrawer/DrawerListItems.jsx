import * as React from "react";
import List from "@mui/material/List";
import { pages } from "../../pages";
import { ListItem } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { PageListItem } from "./PageListItem";
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
                <ListItem button disabled>
                    More coming soon
                </ListItem>
            </List>
        </div>
    );
}
