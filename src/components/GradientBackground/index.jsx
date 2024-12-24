import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import "./GradientBackground.scss";
import { useTheme } from "../ThemeProvider/index.jsx";

export default function GradientBackground() {
  const { theme } = useTheme();

  const accent = useMotionValue(theme.accent);
  const foreground = useMotionValue(theme.foreground);
  const background = useMotionValue(theme.background);

  useEffect(() => {
    animate(accent, theme.accent, { duration: 0.5, ease: "easeOut" });
    animate(foreground, theme.foreground, { duration: 0.5, ease: "easeOut" });
    animate(background, theme.background, { duration: 0.5, ease: "easeOut" });
  }, [theme, accent, foreground, background]);

  const gradient = useTransform(
    [accent, foreground],
    ([accentValue, foregroundValue]) =>
      `radial-gradient(50vh 50vh at 100% 0%, ${accentValue} 0%, ${foregroundValue} 30%, transparent 100%), 
      radial-gradient(50vh 50vh at 0% 100%, ${accentValue} 0%, ${foregroundValue} 30%, transparent 100%)`
  );

  return (
    <motion.div
      className="gradient-background"
      style={{
        background: gradient,
        backgroundColor: background,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
    />
  );
}
