import React from 'react';
import { Calculator, Home, Info, FileText, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Mortgage Calculator</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              A free tool to help you make informed decisions about your mortgage.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3 text-base font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#calculator" 
                  className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  <Calculator className="h-4 w-4" />
                  <span>Calculator</span>
                </a>
              </li>
              <li>
                <a 
                  href="#guide" 
                  className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  <Info className="h-4 w-4" />
                  <span>Mortgage Guide</span>
                </a>
              </li>
              <li>
                <a 
                  href="#glossary" 
                  className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  <Home className="h-4 w-4" />
                  <span>Mortgage Glossary</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-3 text-base font-semibold text-gray-900">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  <Shield className="h-4 w-4" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  <FileText className="h-4 w-4" />
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-3 text-base font-semibold text-gray-900">Disclaimer</h4>
            <p className="text-sm text-gray-600">
              This calculator provides estimates only. Consult with a mortgage professional for accurate information.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-600">
            © {year} Mortgage Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;