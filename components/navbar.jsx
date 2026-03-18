"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import ThemeToggle from "@/components/theme-toggle";
import { navItems, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`section-shell glass-card flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 ${
          scrolled ? "border-white/15 bg-white/[0.08]" : "border-white/10 bg-white/5"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand/90 via-accent/80 to-highlight/80 font-heading text-sm font-bold text-slate-950">
            SM
          </span>
          <div className="hidden sm:block">
            <p className="font-heading text-sm font-semibold">{siteConfig.name}</p>
            <p className="text-xs text-[rgb(var(--muted))]">{siteConfig.title}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="glass-card flex h-11 w-11 items-center justify-center rounded-full border border-white/10"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="section-shell mt-3 lg:hidden">
          <div className="glass-card rounded-3xl border border-white/10 px-5 py-5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
