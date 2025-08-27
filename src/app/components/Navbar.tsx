import React from 'react'
import { Gamepad, Search, Bell, User, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Gamepad className="h-5 w-5 text-white" />
              </div>
              <div style={{ fontFamily: 'var(--font-SUSE), sans-serif' }}>
                <h1 className="text-xl font-bold text-white">XLR8</h1>
                <p className="text-xs text-gray-400">GAMING</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8" style={{fontFamily: "var(--font-SUSE)"}}>
              {['Store', 'Library', 'Community', 'Esports', 'News'].map((item) => (
                <button key={item} className="text-gray-300 hover:cursor-pointer hover:text-white transition-all hover:scale-105 font-medium">
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
  )
}
