
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/20 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          AutoReply
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </div>

        <Button 
          variant="outline" 
          className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          Sign In
        </Button>
      </div>
    </nav>
  );
};
