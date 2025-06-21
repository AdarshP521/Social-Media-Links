import ProfileHeader from "@/components/ProfileHeader";
import SocialCard from "@/components/SocialCard";
import { Instagram, Linkedin, Twitter, Youtube, Facebook, Mail, Globe, Briefcase } from "lucide-react";
const Index = () => {
  // Updated social links with all 8 requested platforms
  const socialLinks = [{
    platform: "Portfolio",
    username: "View My Work",
    url: "https://yourportfolio.com",
    icon: <Briefcase className="w-8 h-8" />,
    color: "bg-gradient-to-r from-gray-600 to-blue-600"
  }, {
    platform: "LinkedIn",
    username: "yourusername",
    url: "https://linkedin.com/in/yourusername",
    icon: <Linkedin className="w-8 h-8" />,
    color: "bg-gradient-to-r from-blue-600 to-blue-800"
  }, {
    platform: "Website",
    username: "Visit Site",
    url: "https://yourwebsite.com",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-gradient-to-r from-teal-500 to-green-500"
  }, {
    platform: "YouTube",
    username: "yourusername",
    url: "https://youtube.com/@yourusername",
    icon: <Youtube className="w-8 h-8" />,
    color: "bg-gradient-to-r from-red-500 to-red-600"
  }, {
    platform: "Instagram",
    username: "yourusername",
    url: "https://instagram.com/yourusername",
    icon: <Instagram className="w-8 h-8" />,
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  }, {
    platform: "Facebook",
    username: "yourusername",
    url: "https://facebook.com/yourusername",
    icon: <Facebook className="w-8 h-8" />,
    color: "bg-gradient-to-r from-blue-500 to-indigo-600"
  }, {
    platform: "Twitter",
    username: "yourusername",
    url: "https://twitter.com/yourusername",
    icon: <Twitter className="w-8 h-8" />,
    color: "bg-gradient-to-r from-blue-400 to-blue-600"
  }, {
    platform: "Email",
    username: "Contact Me",
    url: "mailto:your.email@example.com",
    icon: <Mail className="w-8 h-8" />,
    color: "bg-gradient-to-r from-orange-500 to-red-500"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <ProfileHeader name="Your Name" bio="Content Creator | Digital Enthusiast | Follow me for awesome content!" />
        
        <div className="max-w-2xl mx-auto space-y-4">
          {socialLinks.map((social, index) => <SocialCard key={social.platform} platform={social.platform} username={social.username} url={social.url} icon={social.icon} color={social.color} />)}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-purple-100">
          <p className="text-sm opacity-80">Developed And Design By - Pandey Adarsh</p>
        </div>
      </div>
    </div>;
};
export default Index;