
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-400 to-purple-500"></div>
          </div>
          <span className="text-white font-medium text-lg geist-font">Aurora</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">Pricing</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 inter-font">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="primary-button text-white inter-font">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden glass-button p-2 rounded-lg text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card mx-6 mt-2 rounded-lg border border-white/10">
          <div className="flex flex-col space-y-4 p-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">Contact</a>
            <div className="divider my-2"></div>
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">
              Sign In
            </Link>
            <Link to="/signup">
              <Button className="primary-button text-white inter-font w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
