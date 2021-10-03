export function reducer(state, action) {
    switch (action.type) {
        case "update-mode":
            return {
                ...state,
                isDarkMode: action.isDarkMode,
            };
        case "new-alert":
            return {
                ...state,
                alert: action.alert,
            };
        default:
            throw new Error();
    }
}
