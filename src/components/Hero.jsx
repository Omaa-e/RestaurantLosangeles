import { useState, useEffect } from "react";
import img1 from "../assets/hero-1.avif"
import img2 from "../assets/hero-2.jpeg"
import img3 from "../assets/hero-3.jpeg"
import {ChevronLeft, ChevronRight} from "lucide-react";


// Hero.jsx


const images = [
  img1,
  img2,
  img3
];

 function Hero() {
  const [current, setCurrent] = useState(0);

  // auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* slides */}
       {/* slides — using <img> + object-cover instead of a CSS background-image */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* subtle overlay so the nav text on top stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-transparent" />

      {/* prev / next arrows */}
      <button
         onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl w-15 h-20 flex items-center justify-center">
        <ChevronLeft size={60} strokeWidth={1.5}/>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl w-15 h-10 flex items-center justify-center"
      >
        <ChevronRight size={60} strokeWidth={1.5} />
      </button>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero