
import VantaNetBackground from "@/components/VantaNetBackground";

interface AuthHeaderProps {
  badge: string;
  title: string;
}

export const AuthHeader = ({ badge, title }: AuthHeaderProps) => {
  return (
    <div className="h-[150px] relative bg-neutral-800 overflow-hidden">
      <VantaNetBackground />
      <div className="absolute top-4 left-4 z-10">
        <span className="px-2 py-1 bg-neutral-800/80 rounded-full text-xs text-neutral-400 mb-2 inline-block font-medium tracking-wide">
          {badge}
        </span>
        <h2 className="text-2xl font-bold text-white inter-font">{title}</h2>
        <div className="h-1 w-12 bg-neutral-400 mt-2 rounded-full"></div>
      </div>
      
      {/* Aurora branding element */}
      <div className="absolute top-4 right-4 z-10">
        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-400 to-purple-500"></div>
        </div>
      </div>
    </div>
  );
};
