"use client";

import { useEffect, useState } from "react";

const NAV_SHELL =
  "sticky top-0 z-50 border-b border-transparent bg-brand-bg/70 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 data-[scrolled=true]:border-brand-border data-[scrolled=true]:bg-brand-bg/92 data-[scrolled=true]:shadow-[0_12px_30px_rgba(20,28,33,0.06)] dark:bg-brand-dark-bg/72 dark:data-[scrolled=true]:border-brand-dark-border dark:data-[scrolled=true]:bg-brand-dark-bg/90 dark:data-[scrolled=true]:shadow-[0_16px_36px_rgba(0,0,0,0.32)]";

const TOGGLE_BTN =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-text transition-colors duration-200 hover:border-brand-primary hover:text-brand-primary dark:border-brand-dark-border dark:bg-brand-dark-surface dark:text-brand-dark-text dark:hover:border-brand-dark-primary dark:hover:text-brand-dark-primary";

const PRIMARY_BTN =
  "inline-flex items-center justify-center rounded-[1.125rem] bg-brand-primary px-6 py-3.5 font-display text-sm font-semibold tracking-[0.01em] text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg dark:bg-brand-dark-primary dark:hover:bg-brand-dark-primary-hover dark:focus-visible:ring-brand-dark-primary/35 dark:focus-visible:ring-offset-brand-dark-bg";

const links = [
  { id: "hero", label: "Overview" },
  { id: "problem", label: "Bottleneck" },
  { id: "why", label: "Why Us" },
  { id: "process", label: "Process" },
  { id: "cta", label: "Get Started" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("adv3d-theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
    setDark(next);
  };

  return (
    <header data-scrolled={scrolled} className={NAV_SHELL}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-brand-text dark:text-brand-dark-text"
        >
          Advanc<span className="text-brand-primary dark:text-brand-dark-primary">3</span>D
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-display text-sm font-medium text-brand-muted transition-colors duration-200 hover:text-brand-text dark:text-brand-dark-muted dark:hover:text-brand-dark-text"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className={TOGGLE_BTN}
          >
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a
            href="+1-CALENDLY-URL"
            className={`${PRIMARY_BTN} hidden sm:inline-flex`}
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </header>
  );
}