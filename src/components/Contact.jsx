import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/cv";
import "./Contact.css";

const ROWS = [
  {
    key: "phone",
    label: "Teléfono",
    value: profile.phone,
    href: profile.phoneHref,
    cta: "Llamar",
  },
  {
    key: "email",
    label: "Correo",
    value: profile.email,
    href: `mailto:${profile.email}`,
    cta: "Enviar correo",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (row) => {
    try {
      await navigator.clipboard.writeText(row.value);
      setCopied(row.key);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section id="contacto" className="section">
      <Reveal>
        <p className="eyebrow">Contacto</p>
        <h2 className="section-title">¿Trabajamos juntos? Escríbeme o llámame.</h2>
      </Reveal>

      <Reveal delay={0.1} className="contact-card neo-raised">
        <div className="contact-stripe" aria-hidden="true" />

        <div className="contact-rows">
          {ROWS.map((row) => (
            <div className="contact-row" key={row.key}>
              <div className="contact-row-text">
                <span className="contact-row-label">{row.label}</span>
                <span className="contact-row-value">{row.value}</span>
              </div>
              <div className="contact-row-actions">
                <button
                  className="neo-btn neo-raised-sm contact-copy"
                  onClick={() => handleCopy(row)}
                >
                  {copied === row.key ? "¡Copiado!" : "Copiar"}
                </button>
                <a
                  className="neo-btn neo-raised-sm contact-action"
                  href={row.href}
                >
                  {row.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-barcode" aria-hidden="true">
          {Array.from({ length: 38 }).map((_, i) => (
            <span key={i} style={{ width: (i % 5 === 0 ? 3 : 1) + "px" }} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
