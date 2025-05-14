import { Github, Mail, Linkedin, Phone } from "lucide-react";
import { useContactInfo } from "@/hooks/useContactInfo";
import { toast } from "@/components/ui/use-toast";

const Footer = () => {
  const { contactInfo, loading, error } = useContactInfo();
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = (type: string, value: string) => {
    let url = '';
    
    switch(type) {
      case 'email':
        url = `mailto:${value}`;
        break;
      case 'linkedin':
        url = value.startsWith('http') ? value : `https://${value}`;
        break;
      case 'github':
        url = value.startsWith('http') ? value : `https://${value}`;
        break;
      case 'phone':
        url = `tel:${value}`;
        toast({
          title: "Phone Number",
          description: value,
          duration: 3000,
        });
        break;
      default:
        return;
    }
    
    if (url && !url.startsWith('tel:')) {
      window.open(url, '_blank');
    }
  };
  
  return (
    <footer className="bg-portfolio-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Taranpreet</h3>
            <p className="mb-4 text-gray-300 max-w-md">
              Computer Science Engineering student specializing in Python, Machine Learning and Web Development.
              Building innovative solutions for real-world challenges.
            </p>
            
            {/* Contact Icons */}
            <div className="flex space-x-4 mt-6">
              {loading ? (
                <div className="flex space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gray-700 rounded-full animate-pulse"></div>
                  ))}
                </div>
              ) : error ? (
                <p className="text-red-400 text-sm">Failed to load contact information</p>
              ) : contactInfo && (
                <>
                  <button 
                    onClick={() => handleContactClick('email', contactInfo.email)}
                    className="w-10 h-10 bg-portfolio-primary rounded-full flex items-center justify-center hover:bg-portfolio-secondary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </button>
                  
                  <button 
                    onClick={() => handleContactClick('linkedin', contactInfo.linkedin)}
                    className="w-10 h-10 bg-portfolio-primary rounded-full flex items-center justify-center hover:bg-portfolio-secondary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </button>
                  
                  <button 
                    onClick={() => handleContactClick('github', contactInfo.github)}
                    className="w-10 h-10 bg-portfolio-primary rounded-full flex items-center justify-center hover:bg-portfolio-secondary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </button>
                  
                  <button 
                    onClick={() => handleContactClick('phone', contactInfo.phone)}
                    className="w-10 h-10 bg-portfolio-primary rounded-full flex items-center justify-center hover:bg-portfolio-secondary transition-colors"
                    aria-label="Phone"
                  >
                    <Phone size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Taranpreet Kaur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;