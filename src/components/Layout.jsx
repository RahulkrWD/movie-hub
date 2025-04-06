import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("mode");
    return savedTheme === "true";
  });

  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  function toggleButton() {
    setTheme((prev) => !prev);
  }
  return (
    <>
      <Navbar button={toggleButton} theme={theme} />
      <main className={theme ? "Dark-mode" : ""}>{children}</main>
    </>
  );
}

export default Layout;
