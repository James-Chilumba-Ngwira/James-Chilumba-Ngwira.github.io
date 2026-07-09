// src/pages/Landing.tsx
import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { Link as RouterLink } from "react-router-dom";
import IdCardHero3D from "../components/landing/IdCardHero3D";
import RoleIllustration from "../components/landing/RoleIllustration";

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <Typography
            sx={{
                color: "secondary.dark",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                mb: 1.5,
            }}
        >
            {children}
        </Typography>
    );
}

function FeatureCard({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                height: "100%",
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 32px rgba(11,110,79,0.12)",
                    borderColor: "primary.main",
                },
            }}
        >
            <Stack spacing={2}>
                <Box
                    sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(201,152,46,0.14)",
                        color: "secondary.dark",
                    }}
                >
                    {icon}
                </Box>

                <Typography variant="h6" fontWeight={700}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {desc}
                </Typography>
            </Stack>
        </Paper>
    );
}

interface RoleSectionProps {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    Icon: React.ElementType;
    reversed?: boolean;
    bgTint?: string;
}

function RoleSection({ eyebrow, title, body, bullets, Icon, reversed, bgTint }: RoleSectionProps) {
    return (
        <Box sx={{ bgcolor: bgTint, py: { xs: 6, md: 9 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center" direction={reversed ? "row-reverse" : "row"}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <RoleIllustration Icon={Icon} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Eyebrow>{eyebrow}</Eyebrow>
                        <Typography variant="h4" fontWeight={800} sx={{ mb: 2, letterSpacing: "-0.5px" }}>
                            {title}
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                            {body}
                        </Typography>
                        <Stack spacing={1.5}>
                            {bullets.map((b) => (
                                <Stack key={b} direction="row" spacing={1.5} alignItems="flex-start">
                                    <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "secondary.main", mt: 1, flexShrink: 0 }} />
                                    <Typography variant="body2">{b}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default function Landing() {
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
            {/* Header */}
            <Box
                component="header"
                sx={{
                    bgcolor: "white",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    py: 2,
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                }}
            >
                <Container maxWidth="lg">
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" spacing={1.25} alignItems="center">
                            <Box
                                sx={{
                                    width: 36, height: 36, borderRadius: 2, bgcolor: "primary.main",
                                    display: "grid", placeItems: "center", color: "#fff", fontWeight: 800, fontSize: 15,
                                }}
                            >
                                ID
                            </Box>
                            <Typography variant="h6" fontWeight={800} sx={{ color: "text.primary", letterSpacing: "-0.5px" }}>
                                IMS <Box component="span" sx={{ color: "primary.main" }}>PASS</Box>
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <Button component={RouterLink} to="/login" variant="outlined" sx={{ px: 3 }}>
                                Login
                            </Button>
                            <Button component={RouterLink} to="/register" variant="contained" sx={{ px: 3 }}>
                                Register
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            {/* Hero Section */}
            <Box sx={{ bgcolor: "white", py: { xs: 6, md: 9 }, overflow: "hidden" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Eyebrow>The National Student Immigration Identity</Eyebrow>
                            <Typography
                                component="h1"
                                sx={{
                                    fontSize: { xs: "2.25rem", md: "3rem" },
                                    fontWeight: 800,
                                    lineHeight: 1.15,
                                    mb: 3,
                                    color: "text.primary",
                                    letterSpacing: "-1px",
                                }}
                            >
                                One secure digital identity for every international student
                            </Typography>

                            <Typography sx={{ mb: 4, lineHeight: 1.8, color: "text.secondary", fontSize: "1.1rem" }}>
                                A centralized platform for immigration authorities and educational institutions to
                                manage student registration, visa lifecycle, attendance, and secure QR-based
                                identity verification, all backed by a tamper-evident blockchain ledger.
                            </Typography>

                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
                                <Button component={RouterLink} to="/dashboard" size="large" variant="contained">
                                    Access System
                                </Button>
                                <Button component={RouterLink} to="/register" size="large" variant="outlined">
                                    Institution Registration
                                </Button>
                            </Stack>

                            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                                <Chip icon={<ApartmentOutlinedIcon fontSize="small" />} label="Immigration Authority" variant="outlined" sx={{ fontWeight: 500 }} />
                                <Chip icon={<SchoolOutlinedIcon fontSize="small" />} label="Universities & Schools" variant="outlined" sx={{ fontWeight: 500 }} />
                                <Chip icon={<VerifiedUserOutlinedIcon fontSize="small" />} label="Verification Bodies" variant="outlined" sx={{ fontWeight: 500 }} />
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    borderRadius: 4,
                                    bgcolor: "rgba(11,110,79,0.05)",
                                    border: "1px solid",
                                    borderColor: "divider",
                                    height: { xs: 340, md: 420 },
                                }}
                            >
                                <IdCardHero3D />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Quick capability row */}
            <Box sx={{ bgcolor: "rgba(11,110,79,0.04)", py: 5, borderBottom: "1px solid", borderColor: "divider" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {[
                            { Icon: BadgeOutlinedIcon, title: "Digital Student Identity", desc: "Blockchain-hashed, QR-verifiable digital ID for every registered student." },
                            { Icon: FlightOutlinedIcon, title: "Visa Lifecycle Tracking", desc: "Live status, renewal requests, and expiry alerts in one place." },
                            { Icon: ForumOutlinedIcon, title: "Institution Messaging", desc: "Direct, auditable communication between students and institutions." },
                        ].map(({ Icon, title, desc }) => (
                            <Grid size={{ xs: 12, md: 4 }} key={title}>
                                <Stack direction="row" spacing={2} alignItems="flex-start">
                                    <Box sx={{ color: "secondary.dark", mt: 0.5 }}>
                                        <Icon sx={{ fontSize: 28 }} />
                                    </Box>
                                    <Box>
                                        <Typography fontWeight={700} sx={{ mb: 0.5 }}>{title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{desc}</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Role sections, alternating like the reference site's feature walkthrough */}
            <RoleSection
                eyebrow="For Immigration Authorities"
                title="National oversight, in real time"
                body="Monitor every registered student's visa status across all partner institutions, flag high-risk cases automatically, and issue tamper-evident digital identity cards backed by a blockchain ledger."
                bullets={[
                    "Live compliance dashboard across all institutions",
                    "Automated visa-expiry and high-risk alerts",
                    "One-tap QR verification at any checkpoint",
                ]}
                Icon={ApartmentOutlinedIcon}
                bgTint="#ffffff"
            />
            <RoleSection
                eyebrow="For Institutions"
                title="Everything your international office needs"
                body="Register students, record attendance, review visa renewal requests, and message students directly, all from a single institutional dashboard."
                bullets={[
                    "Student registration and visa issuance workflows",
                    "Attendance and compliance record-keeping",
                    "Built-in messaging with your student body",
                ]}
                Icon={SchoolOutlinedIcon}
                reversed
                bgTint="rgba(11,110,79,0.03)"
            />
            <RoleSection
                eyebrow="For Students"
                title="Your identity, in your pocket"
                body="View and download your digital ID and visa summary, request a visa renewal, keep your contact details current, and reach your institution directly, without a single paper form."
                bullets={[
                    "Downloadable digital ID and attendance history",
                    "Self-service visa renewal requests",
                    "Direct messaging with your institution",
                ]}
                Icon={BadgeOutlinedIcon}
                bgTint="#ffffff"
            />

            {/* Core system features */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Eyebrow>Under the hood</Eyebrow>
                        <Typography variant="h3" fontWeight={800} sx={{ mb: 2, letterSpacing: "-0.5px" }}>
                            Core System Features
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                            Built with security, transparency, and efficiency at its core
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FeatureCard
                                icon={<QrCode2OutlinedIcon sx={{ fontSize: 32 }} />}
                                title="QR Code Verification"
                                desc="Instant identity validation through secure QR scanning with minimal data exposure."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FeatureCard
                                icon={<SecurityOutlinedIcon sx={{ fontSize: 32 }} />}
                                title="Blockchain Integrity Layer"
                                desc="Immutable hash records ensuring tamper-proof digital identity and visa data."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FeatureCard
                                icon={<InsightsOutlinedIcon sx={{ fontSize: 32 }} />}
                                title="Smart Analytics Module"
                                desc="Machine learning-driven insights for visa expiry prediction and compliance risk detection."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box component="footer" sx={{ bgcolor: "primary.main", py: 5 }}>
                <Container maxWidth="lg">
                    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
                        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                            Immigration Management System for International Students (IMS-IS)
                        </Typography>
                        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                            Secure, transparent, scalable digital identity infrastructure
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
