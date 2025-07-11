import { User } from "lucide-react";
interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatar?: string;
}
const ProfileHeader = ({
  name,
  bio,
  avatar
}: ProfileHeaderProps) => {
  return <div className="text-center mb-8 animate-fade-in">
      <div className="relative mb-4">
        <img src="/lovable-uploads/74298ee8-bb0a-41cb-93ba-1bc28e8c7b95.png" alt={name} className="w-32 h-32 rounded-full mx-auto border-4 border-white/50 shadow-2xl object-cover backdrop-blur-sm transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-3xl" />
        
      </div>
      <h1 className="text-4xl font-bold text-slate-800 mb-2 transition-all duration-300 hover:text-blue-600">{name}</h1>
      <p className="text-slate-600 text-lg max-w-md mx-auto leading-relaxed">{bio}</p>
    </div>;
};
export default ProfileHeader;