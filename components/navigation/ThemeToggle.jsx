import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = ({ handleNav }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div onClick={handleNav}>
      {theme === "dark" ? (
        <div
          className="flex items-center font-semibold cursor-pointer group"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiSun className="text-primary text-2xl mr-2 group-hover:text-accent" />{" "}
          Light Mode
        </div>
      ) : (
        <div
          className="flex items-center font-semibold cursor-pointer group"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiMoon className="text-primary text-2xl mr-2 group-hover:text-accent" />{" "}
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
