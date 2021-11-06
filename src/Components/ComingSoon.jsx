
import makeStyles from "@mui/styles/makeStyles";
import {Paper} from "@mui/material";
import {useState} from "react";

export const useStyles = makeStyles((theme) => ({

}), { index: 1 });

export default function ComingSoon() {
    const [src, setSrc] = useState();
    return (
        <Paper>
            <img src={src} alt={"background image"} />
        </Paper>
    )
}

