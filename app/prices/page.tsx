"use client";
import Card from "@/components/Card/Card";
import { JSX } from "react";
import { motion } from "framer-motion";

export default function Prices(): JSX.Element {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  const hoverEffect = {
    scale: 1.02, // Slightly increase the size
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Add a shadow effect
  };

  return (
    <div className="flex flex-col gap-2 p-8">
      <div className="flex flex-row sm:flex-col">
        <h1 className="text-3xl font-bold">Precios en carro</h1>
        <p className="text-sm self-center">Puede ser vasos de vidrio o de plástico.</p>
      </div>
      <div className="space-y-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={hoverEffect}
        >
          <Card title="Mote Simple" price="$1.800" description="Mote con huesillo de xx lt" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={hoverEffect}
        >
          <Card title="Mote Mediano" price="$2.300" description="Mote con huesillo de xx lt" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={hoverEffect}
        >
          <Card title="Mote Grande" price="$3.300" description="Mote con huesillo de xx lt" />
        </motion.div>
      </div>
    </div>
  );
}