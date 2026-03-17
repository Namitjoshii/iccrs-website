import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero8 from "@/assets/hero-8.jpg";
import newhero1 from "@/assets/new-hero-1.png";
import newhero2 from "@/assets/new-hero-2.png";
import newhero3 from "@/assets/new-hero-3.png";
import newhero4 from "@/assets/new-hero-4.png";
import newhero5 from "@/assets/new-hero-5.png";
import newhero6 from "@/assets/new-hero-6.png";
import newhero7 from "@/assets/new-hero-7.jpg";
import newhero8 from "@/assets/new-hero-8.jpg";
import newhero9 from "@/assets/new-hero-9.jpg";
import newhero10 from "@/assets/new-hero-10.png";
import newhero11 from "@/assets/new-hero-11.png";



const slides = [
  { src: newhero1, label: "Kashmir" },
  { src: hero2, label: "Agra" },
  { src: newhero8, label: "Kanyakumari" },
  { src: newhero11, label: "Varanasi" },
  { src: newhero4, label: "Rajasthan" },
  { src: newhero5, label: "Kerala" },
  { src: newhero2, label: "Red Fort" },
  { src: newhero7, label: "Kanyakumari" },
  { src: newhero10, label: "Kanyakumari" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollDown = () => {
    document.querySelector("#background")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.src}
            alt={`${slide.label} — India heritage`}
            className="h-full w-full object-cover animate-kenburns"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      

      {/* Text content — editorial, bottom-weighted */}
      <div className="absolute inset-0 z-30 flex items-end pb-32 sm:pb-36 lg:pb-40 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl">
          {/* Location tag */}
          <motion.div
            key={`loc-${current}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
           
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-heritage-gold/80">
              
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-[5.5rem] font-bold text-white heading-editorial mb-6 drop-shadow-2xl">
            
            <br />
           
            <br />
            <span className="text-gradient"> </span>
          </h2>

          <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed drop-shadow-md font-light mb-8">
           
          </p>

         
          
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-heritage-gold transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>

      {/* Slide indicators — minimal vertical line */}
      <div className="absolute bottom-36 right-6 sm:right-10 z-30 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? "w-1.5 h-6 bg-heritage-gold"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
