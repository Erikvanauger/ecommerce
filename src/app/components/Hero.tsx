import React,{useEffect,useState} from 'react'
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroSlides = [
    { title: "CLAIR OBSCURE EXPEDITION 33", subtitle: "For those who come after", color: "from-cyan-500 to-purple-600" },
    { title: "MODERN WARFARE", subtitle: "Bang Bang", color: "from-orange-500 to-red-600" },
    { title: "RED DEAD REDEMPTION 2", subtitle: "Arthur, I have a plan", color: "from-green-400 to-blue-600" }
  ];

  useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }, []);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].color} opacity-30`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
        
        {/*Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-purple-400 mb-4 animate-pulse">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="flex items-center">
                EXPLORE NOW 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-2xl text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur">
              <span className="flex items-center">
                <Play className="mr-2 h-5 w-5" /> WATCH TRAILER
              </span>
            </button>
          </div>
        </div>
      </section>
  )
}
