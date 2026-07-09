import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const bakingTips = [
	"Always preheat your oven!",
	"Room temperature ingredients mix better",
	"Don't overmix your batter",
	"Let your bread cool before slicing",
	"Measure flour by weight for accuracy",
];

const FloatingCupcake: React.FC = () => {
	const [showTip, setShowTip] = useState(false);

	const handleClick = () => {
		setShowTip(true);
		setTimeout(() => setShowTip(false), 3000);
	};

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				animate={{
					opacity: 1,
					y: [0, -6, 0],
					transition: {
						opacity: { duration: 0.4 },
						y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
					},
				}}
				style={{
					position: "fixed",
					right: "clamp(16px, 2.2vw, 28px)",
					bottom: "clamp(16px, 2.2vw, 28px)",
					zIndex: 30,
					cursor: "pointer",
				}}
				whileTap={{ scale: 1.08 }}
				onClick={handleClick}
			>
				<Box
					component="span"
					sx={{
						width: 54,
						height: 54,
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "50%",
						background:
							"linear-gradient(135deg, rgba(255, 247, 238, 0.98) 0%, rgba(244, 214, 182, 0.98) 100%)",
						border: "1px solid rgba(200, 166, 95, 0.3)",
						boxShadow: "0 10px 24px rgba(148, 113, 56, 0.2)",
						fontSize: "1.6rem",
						lineHeight: 1,
						userSelect: "none",
					}}
				>
					🧁
				</Box>
			</motion.div>
			{showTip && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					style={{
						position: "fixed",
						right: "clamp(16px, 2.2vw, 28px)",
						bottom: "clamp(78px, 8vw, 92px)",
						background: "rgba(255, 255, 255, 0.9)",
						padding: "8px 16px",
						borderRadius: "8px",
						boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
						zIndex: 1001,
					}}
				>
					{bakingTips[Math.floor(Math.random() * bakingTips.length)]}
				</motion.div>
			)}
		</>
	);
};

export default FloatingCupcake;
