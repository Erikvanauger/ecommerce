"use client"
import React from 'react';
import { Zap, Trophy, Users, Gamepad} from 'lucide-react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingGames from './components/TrendingGames';

export default function Home() {
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar/>
      <Hero/>

      {/* Stats Bar */}
      <div className="relative -mt-16 sm:-mt-20 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Users, value: '2.5M+', label: 'Active Players' },
              { icon: Gamepad, value: '15K+', label: 'Games Available' },
              { icon: Trophy, value: '500K+', label: 'Tournaments' },
              { icon: Zap, value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="bg-black/80 backdrop-blur-xl border border-gray-600/30 hover:border-yellow-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:bg-gray-900/70">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400" style={{fontFamily: "var(--font-Lexend)"}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TrendingGames/>
      <section className='py-20 px-4'>
        <div className="max-w-7xl mx-auto">
          <h2 className="lg:text-5xl text-2xl sm:text-3xl font-semibold text-white text-center mb-16 font-Lexend">Categories</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Action', color: 'from-purple-500 to-gray-700', icon: '⚔️' },
              { name: 'RPG', color: 'from-purple-500 to-gray-700', icon: '🐉' },
              { name: 'Sci-Fi', color: 'from-purple-500 to-gray-700', icon: '🚀' },
              { name: 'Racing', color: 'from-purple-500 to-gray-700', icon: '🏎️' },
              { name: 'Simulation', color: 'from-purple-500 to-gray-700', icon: '🧠' },
              { name: 'Horror', color: 'from-purple-500 to-gray-700', icon: '👻' }
            ].map((category, index) => (
              <div
                key={index}
                className={`relative h-32 bg-gradient-to-r ${category.color} rounded-3xl overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="relative h-full flex flex-col items-center justify-center text-white">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="font-bold text-lg text-center">{category.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}