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
      <Footer/>
    </div>
  );
}