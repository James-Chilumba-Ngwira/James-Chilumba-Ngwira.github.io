import { createTheme } from "@mui/material";

// Palette modelled on UAE Pass's national-digital-identity brand system:
// deep emerald as the primary/brand color, muted gold as a secondary accent,
// and near-black pill buttons for primary calls to action.
const brandGreen = "#0B6E4F";
const brandGreenDark = "#095A41";
const brandGold = "#C9982E";
const brandInk = "#12241C";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: brandGreen,
            light: "#3E9773",
            dark: brandGreenDark,
            contrastText: "#ffffff",
        },
        secondary: {
            main: brandGold,
            light: "#DBB65B",
            dark: "#A87A1E",
            contrastText: "#12241C",
        },
        background: {
            default: "#F7FAF8",
            paper: "#ffffff",
        },
        text: {
            primary: "#12241C",
            secondary: "#5B6B63",
        },
        divider: "#E1E8E3",
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        h1: { fontWeight: 800, letterSpacing: "-0.02em" },
        h2: { fontWeight: 800, letterSpacing: "-0.02em" },
        h3: { fontWeight: 700, letterSpacing: "-0.01em" },
        h4: { fontWeight: 700 },
        h5: { fontWeight: 700 },
        h6: { fontWeight: 700 },
        button: { textTransform: "none", fontWeight: 600 },
    },
    shape: {
        borderRadius: 10,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    textTransform: "none",
                    fontWeight: 600,
                    boxShadow: "none",
                    "&:hover": { boxShadow: "none" },
                },
                sizeLarge: {
                    padding: "12px 32px",
                    fontSize: "1rem",
                },
                contained: {
                    "&:hover": { boxShadow: "0 4px 14px rgba(11, 110, 79, 0.25)" },
                },
            },
            variants: [
                {
                    // Default (color="primary") contained buttons become UAE-Pass-style
                    // near-black pills; explicitly-colored ones (success/error/etc. used
                    // for approve/reject actions) are untouched so their meaning holds.
                    props: { variant: "contained", color: "primary" },
                    style: {
                        backgroundColor: brandInk,
                        color: "#ffffff",
                        "&:hover": {
                            backgroundColor: "#1E362A",
                            boxShadow: "0 4px 14px rgba(18, 36, 28, 0.3)",
                        },
                    },
                },
            ],
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 14,
                    boxShadow: "none",
                    border: "1px solid #E1E8E3",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: { borderRadius: 10 },
                elevation0: { boxShadow: "none" },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: { fontWeight: 500, borderRadius: 8 },
            },
        },
    },
});
