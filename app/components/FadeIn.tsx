"use client";

import { motion } from "framer-motion";
import React from "react";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Mulai: Transparan & agak turun
      whileInView={{ opacity: 1, y: 0 }} // Selesai: Jelas & posisi normal
      viewport={{ once: true, margin: "-100px" }} // Animasi sekali aja pas kelihatan
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} // Durasi smooth
    >
      {children}
    </motion.div>
  );
}