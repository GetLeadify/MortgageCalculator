import { Link } from 'react-router-dom';
import { Home, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <Home className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">MortgageCalc</span>
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Our mortgage calculator helps you estimate your monthly mortgage payment, 
              see how much total interest you'll pay, and understand your amortization schedule.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="#calculator" className="text-gray-300 hover:text-white transition-colors">Calculator</a>
              </li>
              <li>
                <a href="#guide" className="text-gray-300 hover:text-white transition-colors">Mortgage Guide</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <a href="mailto:contact@mortgagecalc.com" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MortgageCalc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="https://twitter.com" className="text-gray-400 hover:text-gray-300 transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-gray-300 transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-300 transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;