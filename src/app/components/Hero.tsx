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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].color} opacity-30`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
        
        {/*Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
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

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Dynamic sizing*/}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-purple-400 mb-4 sm:mb-6 animate-pulse leading-tight">
            <span className="block sm:hidden text-center break-words">
              {heroSlides[currentSlide].title.split(' ').map((word, index) => (
                <span key={index} className="inline-block mr-2 mb-1">{word}</span>
              ))}
            </span>
            <span className="hidden sm:block">
              {heroSlides[currentSlide].title}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 font-light max-w-4xl mx-auto">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg sm:max-w-none mx-auto">
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl sm:rounded-2xl text-white font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="flex items-center justify-center">
                EXPLORE NOW 
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 rounded-xl sm:rounded-2xl text-white font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur">
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
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
  )
}