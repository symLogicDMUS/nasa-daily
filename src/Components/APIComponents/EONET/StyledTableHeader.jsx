import {styled} from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

export const StyledTableHeader = styled(TableRow)(({theme}) => ({
    background: theme.palette.background.paper + '33',
    border: 0,
}));