export function yyyy_mm_dd(date) {
    const yyyy = date.getFullYear();
    const mm = date.getMonth();
    const dd = date.getDate();
    let d0 = "";
    let m0 = "";
    if (String(dd).length === 1) d0 = "0";
    if (String(mm).length === 1) m0 = "0";
    return `${yyyy}-${m0}${mm}-${d0}${dd}`;
}
