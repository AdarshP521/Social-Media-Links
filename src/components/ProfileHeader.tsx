
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
            className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
        )}
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
      </div>
      <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
      <p className="text-purple-100 text-lg max-w-md mx-auto">{bio}</p>
    </div>
  );
};

export default ProfileHeader;
