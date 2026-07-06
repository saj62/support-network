import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "./Container";

const linkBase =
  "text-teal text-lg hover:opacity-80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm";
const active = "underline underline-offset-8 decoration-2";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/senior-activities", label: "Senior Activities" },
  { to: "/articles", label: "Articles" },
  { to: "/expert-series", label: "Expert Series" },
];

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      const clickedMenu = menuRef.current?.contains(event.target);
      const clickedButton = buttonRef.current?.contains(event.target);

      if (!clickedMenu && !clickedButton) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const getLinkClassName = (isActive, extra = "") =>
    `${linkBase} ${isActive ? active : ""} ${extra}`.trim();

  return (
    <header className="relative z-40 bg-cream border-b border-teal/20">
      <Container className="py-4 lg:py-5 flex items-center justify-between gap-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-teal font-serif hover:opacity-80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm min-w-0"
        >
          <img
            src="/logo.jpeg"
            alt="Geriatrics Support Network logo"
            className="h-10 w-10 object-contain shrink-0"
            width={40}
            height={40}
          />
          <span className="hidden lg:inline leading-none">
            Geriatrics Support Network
          </span>
        </NavLink>

        <nav
          className="hidden lg:flex gap-8 shrink-0"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => getLinkClassName(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 text-teal hover:opacity-80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {menuOpen ? (
        <nav
          id="mobile-nav-menu"
          ref={menuRef}
          className="lg:hidden absolute left-0 right-0 top-full border-t border-teal/20 bg-cream shadow-sm"
          aria-label="Mobile navigation"
        >
          <ul className="py-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    getLinkClassName(
                      isActive,
                      "block px-6 py-3 hover:bg-teal/5"
                    )
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
