import { yyyy_mm_dd } from "./yyyy_mm_dd";

/**https://stackoverflow.com/questions/22850929/most-efficient-way-to-get-the-dates-for-the-past-7-days */
export function getLast7Days() {
    const result = [];
    for (let i = 0; i < 7; i++) {
        let d = new Date();
        d.setDate(d.getDate() - i);
        result.push(yyyy_mm_dd(d));
    }
    return result;
}
