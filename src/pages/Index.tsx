
import ProfileHeader from "@/components/ProfileHeader";
import SocialCard from "@/components/SocialCard";
import { Instagram, Linkedin, Twitter, Youtube, Facebook, Mail, Globe, Briefcase, Github } from "lucide-react";

const Index = () => {
  // Updated social links with correct portfolio URL
  const socialLinks = [{
    platform: "Portfolio",
    username: "View My Work",
    url: "https://pandey-adarsh.lovable.app/",
    icon: <Briefcase className="w-8 h-8" />,
    color: "bg-gradient-to-r from-gray-600 to-blue-600"
  }, {
    platform: "LinkedIn",
    username: "Pandey Adarsh",
    url: "https://www.linkedin.com/in/pandeyadarsh521/",
    icon: <Linkedin className="w-8 h-8" />,
    color: "bg-gradient-to-r from-blue-600 to-blue-800"
  }, {
    platform: "Website",
    username: "Tech Fab",
    url: "https://techfabyt.blogspot.com/",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-gradient-to-r from-teal-500 to-green-500"
  }, {
    platform: "YouTube",
    username: "Tech Fab",
    url: "https://www.youtube.com/@Tech_Fab",
    icon: <Youtube className="w-8 h-8" />,
    color: "bg-gradient-to-r from-red-500 to-red-600"
  }, {
    platform: "Instagram",
    username: "tech_fabyt",
    url: "https://www.instagram.com/tech_fabyt?igsh=bDYwZmc3ZXd2cnp6",
    icon: <Instagram className="w-8 h-8" />,
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  }, {
    platform: "Facebook",
    username: "Tech Fab",
    url: "https://www.facebook.com/share/16Zv9fQQft/",
    icon: <Facebook className="w-8 h-8" />,
    color: "bg-gradient-to-r from-blue-500 to-indigo-600"
  }, {
    platform: "Twitter",
    username: "Tech_Fabyt",
    url: "https://x.com/Tech_Fabyt?t=6mUicFNnWZN9ZV287-9xZA&s=09",
    icon: <Twitter className="w-8 h-8" />,
    color: "bg-gradient-to-r from-blue-400 to-blue-600"
  }, {
    platform: "GitHub",
    username: "AdarshP521",
    url: "https://github.com/AdarshP521",
    icon: <Github className="w-8 h-8" />,
    color: "bg-gradient-to-r from-gray-700 to-gray-900"
  }, {
    platform: "Email",
    username: "Contact Me",
    url: "mailto:adarshpandeycoc521@gmail.com",
    icon: <Mail className="w-8 h-8" />,
    color: "bg-gradient-to-r from-orange-500 to-red-500"
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="relative z-10 container mx-auto px-4 py-12">
        <ProfileHeader 
          name="Pandey Adarsh" 
          bio="Tech Video Creator | Frontend Developer | Graphic Designer | UI/UX & Product Designer"
          avatar="/lovable-uploads/17d1d30c-812f-4872-aff7-0729a954fbff.png"
        />
        
        <div className="max-w-2xl mx-auto space-y-4">
          {socialLinks.map((social, index) => (
            <SocialCard 
              key={social.platform} 
              platform={social.platform} 
              username={social.username} 
              url={social.url} 
              icon={social.icon} 
              color={social.color} 
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-600">
          <p className="text-sm">Developed And Design By - Pandey Adarsh</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
