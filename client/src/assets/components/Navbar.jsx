import { NavLink } from "react-router-dom";
import Container from "./Container";

const linkBase = "text-teal text-lg hover:opacity-80 transition";
const active = "underline underline-offset-8 decoration-2";

export default function Navbar() {
  return (
    <header className="bg-cream border-b border-teal/20">
      <Container className="py-5 flex items-center justify-between">
        
        {/* Logo / Title → Home */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-teal font-serif hover:opacity-80 transition"
        >
          Geriatrics Support Network
        </NavLink>

        <nav className="flex gap-8">
          <NavLink
            to="/about"
            className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
          >
            About
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/expert-series"
            className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
          >
            Expert Series
          </NavLink>

          <NavLink to="/#newsletter" className={linkBase}>
            Newsletter
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}
