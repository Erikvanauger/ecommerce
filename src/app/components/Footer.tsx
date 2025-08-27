import React from 'react'
import { Gamepad } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8" style={{fontFamily: "var(--font-SUSE)"}}>
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Gamepad className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white">XLR8</h1>
                  <p className="text-xs text-gray-400">GAMING</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">
                Experience the future of gaming with cutting-edge technology and immersive gameplay.
              </p>
            </div>
            
            {[
              {title: 'Platform', items: ['PC Games', 'Console', 'Mobile', 'VR Games']},
              {title: 'Community', items: ['Forums', 'Discord', 'Tournaments', 'Leaderboards']},
              {title: 'Support', items: ['Help Center', 'Contact', 'Refunds', 'System Status']}
            ].map((column, index) => (
              <div key={index} className="min-w-0">
                <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm block py-1">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; 2025 XLR8. All rights reserved.
            </p>
            
            <div className="hidden sm:flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                {['Discord', 'Twitter', 'YouTube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex sm:hidden space-x-6">
              {['Discord', 'Twitter', 'YouTube'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  )
}