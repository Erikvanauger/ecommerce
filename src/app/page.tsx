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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar/>
      <Hero/>

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

      {/* Trending*/}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Trending Now</h2>
              <p className="text-gray-400">The hottest games on the market</p>
            </div>
            <button className="flex items-center text-cyan-400 hover:text-white font-semibold">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingGames.map((game, index) => (
              <div
                key={game.id}
                /* onMouseEnter={() => setHoveredGame(game.id)} */
                onMouseLeave={() => setHoveredGame(null)}
                className="group relative bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
              >
                {/* Game Cover */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  {game.isNew && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      NEW
                    </div>
                  )}
                  {game.isHot && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center">
                      <Flame className="h-3 w-3 mr-1" /> HOT
                    </div>
                  )}
                  {game.discount > 0 && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      -{game.discount}%
                    </div>
                  )}
                  <div className="text-gray-600 text-lg font-medium">[{game.title} Cover]</div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 ${
                    hoveredGame === game.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button className="bg-white/20 backdrop-blur p-4 rounded-full hover:bg-white/30 transition-colors">
                      <Play className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{game.title}</h3>
                      <p className="text-sm text-gray-400">{game.genre}</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-400 transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold ml-1">{game.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">{game.players}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-white">
                        ${game.discount > 0 ? (game.price * (1 - game.discount / 100)).toFixed(2) : game.price}
                      </span>
                      {game.discount > 0 && (
                        <span className="text-sm text-gray-400 line-through">${game.price}</span>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-xl hover:scale-105 transition-all font-semibold">
                      Add to Cart
                    </button>
                  </div>
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