"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ backgroundColor: 'var(--card-bg)' }}
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-xl shadow-2xl border border-[var(--border-color)] hover:border-[var(--accent-action)] hover:-translate-y-1 transition-all duration-300 focus:outline-none group cursor-pointer"
    >
      <ArrowUp className="w-5 h-5 text-[var(--accent-action)] group-hover:scale-125 transition-transform duration-300" />
    </button>
  );
}