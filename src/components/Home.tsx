import React from "react";
import { Box } from "@mui/material";
import Hero from "./Hero";
import MenuPreview from "./MenuPreview";
import OurStory from "./OurStory";
import Contact from "./Contact";

const bannerItems = [
	"Hotel Emma Pastry Cook",
	"Associate Degree in Pastry Arts",
	"Small Business Owner",
];

const Home: React.FC = () => {
	return (
		<Box sx={{ color: "text.primary", position: "relative" }}>
			<Box
				sx={{
					width: "min(92vw, 760px)",
					mx: "auto",
					mt: { xs: 1.25, sm: 1.75 },
					mb: { xs: 1.5, sm: 2 },
					overflow: "hidden",
					borderRadius: "999px",
					border: "1px solid rgba(200, 166, 95, 0.34)",
					background:
						"linear-gradient(135deg, rgba(255, 248, 237, 0.96) 0%, rgba(244, 226, 187, 0.96) 100%)",
					boxShadow: "0 14px 36px rgba(148, 113, 56, 0.14)",
					backdropFilter: "blur(10px)",
					pointerEvents: "none",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						columnGap: { xs: 0.75, sm: 1 },
						rowGap: { xs: 0.5, sm: 0.75 },
						px: { xs: 1.5, sm: 2.5 },
						py: { xs: 1, sm: 1.1 },
						color: "#7c6233",
						fontSize: { xs: "0.68rem", sm: "0.8rem" },
						fontWeight: 700,
						letterSpacing: { xs: "0.04em", sm: "0.08em" },
						textTransform: "uppercase",
						textAlign: "center",
					}}
				>
					{bannerItems.map((item, index) => (
						<React.Fragment key={item}>
							<Box component="span">{item}</Box>
							{index < bannerItems.length - 1 && (
								<Box
									component="span"
									sx={{
										width: 4,
										height: 4,
										borderRadius: "50%",
										backgroundColor: "#c8a65f",
										flexShrink: 0,
									}}
								/>
							)}
						</React.Fragment>
					))}
				</Box>
			</Box>
			<div id="home">
				<Hero />
			</div>
			<div id="menu">
				<MenuPreview />
			</div>
			<div id="our-story">
				<OurStory />
			</div>
			<div id="contact">
				<Contact />
			</div>
		</Box>
	);
};

export default Home;
