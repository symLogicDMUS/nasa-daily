/**
 * Floating Action "Button" indicates there is content below and user should scroll down
 * @returns {*}
 * @constructor
 */

export const getNewDisplayValue = (
    showOnce,
    element
) => {
    if (showOnce) {
        return false;
    }
    if (element === "html" && document.documentElement.scrollTop === 0) {
        return true;
    }
    if (element === "body" && document.body.scrollTop === 0) {
        return true;
    }
    return false;
};
