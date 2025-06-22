
import { ExternalLink } from "lucide-react";

interface SocialCardProps {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  textColor?: string;
}

const SocialCard = ({ platform, username, url, icon, color, textColor = "text-white" }: SocialCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl ${color} animate-scale-in backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20`}
      style={{ animationDelay: `${Math.random() * 0.5}s` }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-3xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            {icon}
          </div>
          <div className="transform transition-all duration-300 group-hover:translate-x-2">
            <h3 className={`font-bold text-lg ${textColor} transition-all duration-300 group-hover:text-shadow-lg`}>{platform}</h3>
            <p className={`${textColor} opacity-80 transition-all duration-300 group-hover:opacity-100`}>@{username}</p>
          </div>
        </div>
        
        <ExternalLink className={`w-5 h-5 ${textColor} opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12`} />
      </div>
      
      {/* Animated bottom bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/30 to-white/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
    </div>
  );
};

export default SocialCard;
