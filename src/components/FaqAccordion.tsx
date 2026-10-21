"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block text-center">
          FAQ
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border border-[var(--border-color)] rounded-2xl bg-[var(--card-bg)] hover:border-[var(--accent-action)] transition-colors shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-8 py-5 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                >
                  <h4 className="font-bold text-[var(--text-primary)] text-base">
                    {faq.q}
                  </h4>
                  <ChevronDown className={`w-5 h-5 text-[var(--accent-action)] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isOpen && (
                  <div className="px-8 pb-6 pt-2 text-sm text-[var(--text-body)] leading-relaxed border-t border-[var(--border-color)] opacity-90 transition-all">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}