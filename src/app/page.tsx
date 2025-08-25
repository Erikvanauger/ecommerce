"use client"
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Bell, Zap, Trophy, Users, Gamepad, ArrowRight, Play} from 'lucide-react';

export default function FuturisticGamingStore() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/*Header */}
      <header className="fixed top-4 left-4 right-4 z-50 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Gamepad className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">XLR8</h1>
                <p className="text-xs text-gray-400">GAMING</p>
              </div>
            </div>
            
            {/* Center Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {['Store', 'Library', 'Community', 'Esports', 'News'].map((item) => (
                <button key={item} className="text-gray-300 hover:text-white transition-all hover:scale-105 font-medium">
                  {item}
                </button>
              ))}
            </nav>
            
            {/* Nav */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur"
                />
              </div>
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">2</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
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

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative -mt-20 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users, value: '2.5M+', label: 'Active Players' },
              { icon: Gamepad, value: '15K+', label: 'Games Available' },
              { icon: Trophy, value: '500K+', label: 'Tournaments' },
              { icon: Zap, value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all">
                <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Gamepad className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">XLR8</h1>
                  <p className="text-xs text-gray-400">GAMING</p>
                </div>
              </div>
            </div>
            
            {[
              { title: 'Platform', items: ['something', 'something', 'something', 'something'] },
              { title: 'Community', items: ['something', 'something', 'something', 'something'] },
              { title: 'Support', items: ['something', 'something', 'something', 'something'] }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-white font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; 2025 XLR8. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}