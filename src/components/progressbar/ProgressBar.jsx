import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollTotal) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
