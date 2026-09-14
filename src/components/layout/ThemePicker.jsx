import { useTheme } from "../../context/ThemeContext.jsx";

export default function ThemePicker() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-picker"
      onClick={toggleTheme}
      aria-label={isDark ? "Passer en thème clair" : "Passer en thème sombre"}
      title={isDark ? "Thème clair" : "Thème sombre"}
    >
      <span key={theme} className="theme-icon">
        {isDark ? "☾" : "☀"}
      </span>
    </button>
  );
}
