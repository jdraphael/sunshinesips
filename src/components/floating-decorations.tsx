"use client";

import { motion } from "framer-motion";
import { Heart, Sparkle, Star, Sun } from "lucide-react";

const decorations = [
  { Icon: Heart, className: "left-[8%] top-[18%] text-[#FF8EA8]", delay: 0 },
  { Icon: Sparkle, className: "left-[42%] top-[13%] text-[#F6AA00]", delay: 0.8 },
  { Icon: Star, className: "right-[18%] top-[24%] text-[#B18BD9]", delay: 0.4 },
  { Icon: Sun, className: "right-[9%] bottom-[18%] text-[#FFD65A]", delay: 1.2 },
  { Icon: Heart, className: "left-[22%] bottom-[12%] text-[#FFC6A5]", delay: 1.5 },
];

export function FloatingDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {decorations.map(({ Icon, className, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${className}`}
          initial={{ opacity: 0, y: 12, rotate: -8 }}
          animate={{ opacity: 1, y: [0, -10, 0], rotate: [-4, 5, -4] }}
          transition={{
            delay,
            duration: 4.8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Icon className="drop-shadow-sm" />
        </motion.div>
      ))}
    </div>
  );
}
