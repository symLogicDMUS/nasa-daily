import {vw} from "../helpers/windowMeasurements";
import {getContainerWidth} from "./getContainerWidth";
import {getContainerHeight} from "./MediaCard/getContainerHeight";

export function getSize() {
    if (vw() > 960) {
        return {
            width: getContainerWidth(),
            height: getContainerWidth() * 0.38993,
        }
    } else {
        return {
            height: getContainerHeight() * 0.5,
            width: getContainerHeight() * 0.5 * 2.5645,
        }
    }

}