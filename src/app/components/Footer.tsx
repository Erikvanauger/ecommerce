import React from 'react'
import { Gamepad } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" style={{fontFamily: "var(--font-SUSE)"}}>
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
              {title: 'Platform', items: ['PC Games', 'Console', 'Mobile', 'VR Games']},
              {title: 'Community', items: ['Forums', 'Discord', 'Tournaments', 'Leaderboards']},
              {title: 'Support', items: ['Help Center', 'Contact', 'Refunds', 'System Status']}
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-white font-bold mb-4" >{column.title}</h3>
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
          
          <div className="border-t border-white/10 pt-8 text-center" >
            <p className="text-gray-400 text-sm">&copy; 2025 XLR8. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
