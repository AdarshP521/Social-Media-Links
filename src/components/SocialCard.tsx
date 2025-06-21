
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
      className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${color} animate-scale-in`}
      style={{ animationDelay: `${Math.random() * 0.5}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-3xl">
            {icon}
          </div>
          <div>
            <h3 className={`font-bold text-lg ${textColor}`}>{platform}</h3>
            <p className={`${textColor} opacity-80`}>@{username}</p>
          </div>
        </div>
        
        <ExternalLink className={`w-5 h-5 ${textColor} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default SocialCard;
