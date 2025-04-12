"use client";

import { motion } from "framer-motion";

type LoaderProps = {
  className?: string;
};

const circleStyle = "w-3 h-3 bg-green rounded-full";

export default function Loader({ className = "h-32" }: LoaderProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={circleStyle}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
