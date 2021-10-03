export const columns = [
    { id: "id", label: "id", minWidth: 170 },
    { id: "neo_reference_id", label: "Neo Reference ID", minWidth: 100 },
    {
        id: "name",
        label: "Name",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "absolute_magnitude_h",
        label: "Absolute Magnitude H",
        minWidth: 170,
        format: (value) => value.toFixed(2),
    },
    {
        id: "estimated_diameter_min",
        label: "Estimated Diameter Min",
        minWidth: 170,
        format: (value) => value.toFixed(2),
    },
    {
        id: "estimated_diameter_max",
        label: "Estimated Diameter Max",
        minWidth: 170,
        format: (value) => value.toFixed(2),
    },
];
