import { useState, useEffect } from "react";
import { ModalComponent } from "./components/Modal";
import { ColorModeToggle } from "./components/ColorModeToggle";
import { NavigationBar } from "./components/NavigationBar";
import { Routing } from "./logic/routing.jsx";

function App() {
  const [navigationOpened, setNavigationOpened] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const style =
    theme === "dark"
      ? {
          backgroundColor: "#333",
          color: "#e0e0e0ff",
          minHeight: "100vh",
          padding: "20px",
        }
      : {
          backgroundColor: "#e0e0e0ff",
          color: "#333",
          minHeight: "100vh",
          padding: "20px",
        };
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--font-color",
      theme === "dark" ? "#e0e0e0ff" : "#333"
    );
    document.documentElement.style.setProperty(
      "--background-color",
      theme === "dark" ? "#333" : "#e0e0e0ff"
    );
  }, [theme]);

  return (
    <section style={style}>
      <button onClick={() => setNavigationOpened(true)}>Open Navigation</button>
      <NavigationBar
        navigationOpened={navigationOpened}
        onClose={() => setNavigationOpened(false)}
        theme={theme}
      />
      <ColorModeToggle theme={theme} setTheme={setTheme} />
      <Routing />
    </section>
  );
}

export default App;
