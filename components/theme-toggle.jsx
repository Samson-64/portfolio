"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.toggle("light", savedTheme === "light");
    document.documentElement.classList.toggle("dark", savedTheme !== "light");
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("light", nextTheme === "light");
    document.documentElement.classList.toggle("dark", nextTheme !== "light");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  if (!mounted) {
    return (
      <button className="glass-card h-11 w-11 rounded-full border border-white/10" aria-label="Toggle theme" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass-card flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[rgb(var(--text))] hover:-translate-y-1"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </button>
  );
}
