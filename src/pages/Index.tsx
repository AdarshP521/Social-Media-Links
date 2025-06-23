import ProfileHeader from "@/components/ProfileHeader";
import SocialCard from "@/components/SocialCard";
import { Instagram, Linkedin, Twitter, Youtube, Facebook, Mail, Globe, Briefcase, Github } from "lucide-react";
const Index = () => {
  // Updated social links with correct portfolio URL
  const socialLinks = [{
    platform: "Portfolio",
    username: "View My Work",
    url: "https://pandeyadarsh.framer.ai/",
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
  return <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-70 animate-bounce" style={{
        animationDelay: '0s',
        animationDuration: '3s'
      }}></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-60 animate-bounce" style={{
        animationDelay: '1s',
        animationDuration: '4s'
      }}></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-green-300 rounded-full opacity-50 animate-bounce" style={{
        animationDelay: '2s',
        animationDuration: '5s'
      }}></div>
        <div className="absolute bottom-40 right-10 w-18 h-18 bg-pink-300 rounded-full opacity-65 animate-bounce" style={{
        animationDelay: '0.5s',
        animationDuration: '3.5s'
      }}></div>
        
        {/* Floating Squares */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-orange-300 opacity-40 animate-spin" style={{
        animationDuration: '8s'
      }}></div>
        <div className="absolute top-3/4 right-1/4 w-14 h-14 bg-teal-300 opacity-50 animate-spin" style={{
        animationDuration: '6s',
        animationDirection: 'reverse'
      }}></div>
        
        {/* Moving Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-20 animate-pulse blur-3xl" style={{
        animationDuration: '4s'
      }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full opacity-25 animate-pulse blur-3xl" style={{
        animationDuration: '6s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-15 animate-pulse blur-3xl" style={{
        animationDuration: '5s'
      }}></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-pulse" style={{
        animationDuration: '3s'
      }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-15 animate-pulse" style={{
        animationDuration: '4s'
      }}></div>
      </div>

      {/* Glass overlay for better readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Image */}
        

        <ProfileHeader name="Pandey Adarsh" bio="Tech Video Creator | Frontend Developer | Graphic Designer | UI/UX & Product Designer" avatar="/lovable-uploads/17d1d30c-812f-4872-aff7-0729a954fbff.png" />
        
        <div className="max-w-2xl mx-auto space-y-4">
          {socialLinks.map((social, index) => <SocialCard key={social.platform} platform={social.platform} username={social.username} url={social.url} icon={social.icon} color={social.color} />)}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-white/80">
          <p className="text-sm font-medium bg-white/10 backdrop-blur-md rounded-full px-6 py-2 inline-block border border-white/20">
            Developed And Design By - Pandey Adarsh
          </p>
        </div>
      </div>
    </div>;
};
export default Index;
