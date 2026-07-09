import { Box } from "@mui/material";
import type { ElementType } from "react";

// A self-contained decorative "badge" illustration (dashed ring + scattered
// accent marks + a central icon disc) in the UAE-Pass sticker-cluster style,
// built entirely from CSS/SVG so the page has no external image dependency.
export default function RoleIllustration({ Icon }: { Icon: ElementType }) {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: 360,
                aspectRatio: "1 / 1",
                mx: "auto",
                borderRadius: "50%",
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "rgba(11,110,79,0.03)",
                display: "grid",
                placeItems: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 28,
                    borderRadius: "50%",
                    border: "2px dashed",
                    borderColor: "secondary.light",
                    opacity: 0.6,
                }}
            />
            <Box
                sx={{
                    width: "42%",
                    aspectRatio: "1 / 1",
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 20px 40px -20px rgba(11,110,79,0.55)",
                }}
            >
                <Icon sx={{ fontSize: "2.6rem", color: "#fff" }} />
            </Box>

            {/* scattered accent marks, mirroring the reference site's sticker cluster */}
            <Box sx={{ position: "absolute", top: 18, left: 34, width: 10, height: 10, borderRadius: "3px", bgcolor: "secondary.main", transform: "rotate(20deg)" }} />
            <Box sx={{ position: "absolute", bottom: 30, right: 24, width: 14, height: 14, borderRadius: "50%", border: "2px solid", borderColor: "primary.light" }} />
            <Box sx={{ position: "absolute", top: "50%", right: 6, width: 8, height: 8, borderRadius: "50%", bgcolor: "primary.light" }} />
            <Box sx={{ position: "absolute", bottom: 46, left: 8, width: 18, height: 3, borderRadius: 2, bgcolor: "secondary.light", transform: "rotate(-12deg)" }} />
        </Box>
    );
}
