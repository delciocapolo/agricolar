export const radio_config = {
    color: "var(--Success)",
    "&.Mui-checked": {
        color: "var(--Success)",
    },
};
export const checkbox_config = {
    color: "var(--Gray-200)",
    "&.Mui-checked": {
        color: "var(--Success)",
    },
    "& .MuiSvgIcon-root": {
        // boxShadow: 'var(--box-shadow-outline)',
        fontSize: 20,
        padding: 0,
    },
};
export const FormControlLabel_config = {
    "& .MuiTypography-root": {
        textTransform: "none",
    },
};
export const categories_list = [
    {
        name: "fruta",
        label: "Frutas",
        quantidade: 150,
    },
    {
        name: "vegetal",
        label: "Vegetais",
        quantidade: 75,
    },
    {
        name: "snack",
        label: "Snack",
        quantidade: 47,
    },
];

export const divider_config = {
    color: "var(--Gray-100)",
    sx:
    {
        width: "100%",
        margin: "1.35em 0"
    }
}
