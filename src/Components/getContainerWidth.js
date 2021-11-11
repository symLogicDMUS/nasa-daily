import { vw } from "../helpers/windowMeasurements";
import { drawerWidth } from "./ResponsiveDrawer/ResponsiveDrawer.jss";

export function getContainerWidth() {
    if (vw() > 900) {
        return vw() - drawerWidth - 48;
    }
    if (vw() > 600) {
        return vw() - 32;
    }
    return vw() - 16;
}
