"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cardData = [
  { id: 1, title: "Research Planning", src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&auto=format&fit=crop", rotate: -12, x: -80, y: 20 },
  { id: 2, title: "Data Analysis", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop", rotate: -6, x: -40, y: 10 },
  { id: 3, title: "Methodology", src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop", rotate: 0, x: 0, y: 0 },
  { id: 4, title: "Peer Review", src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop", rotate: 6, x: 40, y: 10 },
  { id: 5, title: "Publication", src: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=500&auto=format&fit=crop", rotate: 12, x: 80, y: 20 },
];

export default function VisionCards() {
  const [highestZ, setHighestZ] = useState(10);
  const [cardZIndices, setCardZIndices] = useState<Record<number, number>>({
    1: 1, 2: 2, 3: 3, 4: 2, 5: 1 // Middle card starts on top
  });

  const bringToFront = (id: number) => {
    setHighestZ((prev) => prev + 1);
    setCardZIndices((prev) => ({ ...prev, [id]: highestZ + 1 }));
  };

  return (
    <div className="relative w-full h-[450px] flex justify-center items-center perspective-1000">
      {cardData.map((card) => (
        <motion.div
          key={card.id}
          drag
          dragConstraints={{ left: -150, right: 150, top: -100, bottom: 100 }}
          onDragStart={() => bringToFront(card.id)}
          onMouseDown={() => bringToFront(card.id)}
          initial={{ opacity: 0, y: 100, rotate: 0, x: 0 }}
          whileInView={{ opacity: 1, y: card.y, rotate: card.rotate, x: card.x }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          style={{ zIndex: cardZIndices[card.id] }}
          className="absolute w-48 sm:w-56 aspect-[3/4] bg-[var(--card-bg)] p-3 rounded-2xl shadow-2xl border border-[var(--border-color)] cursor-grab transform-gpu"
        >
          {/* Card Image */}
          <div className="w-full h-[85%] rounded-lg overflow-hidden bg-[var(--border-color)]">
            <img 
              src={card.src} 
              alt={card.title} 
              className="w-full h-full object-cover pointer-events-none grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Card Caption */}
          <div className="w-full h-[15%] flex items-center justify-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              {card.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}