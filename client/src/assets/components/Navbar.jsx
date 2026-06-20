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
            to="/senior-activities"
            className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
          >
            Senior Activities
          </NavLink>

          <NavLink
            to="/articles"
            className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
          >
            Articles
          </NavLink>

          <NavLink to="/expert-series" className={linkBase}>
            Expert Series
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}
