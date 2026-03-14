import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";




// Particle component for ambient effects
const Particle = ({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      background: "radial-gradient(circle, hsla(38,70%,60%,0.6), transparent)",
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.2, 0],
      y: [0, -40, -80],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Burst particle for the explosion effect
const BurstParticle = ({ angle, distance }: { angle: number; distance: number }) => {
  const rad = (angle * Math.PI) / 180;
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{
        left: "50%",
        top: "50%",
        background: "radial-gradient(circle, hsl(38,80%,65%), hsl(38,70%,40%))",
        boxShadow: "0 0 8px 2px hsla(38,80%,60%,0.6)",
      }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: Math.cos(rad) * distance,
        y: Math.sin(rad) * distance,
        opacity: 0,
        scale: 0.2,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
};

// Golden bow SVG
const GoldenBow = ({ pullBack }: { pullBack: boolean }) => (
  <svg
    viewBox="0 0 200 400"
    className="w-32 h-64 sm:w-40 sm:h-80 md:w-48 md:h-96"
    style={{ filter: "drop-shadow(0 0 20px hsla(38,80%,50%,0.4))", transform: "scaleX(-1)" }}
  >
    <defs>
      <linearGradient id="bowGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(38,85%,55%)" />
        <stop offset="30%" stopColor="hsl(42,90%,65%)" />
        <stop offset="50%" stopColor="hsl(45,95%,75%)" />
        <stop offset="70%" stopColor="hsl(42,90%,65%)" />
        <stop offset="100%" stopColor="hsl(35,80%,45%)" />
      </linearGradient>
      <linearGradient id="bowDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(35,70%,35%)" />
        <stop offset="50%" stopColor="hsl(38,80%,50%)" />
        <stop offset="100%" stopColor="hsl(35,70%,35%)" />
      </linearGradient>
      <filter id="bowGlow">
        <feGaussianBlur stdDeviation="2" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Main bow arc */}
    <motion.path
      d="M 160 30 Q 40 80, 30 200 Q 40 320, 160 370"
      fill="none"
      stroke="url(#bowGold)"
      strokeWidth="8"
      strokeLinecap="round"
      filter="url(#bowGlow)"
      animate={pullBack ? { d: "M 160 30 Q 20 80, 10 200 Q 20 320, 160 370" } : {}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
    {/* Inner decorative arc */}
    <motion.path
      d="M 155 45 Q 50 90, 40 200 Q 50 310, 155 355"
      fill="none"
      stroke="url(#bowDark)"
      strokeWidth="3"
      strokeLinecap="round"
      opacity={0.6}
      animate={pullBack ? { d: "M 155 45 Q 30 90, 20 200 Q 30 310, 155 355" } : {}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />

    {/* Top tip ornament */}
    <circle cx="160" cy="30" r="6" fill="url(#bowGold)" filter="url(#bowGlow)" />
    <circle cx="160" cy="30" r="3" fill="hsl(45,95%,80%)" />
    {/* Bottom tip ornament */}
    <circle cx="160" cy="370" r="6" fill="url(#bowGold)" filter="url(#bowGlow)" />
    <circle cx="160" cy="370" r="3" fill="hsl(45,95%,80%)" />

    {/* Grip ornament center */}
    <rect x="22" y="185" width="22" height="30" rx="4" fill="url(#bowDark)" opacity={0.8} />
    {/* Decorative dots along the bow */}
    {[70, 120, 170, 230, 280, 330].map((y, i) => (
      <motion.circle
        key={i}
        cx={y < 200 ? 55 - (y - 70) * 0.08 : 55 - (330 - y) * 0.08}
        cy={y}
        r="2.5"
        fill="hsl(45,95%,75%)"
        opacity={0.7}
        animate={pullBack ? { cx: (y < 200 ? 55 - (y - 70) * 0.08 : 55 - (330 - y) * 0.08) - 10 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    ))}

    {/* Bowstring */}
    <motion.line
      x1="160"
      y1="30"
      x2="160"
      y2="370"
      stroke="hsla(42,70%,70%,0.8)"
      strokeWidth="2"
      animate={
        pullBack
          ? { x1: 160, y1: 30, x2: 160, y2: 370 }
          : {}
      }
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
    {/* Bowstring pulled section (two lines to the pull point) */}
    {pullBack && (
      <>
        <motion.line
          x1="160"
          y1="30"
          x2="185"
          y2="200"
          stroke="hsla(42,70%,70%,0.9)"
          strokeWidth="2"
          initial={{ x2: 160, y2: 200 }}
          animate={{ x2: 185, y2: 200 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.line
          x1="160"
          y1="370"
          x2="185"
          y2="200"
          stroke="hsla(42,70%,70%,0.9)"
          strokeWidth="2"
          initial={{ x2: 160, y2: 200 }}
          animate={{ x2: 185, y2: 200 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </>
    )}
  </svg>
);

// Arrow component
const Arrow = ({ phase }: { phase: "ready" | "shooting" | "done" }) => (
  <motion.div
    className="absolute"
    style={{
      left: "30%",
      top: "50%",
      transformOrigin: "center center",
    }}
    initial={{ x: -30, y: -8, opacity: 0, rotate: 0 }}
    animate={
      phase === "ready"
        ? { x: -30, y: -8, opacity: 1, rotate: 0, scale: 1 }
        : phase === "shooting"
        ? { x: "60vw", y: -8, opacity: 0.8, rotate: 0, scale: 1.2 }
        : { x: "60vw", y: -8, opacity: 0, rotate: 0, scale: 1 }
    }
    transition={
      phase === "ready"
        ? { duration: 0.4, ease: "easeOut" }
        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  >
    <svg width="200" height="16" viewBox="0 0 200 16" style={{ filter: "drop-shadow(0 0 14px hsla(38,80%,60%,0.9))" }}>
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="hsl(38,80%,50%)" />
          <stop offset="70%" stopColor="hsl(42,90%,65%)" />
          <stop offset="100%" stopColor="hsl(45,95%,85%)" />
        </linearGradient>
      </defs>
      {/* Arrow shaft */}
      <rect x="" y="6.5" width="165" height="3" rx="1.5" fill="url(#arrowGrad)" />
      {/* Arrow head */}
      <polygon points="165,0 200,8 165,16" fill="hsl(42,90%,65%)" />
      {/* Feathers */}
      <polygon points="0,0 25,6 0,6" fill="hsla(38,70%,50%,0.8)" />
      <polygon points="0,16 25,10 0,10" fill="hsla(38,70%,50%,0.8)" />
      <polygon points="5,2 20,6.5 5,6.5" fill="hsla(42,80%,60%,0.5)" />
      <polygon points="5,14 20,9.5 5,9.5" fill="hsla(42,80%,60%,0.5)" />
      <polygon points="0,8 15,5 0,5" fill="hsla(38,70%,50%,0.7)" />
    </svg>
  </motion.div>
);

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: 30 + Math.random() * 40,
  y: 30 + Math.random() * 40,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 4,
}));

const burstAngles = Array.from({ length: 24 }, (_, i) => i * 15);

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"idle" | "pullback" | "shoot" | "burst" | "reveal">("idle");

  const handleBegin = useCallback(() => {
    setPhase("pullback");

    // After pullback, shoot
    setTimeout(() => setPhase("shoot"), 800);
    // Screen shake + burst
    setTimeout(() => setPhase("burst"), 1250);
    // Reveal homepage
    setTimeout(() => setPhase("reveal"), 2000);
    // Fully complete
    setTimeout(() => onComplete(), 2800);
  }, [onComplete]);

  // Preload homepage in background
  useEffect(() => {
    if (phase === "pullback") {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "reveal" || true ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, hsl(220,20%,8%) 0%, hsl(220,30%,4%) 60%, hsl(0,0%,0%) 100%)",
          }}
          animate={
            phase === "burst"
              ? { x: [0, -4, 4, -2, 2, 0] }
              : phase === "reveal"
              ? { opacity: 0 }
              : {}
          }
          transition={
            phase === "burst"
              ? { duration: 0.4, ease: "easeInOut" }
              : phase === "reveal"
              ? { duration: 0.8, ease: "easeInOut" }
              : {}
          }
          onAnimationComplete={() => {
            // cleanup handled by timeout
          }}
        >
          {/* Divine ambient glow */}
          <div
            className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(38,70%,50%,0.08) 0%, hsla(38,60%,40%,0.03) 40%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Secondary glow */}
          <motion.div
            className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(38,80%,60%,0.06) 0%, transparent 60%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating particles */}
          {phase === "idle" &&
            particles.map((p) => (
              <Particle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
            ))}

          {/* Bow */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              phase === "shoot" || phase === "burst" || phase === "reveal"
                ? { opacity: 0, scale: 0.6 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: phase === "idle" ? 1.2 : 0.3, ease: "easeOut" }}
          >
            <GoldenBow pullBack={phase === "pullback"} />

            {/* Arrow */}
            {(phase === "pullback" || phase === "shoot") && (
              <Arrow phase={phase === "pullback" ? "ready" : "shooting"} />
            )}
          </motion.div>

        {/* Begin button */}
{phase === "idle" && (
  <motion.button
    className="absolute bottom-[10%] lg:bottom-[14%] z-20 rounded-full border border-[hsla(38,70%,55%,0.3)] bg-[hsla(38,70%,50%,0.08)] backdrop-blur-sm px-10 py-3.5 text-sm font-semibold tracking-[0.2em] uppercase text-[hsl(38,70%,65%)] hover:bg-[hsla(38,70%,50%,0.15)] hover:border-[hsla(38,70%,55%,0.5)] hover:shadow-[0_0_30px_hsla(38,70%,50%,0.15)] transition-all duration-500 cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
    onClick={handleBegin}
  >
    Begin
  </motion.button>
)}

          {/* Light burst */}
          {(phase === "burst" || phase === "reveal") && (
            <>
              <motion.div
                className="absolute inset-0 z-30"
                style={{
                  background: "radial-gradient(circle at 50% 50%, hsla(42,90%,75%,0.9), hsla(38,80%,60%,0.4) 30%, transparent 70%)",
                }}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: [0, 1, 0.8, 0], scale: [0.3, 1.5, 2, 3] }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              {/* Burst particles */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                {burstAngles.map((angle, i) => (
                  <BurstParticle key={i} angle={angle} distance={150 + Math.random() * 200} />
                ))}
              </div>
            </>
          )}

          {/* Subtle vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, transparent 40%, hsla(0,0%,0%,0.5) 100%)",
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
