
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white geist-font">
            AutoReply
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors inter-font text-sm">Contact</a>
          </div>

          <button className="glass-button px-4 py-2 rounded-lg text-white text-sm font-medium inter-font">
            Sign In
          </button>
        </div>
      </nav>
      
      {/* Divider after nav */}
      <div className="relative z-10 divider mt-20"></div>
    </>
  );
};
