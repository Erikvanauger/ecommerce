"use client"
import React, { useState } from 'react';
import {  Flame, Zap, Trophy, Users, Gamepad, ArrowRight, Play, Star, Heart} from 'lucide-react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  const [hoveredGame, setHoveredGame] = useState(null);
  const trendingGames = [
    { id: 1, title: "Stellar Odyssey", genre: "Space RPG", price: 49.99, discount: 20, players: "12.5K", rating: 9.2, isNew: true },
    { id: 2, title: "Neon Streets", genre: "Cyberpunk Action", price: 39.99, discount: 0, players: "8.2K", rating: 8.8, isHot: true },
    { id: 3, title: "Mystic Realms", genre: "Fantasy MMORPG", price: 59.99, discount: 15, players: "45.7K", rating: 9.5, isNew: false },
    { id: 4, title: "Velocity Racer", genre: "Racing", price: 29.99, discount: 30, players: "6.1K", rating: 8.5, isHot: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
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
              <div key={index} className="bg-slate-900/70 backdrop-blur-xl border border-slate-600/30 hover:border-blue-400/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:bg-slate-800/70">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400" style={{fontFamily: "var(--font-Lexend)"}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending games */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
            <div style={{fontFamily: "var(--font-Lexend)"}}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-2" >Trending</h2>
              <p className="text-sm sm:text-base text-slate-400">The hottest games on the market right now!</p>
            </div>
            <button className="flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm sm:text-base self-start sm:self-auto transition-colors">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Games Grid*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {trendingGames.map((game, index) => (
              <div
                key={game.id}
                /* onMouseEnter={() => setHoveredGame(game.id)} */
                onMouseLeave={() => setHoveredGame(null)}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-600/30 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Game Cover */}
                <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                  {game.isNew && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full z-10">
                      NEW
                    </div>
                  )}
                  {game.isHot && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full z-10 flex items-center">
                      <Flame className="h-3 w-3 mr-1" /> HOT
                    </div>
                  )}
                  {game.discount > 0 && (
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full z-10">
                      -{game.discount}%
                    </div>
                  )}
                  
                  <div className="text-slate-500 text-sm sm:text-lg font-medium text-center px-4">
                    [{game.title} Cover]
                  </div>
                  
                  <div className={`absolute inset-0 bg-slate-900/80 flex items-center justify-center transition-all duration-300 ${
                    hoveredGame === game.id ? 'opacity-100' : 'opacity-0'
                  } hidden sm:flex`}>
                    <button className="bg-slate-800/80 backdrop-blur p-3 sm:p-4 rounded-full hover:bg-slate-700/80 transition-colors border border-slate-600/50">
                      <Play className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />
                    </button>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1 truncate">{game.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-400">{game.genre}</p>
                    </div>
                    <button className="text-slate-400 hover:text-rose-400 transition-colors ml-2 flex-shrink-0">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 fill-current" />
                        <span className="text-white font-semibold ml-1 text-sm">{game.rating}</span>
                      </div>
                      <div className="flex items-center text-slate-400">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        <span className="text-xs sm:text-sm">{game.players}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold text-white">
                        ${game.discount > 0 ? (game.price * (1 - game.discount / 100)).toFixed(2) : game.price}
                      </span>
                      {game.discount > 0 && (
                        <span className="text-sm text-slate-500 line-through">${game.price}</span>
                      )}
                    </div>
                    <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 sm:px-6 py-2 rounded-lg sm:rounded-xl hover:scale-105 transition-all font-semibold text-sm shadow-lg shadow-blue-500/20">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:hidden">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center shadow-lg shadow-blue-500/20">
              View All Games <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}