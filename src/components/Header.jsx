import React from 'react';
import { Calculator } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Calculator className="h-8 w-8 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Mortgage <span className="text-blue-600">Calculator</span>
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#calculator" 
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                Calculator
              </a>
            </li>
            <li>
              <a 
                href="#guide" 
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                Guide
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;