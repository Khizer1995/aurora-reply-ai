
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AutoReply
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/70 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
