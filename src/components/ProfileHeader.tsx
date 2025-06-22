
import { User } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatar?: string;
}

const ProfileHeader = ({ name, bio, avatar }: ProfileHeaderProps) => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="relative mb-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto border-4 border-white/50 shadow-2xl object-cover backdrop-blur-sm transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-3xl"
          />
        ) : (
          <div className="w-32 h-32 rounded-full mx-auto border-4 border-white/50 shadow-2xl bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center backdrop-blur-sm transform transition-all duration-500 hover:scale-110 hover:rotate-3">
            <User className="w-16 h-16 text-white" />
          </div>
        )}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
      </div>
      <h1 className="text-4xl font-bold text-slate-800 mb-2 transition-all duration-300 hover:text-blue-600">{name}</h1>
      <p className="text-slate-600 text-lg max-w-md mx-auto leading-relaxed">{bio}</p>
    </div>
  );
};

export default ProfileHeader;
