import { useContext } from "react";
import { LenisContext } from "../context/LenisContext";

export function useLenis() {
  const ctx = useContext(LenisContext);
  if (!ctx) throw new Error("useLenis debe usarse dentro de <LenisProvider>");
  return ctx;
}

export function useScrollTo() {
  const { lenisRef } = useLenis();
  return (target, options = {}) => {
    lenisRef.current?.scrollTo(target, { offset: -84, duration: 1.3, ...options });
  };
}
