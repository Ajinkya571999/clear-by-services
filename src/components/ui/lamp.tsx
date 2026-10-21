"use client";
import React from "react";
import { motion } from "framer-motion";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-[var(--bg-primary)] w-full rounded-md z-0 pt-20 pb-12 transition-colors duration-300 ${
        className || ""
      }`}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, var(--accent-action), transparent)`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[var(--accent-action)] via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-[var(--bg-primary)] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] transition-colors duration-300" />
          <div className="absolute w-40 h-[100%] left-0 bg-[var(--bg-primary)] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)] transition-colors duration-300" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, var(--accent-action))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[var(--accent-action)] [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-[var(--bg-primary)] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)] transition-colors duration-300" />
          <div className="absolute w-[100%] right-0 bg-[var(--bg-primary)] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] transition-colors duration-300" />
        </motion.div>
        
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[var(--bg-primary)] blur-2xl transition-colors duration-300"></div>
        <div className="absolute top-1/2 z-50 h-48 w-[32rem] bg-transparent opacity-10 backdrop-blur-md"></div>
        
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[var(--accent-action)] opacity-50 blur-3xl transition-colors duration-300"></div>
        
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[var(--accent-action)] blur-2xl transition-colors duration-300"
        ></motion.div>
        
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[var(--accent-action)] transition-colors duration-300"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[10rem] bg-[var(--bg-primary)] transition-colors duration-300"></div>
      </div>

      {/* Adjusted offset to give the text breathing room from the top beam */}
      <div className="relative z-50 flex -translate-y-8 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};