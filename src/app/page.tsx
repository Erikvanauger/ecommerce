'use client'
import React, { useState } from 'react';
import { Search, Menu, Star, ChevronRight, Gamepad2, Headphones, Monitor } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Games', icon: Gamepad2 },
    { id: 'pc', name: 'PC Games', icon: Monitor },
    { id: 'console', name: 'Console', icon: Gamepad2 },
    { id: 'accessories', name: 'Accessories', icon: Headphones },

  ];

  const featuredGames = [
    { title: 'Cyberpunk 2077', price: '$00.00', originalPrice: '$00.00', rating: 1.2 },
    { title: 'The Witcher 3', price: '$00.00', originalPrice: '$00.00', rating: 2.3 },
    { title: 'Red Dead Redemption 2', price: '$00.00', originalPrice: '$00.00', rating: 3.4 }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-gray-800">GameShop</span>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <button className="md:hidden p-2 text-gray-600 hover:text-gray-800">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-300 text-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Some fancy quote
              </h1>
              <p className="text-lg mb-6 text-gray-700">
                Even fancier sub-quote
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Shop Now
                </button>
                <button className="border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  View Deals
                </button>
              </div>
            </div>
            <div className="bg-gray-400 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-lg">[Hero]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-gray-300 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Deals */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Deals</h2>
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <span className="text-gray-600">Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{game.title}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(game.rating) ? 'text-gray-700 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({game.rating})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-800">{game.price}</span>
                      <span className="ml-2 text-sm text-gray-500 line-through">{game.originalPrice}</span>
                    </div>
                    <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Popular Games</h2>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-400 rounded-lg px-3 py-2 text-sm">
                <option>Sort by: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Release Date</option>
              </select>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 text-gray-300">Get the latest news and deals.</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
            />
            <button className="bg-gray-600 px-6 py-2 rounded-r-lg hover:bg-gray-700 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Gamepad2 className="h-6 w-6 text-gray-400" />
                <span className="ml-2 text-lg font-bold">GameShop</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your ultimate destination for gaming.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">something</a></li>
                <li><a href="#">something</a></li>
                <li><a href="#">something</a></li>
                <li><a href="#">something</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">something</a></li>
                <li><a href="#">something</a></li>
                <li><a href="#">something</a></li>
                <li><a href="#">something</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">something</a></li>
                <li><a href="#">something</a></li>
                <li><a href="#">something</a></li>
                <li><a href="#">something</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 GameShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
