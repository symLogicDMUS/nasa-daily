import { getSol } from "../../../helpers/getSol";

export function reducer(state, action) {
    let date;
    let sol;
    switch (action.type) {
        case "update-date":
            date = action.date;
            sol = getSol(action.date);
            return {
                ...state,
                date: date,
                sol: sol,
            };
        case "update-photos":
            return {
                ...state,
                photos: action.photos,
            };
        case "increment-index":
            return {
                ...state,
                index: state.index + 1,
            };
        case "decrement-index":
            return {
                ...state,
                index: state.index - 1,
            };
        default:
            throw new Error();
    }
}
