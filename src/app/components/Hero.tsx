import React,{useEffect,useState} from 'react'
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroSlides = [
    { title: "CLAIR OBSCURE EXPEDITION 33", subtitle: "For those who come after", color: "from-blue-900/70 to-indigo-900/70" },
    { title: "MODERN WARFARE", subtitle: "Bang Bang", color: "from-red-900/60 to-orange-900/60" },
    { title: "RED DEAD REDEMPTION 2", subtitle: "Arthur, I have a plan", color: "from-amber-900/50 to-red-900/50" }
  ];
  const [particles, setParticles] = useState<
    { left: string; top: string; animationDelay: string; animationDuration: string }[]
  >([]);

  useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }, []);

    useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setParticles(newParticles);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div className="absolute inset-0 ">
          <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].color} opacity-80`} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/60" />
        </div>
        
        {/*Particles */}
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 ">
          {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-pulse"
            style={p}
          />
        ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Dynamic sizing*/}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-indigo-300 mb-4 sm:mb-6 animate-pulse leading-tight">
            <span className="block sm:hidden text-center break-words">
              {heroSlides[currentSlide].title.split(' ').map((word, index) => (
                <span key={index} className="inline-block mr-2 mb-1">{word}</span>
              ))}
            </span>
            <span className="hidden sm:block">
              {heroSlides[currentSlide].title}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 mb-6 sm:mb-8 font-light max-w-4xl mx-auto">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg sm:max-w-none mx-auto">
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl sm:rounded-2xl text-white font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/20">
              <span className="flex items-center justify-center">
                EXPLORE NOW 
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-400/50 hover:border-blue-400/70 rounded-xl sm:rounded-2xl text-white font-bold text-base sm:text-lg hover:bg-slate-800/50 transition-all duration-300 backdrop-blur">
              <span className="flex items-center justify-center">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> WATCH TRAILER
              </span>
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-8 sm:mt-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-400 scale-125 shadow-lg shadow-blue-400/50' 
                    : 'bg-slate-400/50 hover:bg-slate-300/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
  )
}