"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const facultyData = [
  { id: 1, name: "Dr. Marcus Webb", role: "Data Analytics", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop", rotate: -14, x: -240, y: 40 },
  { id: 2, name: "Dr. Robert Chen", role: "Methodology", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop", rotate: -7, x: -120, y: 15 },
  { id: 3, name: "Dr. Sarah Jenkins", role: "Quantitative Analysis", src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop", rotate: 0, x: 0, y: 0 },
  { id: 4, name: "Dr. Elena Rossi", role: "Literature Review", src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop", rotate: 7, x: 120, y: 15 },
  { id: 5, name: "Dr. Aisha Tariq", role: "Qualitative Methods", src: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=500&auto=format&fit=crop", rotate: 14, x: 240, y: 40 },
];

export default function FacultyCards() {
  const [highestZ, setHighestZ] = useState(10);
  const [cardZIndices, setCardZIndices] = useState<Record<number, number>>({
    1: 1, 2: 2, 3: 3, 4: 2, 5: 1 // Middle card starts highest
  });

  const bringToFront = (id: number) => {
    setHighestZ((prev) => prev + 1);
    setCardZIndices((prev) => ({ ...prev, [id]: highestZ + 1 }));
  };

  return (
    <div className="relative w-full max-w-5xl h-[450px] flex justify-center items-center perspective-1000 mx-auto">
      {facultyData.map((card) => (
        <motion.div
          key={card.id}
          drag
          dragConstraints={{ left: -300, right: 300, top: -100, bottom: 100 }}
          onDragStart={() => bringToFront(card.id)}
          onMouseDown={() => bringToFront(card.id)}
          initial={{ opacity: 0, y: 100, rotate: 0, x: 0 }}
          whileInView={{ opacity: 1, y: card.y, rotate: card.rotate, x: card.x }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          style={{ zIndex: cardZIndices[card.id] }}
          className="absolute w-56 md:w-64 aspect-[3/4] bg-[var(--card-bg)] p-3 rounded-2xl shadow-2xl border border-[var(--border-color)] cursor-grab transform-gpu flex flex-col"
        >
          {/* Polaroid Image */}
          <div className="w-full h-[80%] rounded-lg overflow-hidden bg-[var(--border-color)]">
            <img 
              src={card.src} 
              alt={card.name} 
              className="w-full h-full object-cover pointer-events-none grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Polaroid Caption */}
          <div className="w-full h-[20%] flex flex-col items-center justify-center pt-2">
            <p className="text-sm font-bold text-[var(--text-primary)]">
              {card.name}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-action)]">
              {card.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}