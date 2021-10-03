import { vh, vw } from "../../helpers/windowMeasurements";
import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

export function getContainerHeight() {
    let containerHeightSm = vh() - appBarHeightSm;
    let containerHeightMd = vh() - appBarHeightMd;
    let containerHeightLg = vh() - appBarHeightLg;

    let containerHeight = containerHeightMd;
    if (vw() < 600 && vh() / vw() < 1) {
        containerHeight = containerHeightSm;
    }
    if (vw() >= 600) {
        containerHeight = containerHeightLg;
    }

    return containerHeight;
}
