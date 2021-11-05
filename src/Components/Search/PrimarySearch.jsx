import * as React from "react";
import { StyledInputBase } from "./StyledInputBase.jss";
import { SearchIconWrapper } from "./SearchIconWrapper.jss";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "./Search.jss";

function PrimarySearch(props) {
    const { handleChange, ...other } = props;

    return (
        <Search {...other}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase onChange={handleChange} placeholder="Search…" />
        </Search>
    );
}

export default PrimarySearch;
