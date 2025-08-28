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

      {/* Trending */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
            <div style={{fontFamily: "var(--font-Lexend)"}}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-2" >Trending</h2>
              <p className="text-sm sm:text-base text-gray-400">The hottest games on the market right now!</p>
            </div>
            <button className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-sm sm:text-base self-start sm:self-auto transition-colors">
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
                className="group relative bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/10"
              >
                {/* Game Cover */}
                <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                  {game.isNew && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full z-10">
                      NEW
                    </div>
                  )}
                  {game.isHot && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-xs font-bold px-2 sm:px-3 py-1 rounded-full z-10 flex items-center">
                      <Flame className="h-3 w-3 mr-1" /> HOT
                    </div>
                  )}
                  {game.discount > 0 && (
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-xs font-bold px-2 sm:px-3 py-1 rounded-full z-10">
                      -{game.discount}%
                    </div>
                  )}
                  
                  <div className="text-gray-500 text-sm sm:text-lg font-medium text-center px-4">
                    [{game.title} Cover]
                  </div>
                  
                  <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300 ${
                    hoveredGame === game.id ? 'opacity-100' : 'opacity-0'
                  } hidden sm:flex`}>
                    <button className="bg-gray-800/80 backdrop-blur p-3 sm:p-4 rounded-full hover:bg-gray-700/80 transition-colors border border-yellow-500/30 hover:border-yellow-400/50">
                      <Play className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
                    </button>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1 truncate">{game.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{game.genre}</p>
                    </div>
                    <button className="text-gray-400 hover:text-yellow-400 transition-colors ml-2 flex-shrink-0">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold ml-1 text-sm">{game.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        <span className="text-xs sm:text-sm">{game.players}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold text-yellow-400">
                        ${game.discount > 0 ? (game.price * (1 - game.discount / 100)).toFixed(2) : game.price}
                      </span>
                      {game.discount > 0 && (
                        <span className="text-sm text-gray-500 line-through">${game.price}</span>
                      )}
                    </div>
                    <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black px-4 sm:px-6 py-2 rounded-lg sm:rounded-xl hover:scale-105 transition-all font-bold text-sm shadow-lg shadow-yellow-500/20">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:hidden">
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black px-8 py-3 rounded-xl font-bold flex items-center shadow-lg shadow-yellow-500/20">
              View All Games <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}