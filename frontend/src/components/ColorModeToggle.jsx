
export { ColorModeToggle };

const ColorModeToggle = ({ theme, setTheme }) => {
  const toggleColorMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleColorMode}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};