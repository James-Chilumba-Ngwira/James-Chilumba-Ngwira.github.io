// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    Stack,
    Alert,
    InputAdornment,
    IconButton,
    Link,
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
    ArrowBack,
    FingerprintOutlined,
    VerifiedUserOutlined,
    QrCode2Outlined,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../auth/AuthProvider";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginForm) => {
        setIsLoading(true);
        setAuthError(null);

        try {
            await signIn(data.email, data.password);
            navigate("/dashboard");
        } catch (error: any) {
            setAuthError(error.message || "Failed to sign in. Please check your credentials.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Grid container sx={{ minHeight: "100vh" }}>
            {/* Brand panel */}
            <Grid
                size={{ xs: 0, md: 5 }}
                sx={{
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    justifyContent: "space-between",
                    bgcolor: "primary.main",
                    color: "#fff",
                    p: 7,
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute", inset: 0, opacity: 0.5,
                        background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 55%), radial-gradient(circle at 80% 75%, rgba(201,152,46,0.25), transparent 55%)",
                    }}
                />
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ position: "relative" }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: "rgba(255,255,255,0.15)", display: "grid", placeItems: "center", fontWeight: 800 }}>
                        ID
                    </Box>
                    <Typography variant="h6" fontWeight={800}>IMS PASS</Typography>
                </Stack>

                <Box sx={{ position: "relative" }}>
                    <Typography variant="h3" fontWeight={800} sx={{ mb: 2, letterSpacing: "-0.5px" }}>
                        Your digital identity, verified.
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 4, lineHeight: 1.8, maxWidth: 420 }}>
                        One secure sign-in for immigration authorities, institutions, and students, backed by a
                        tamper-evident blockchain ledger.
                    </Typography>
                    <Stack spacing={2.5}>
                        {[
                            { Icon: FingerprintOutlined, text: "Blockchain-hashed digital identity" },
                            { Icon: QrCode2Outlined, text: "QR-based instant verification" },
                            { Icon: VerifiedUserOutlined, text: "Role-based, auditable access" },
                        ].map(({ Icon, text }) => (
                            <Stack key={text} direction="row" spacing={1.5} alignItems="center">
                                <Box sx={{ width: 36, height: 36, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.15)", display: "grid", placeItems: "center" }}>
                                    <Icon sx={{ fontSize: 20 }} />
                                </Box>
                                <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>{text}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Box>

                <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)", position: "relative" }}>
                    IMS-IS Platform (c) 2026
                </Typography>
            </Grid>

            {/* Form panel */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.default", p: { xs: 3, sm: 5 } }}>
                <Box sx={{ width: "100%", maxWidth: 440 }}>
                    <Button
                        component={RouterLink}
                        to="/"
                        startIcon={<ArrowBack />}
                        sx={{ mb: 3, color: "text.secondary", "&:hover": { color: "primary.main" } }}
                    >
                        Back to Home
                    </Button>

                    <Typography variant="h4" fontWeight={800} gutterBottom>
                        Welcome Back
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                        Sign in to access your IMS-IS account
                    </Typography>

                    {authError && (
                        <Alert severity="error" sx={{ mb: 3 }}>
                            {authError}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={3}>
                            <TextField
                                {...register("email")}
                                label="Email Address"
                                type="email"
                                fullWidth
                                autoComplete="email"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                placeholder="admin@nu.edu.kz"
                            />

                            <TextField
                                {...register("password")}
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                fullWidth
                                autoComplete="current-password"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                placeholder="Enter your password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                aria-label="toggle password visibility"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                disabled={isLoading}
                                sx={{ py: 1.5, fontSize: "1rem" }}
                            >
                                {isLoading ? "Signing in..." : "Sign In"}
                            </Button>
                        </Stack>
                    </form>

                    <Box sx={{ mt: 4, textAlign: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                            Don't have an account?{" "}
                            <Link component={RouterLink} to="/register" sx={{ color: "primary.main", fontWeight: 600, "&:hover": { textDecoration: "underline" } }}>
                                Sign up
                            </Link>
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            mt: 4, p: 2.5, bgcolor: "rgba(11,110,79,0.05)", borderRadius: 2,
                            border: "1px solid", borderColor: "divider",
                        }}
                    >
                        <Typography variant="caption" color="text.secondary" fontWeight={700} display="block" gutterBottom sx={{ textTransform: "uppercase", letterSpacing: "0.5px" }}>
                            Demo Credentials
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Immigration: immigration@test.kz / password123
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Institution: admin@nu.edu.kz / password123
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Student: chinedu.okafor@student.kz / password123
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
