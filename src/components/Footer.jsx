import { profile } from "../data/cv";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Hecho con React, GSAP y Lenis.
      </p>
    </footer>
  );
}
