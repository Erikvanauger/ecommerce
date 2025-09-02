"use-client"
import React, { useState } from 'react'
import { Gamepad, Search, Bell, User, ShoppingCart, Menu, X} from 'lucide-react'
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    {name:"Store", href: "/store"},
    {name:"Library", href: "/library"},
    {name:"Community", href: "/community"},
    {name:"Esports", href: "/esport"},
    {name:"News", href: "/news"},

  ]

  return (
    <header className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg">
      <div className="px-3 sm:px-6 py-3 sm:py-4">
        <div
          className="flex items-center justify-between"
          style={{ fontFamily: "var(--font-SUSE)" }}
        >
          {/* Logo */}
          <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
              <Gamepad className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <div style={{ fontFamily: "var(--font-SUSE), sans-serif" }}>
              <h1 className="text-lg sm:text-xl font-bold text-white">XLR8</h1>
              <p className="text-xs text-gray-400 hidden sm:block">GAMING</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center lg:space-x-10 xl:space-x-20 text-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => router.push(item.href)}
                className="text-gray-300 hover:cursor-pointer hover:text-white transition-all hover:scale-105 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-48 xl:w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur text-sm"
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
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">2</span>
              </div>
            </button>
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors sm:hidden"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Tablet Search */}
            <div className="relative hidden sm:block lg:hidden">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-32 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur text-sm"
              />
            </div>

            <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">2</span>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 sm:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search games..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur"
              />
            </div>
          </div>
        )}

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="mt-4 xl:hidden border-t border-white/10 pt-4">
            <nav
              className="flex flex-col space-y-4"
              style={{ fontFamily: "var(--font-SUSE)" }}
            >
              {["Store", "Library", "Community", "Esports", "News"].map(
                (item) => (
                  <button
                    key={item}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-left py-2"
                  >
                    {item}
                  </button>
                )
              )}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10 lg:hidden">
                <button className="p-2 text-gray-300 hover:text-white transition-colors">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-300 hover:text-white transition-colors">
                  <User className="h-5 w-5" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}