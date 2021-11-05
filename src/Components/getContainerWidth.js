import { vw } from "../helpers/windowMeasurements";
import { drawerWidth } from "./ResponsiveDrawer/ResponsiveDrawer.jss";

export function getContainerWidth() {
    if (vw() > 960) {
        return vw() - drawerWidth - 96;
    } else {
        return vw() - 48;
    }
}
