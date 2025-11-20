import { useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "../logic/routing";

export { NavigationBar };

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  padding: "10px",
  margin: "5px 0",
  borderRadius: "4px",
  transition: "background-color 0.3s",
};

const linkButton = ({ to, children, theme }) => {
  return (
    <section style={{ marginTop: 20 }}>
      <Link
        to={to}
        style={linkStyle}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = theme === "dark" ? "#555" : "#ccc")
        }
        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        {children}
      </Link>
      <br />
    </section>
  );
};

const NavigationBar = ({ navigationOpened, onClose, theme }) => {
  useEffect(() => {
    if (navigationOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navigationOpened]);

  if (!navigationOpened) return null;

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor:
      theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.3)",
    zIndex: 999,
  };

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "10%",
    height: "100%",
    transition: "transform 0.3s ease-in-out",
    transform: navigationOpened ? "translateX(0)" : "translateX(-100%)",
    backgroundColor: theme === "dark" ? "#333" : "#e0e0e0ff",
    color: theme === "dark" ? "#e0e0e0ff" : "#333",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={navStyle}>
        <button
          onClick={onClose}
          style={{
            alignSelf: "flex-end",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "inherit",
          }}
        >
          ×
        </button>
        <nav style={{ marginTop: "20px" }}>
          {routes.map(({ path, element }) => (
            <div key={path} onClick={onClose}>
              {linkButton({ to: path, children: path === "/" ? "Home" : path.replace("/", "").replace("-", " ").replace(/\b\w/g, c => c.toUpperCase()), theme })}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};
