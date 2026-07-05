import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const HeroContainer = styled(Box)(({ theme }) => ({
	minHeight: "calc(100vh - 86px)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	background: [
		"linear-gradient(115deg, rgba(253, 248, 244, 0.9) 12%, rgba(253, 248, 244, 0.62) 48%, rgba(89, 61, 52, 0.24) 100%)",
		"url('/images/newbackgroundindex.jpeg')",
	].join(","),
	backgroundSize: "cover",
	backgroundPosition: "center",
	position: "relative",
	padding: theme.spacing(4, 2, 7),
	[theme.breakpoints.down("md")]: {
		minHeight: "auto",
		padding: theme.spacing(6, 2, 6),
	},
	"&::after": {
		content: '""',
		position: "absolute",
		inset: theme.spacing(3),
		border: "1px solid rgba(255, 245, 238, 0.45)",
		borderRadius: 32,
		pointerEvents: "none",
		[theme.breakpoints.down("sm")]: {
			inset: theme.spacing(1.5),
			borderRadius: 24,
		},
	},
}));

const ContentContainer = styled(Container)(({ theme }) => ({
	textAlign: "center",
	position: "relative",
	zIndex: 1,
	padding: theme.spacing(5),
	width: "100%",
	maxWidth: "1200px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	marginLeft: "auto",
	marginRight: "auto",
	backgroundColor: "rgba(255, 252, 248, 0.76)",
	border: "1px solid rgba(255, 255, 255, 0.4)",
	borderRadius: 28,
	boxShadow: "0 24px 60px rgba(89, 61, 52, 0.14)",
	backdropFilter: "blur(8px)",
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(3),
	},
}));

const Eyebrow = styled(Box)(({ theme }) => ({
	display: "inline-flex",
	alignItems: "center",
	gap: theme.spacing(1.5),
	padding: theme.spacing(1, 1.5),
	borderRadius: "999px",
	backgroundColor: "rgba(255, 255, 255, 0.72)",
	border: "1px solid rgba(200, 166, 95, 0.24)",
	color: "#a57b45",
	fontSize: "0.78rem",
	fontWeight: 700,
	letterSpacing: "0.18em",
	textTransform: "uppercase",
	marginBottom: theme.spacing(2.5),
}));

const Dot = styled("span")({
	width: 6,
	height: 6,
	borderRadius: "50%",
	backgroundColor: "#c78293",
});

const Logo = styled("img")(({ theme }) => ({
	width: "min(360px, 72vw)",
	marginBottom: theme.spacing(2.5),
	height: "auto",
	filter: "drop-shadow(0 12px 24px rgba(92, 70, 63, 0.12))",
	[theme.breakpoints.down("sm")]: {
		width: "min(280px, 68vw)",
	},
}));

const Hero: React.FC = () => {
	const navigate = useNavigate();
	const handleViewGallery = () => {
		navigate("/gallery");
		window.scrollTo(0, 0);
	};
	return (
		<HeroContainer>
			<ContentContainer>
				<Logo
					src="/images/PreciousSolLogo.png"
					alt="Precious Sol Bakery Logo"
				/>
				<Eyebrow>
					Custom cakes
					<Dot />
					Elegant desserts
				</Eyebrow>
				<Typography
					variant="h1"
					sx={{
						color: "#4f372f",
						fontFamily: '"Cormorant Garamond", serif',
						fontSize: { xs: "3rem", sm: "4rem", md: "4.8rem" },
						lineHeight: 0.95,
						mb: 2,
						maxWidth: "10ch",
						mx: "auto",
					}}
				>
					Baked with elegance, made to feel personal
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: "#6f5a52",
						fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
						maxWidth: "54ch",
						mb: 4,
						mx: "auto",
					}}
				>
					Thoughtful cakes, pastries, and desserts designed with a soft romantic
					finish. Precious Sol Bakery brings a polished, handcrafted touch to
					birthdays, showers, and every sweet celebration in between.
				</Typography>
				<Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
					<Button
						variant="contained"
						color="primary"
						size="large"
						sx={{
							px: 3.5,
							py: 1.4,
							borderRadius: "999px",
							boxShadow: "0 12px 26px rgba(199, 130, 147, 0.28)",
							"&:hover": {
								transform: "translateY(-2px)",
								boxShadow: "0 16px 30px rgba(199, 130, 147, 0.32)",
							},
							transition: "all 0.25s ease",
						}}
						onClick={handleViewGallery}
					>
						View Gallery
					</Button>
					<Button
						variant="outlined"
						size="large"
						sx={{
							px: 3.5,
							py: 1.4,
							borderRadius: "999px",
							borderColor: "rgba(200, 166, 95, 0.5)",
							color: "#4f372f",
							backgroundColor: "rgba(255,255,255,0.52)",
							"&:hover": {
								borderColor: "#c8a65f",
								backgroundColor: "rgba(255,255,255,0.78)",
							},
						}}
						onClick={() => {
							navigate("/menu");
							window.scrollTo(0, 0);
						}}
					>
						Explore Menu
					</Button>
				</Box>
			</ContentContainer>
		</HeroContainer>
	);
};

export default Hero;
