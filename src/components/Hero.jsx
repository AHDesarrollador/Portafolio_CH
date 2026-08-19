import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "../data/cv";
import { useScrollTo } from "../hooks/useLenis";
import carlosPhoto from "../assets/img/carlos.jpg";
import "./Hero.css";

export default function Hero() {
  const cardRef = useRef(null);
  const rootRef = useRef(null);
  const quickX = useRef(null);
  const quickY = useRef(null);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Secuencia de entrada: el gafete "cae" y se asienta.
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (!prefersReduced) {
      tl.fromTo(
        cardRef.current,
        { y: -40, opacity: 0, rotate: -3 },
        { y: 0, opacity: 1, rotate: 0, duration: 1, ease: "back.out(1.4)" }
      ).fromTo(
        ".hero-lanyard",
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.5 },
        "<0.1"
      );
      gsap.fromTo(
        ".hero-eyebrow, .hero-title, .hero-loc, .hero-bio, .hero-cta",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, delay: 0.3, ease: "power3.out" }
      );
    } else {
      gsap.set([cardRef.current, ".hero-eyebrow", ".hero-title", ".hero-loc", ".hero-bio", ".hero-cta"], {
        opacity: 1,
        y: 0,
        rotate: 0,
      });
    }

    // Ligero tilt 3D con el mouse (deshabilitado si el usuario prefiere menos movimiento).
    if (!prefersReduced && window.matchMedia("(pointer: fine)").matches) {
      quickX.current = gsap.quickTo(cardRef.current, "rotateY", { duration: 0.6, ease: "power3" });
      quickY.current = gsap.quickTo(cardRef.current, "rotateX", { duration: 0.6, ease: "power3" });

      const handleMove = (e) => {
        const rect = rootRef.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        quickX.current(px * 10);
        quickY.current(py * -10);
      };
      const handleLeave = () => {
        quickX.current(0);
        quickY.current(0);
      };

      const el = rootRef.current;
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    }
  }, []);

  return (
    <section id="inicio" className="hero" ref={rootRef}>
      <div className="hero-lanyard" aria-hidden="true" />
      <div className="hero-card neo-raised" ref={cardRef}>
        <div className="hero-punch" aria-hidden="true" />

        <div className="hero-photo-frame neo-pressed">
          <img src={carlosPhoto} alt={`Foto de ${profile.name}`} className="hero-photo" />
        </div>

        <p className="hero-eyebrow eyebrow">{profile.badgeId}</p>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-loc">
          {profile.role} <span className="dot">·</span> {profile.location}
        </p>
        <p className="hero-bio">{profile.bio}</p>

        <div className="hero-cta">
          <button className="neo-btn neo-raised-sm hero-cta-primary" onClick={() => scrollTo("#contacto")}>
            Ver contacto
          </button>
          <button className="hero-cta-secondary" onClick={() => scrollTo("#proyectos")}>
            Ver proyectos →
          </button>
        </div>
      </div>
    </section>
  );
}
