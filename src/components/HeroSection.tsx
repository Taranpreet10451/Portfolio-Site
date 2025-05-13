
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Preload the profile image
    const img = new Image();
    img.src = "/lovable-uploads/1bed4523-2ca8-4607-942a-294d6deba0d0.png";
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-white to-portfolio-light dark:from-portfolio-dark dark:to-gray-900 overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Hi, I'm <span className="text-portfolio-primary">Taranpreet Kaur</span>
          </h1>
          <p 
            className={`text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Full Stack Developer with expertise in Python, Django, React, and Data Science.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              className="button-primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>
        </div>
        <div className={`md:w-1/2 flex justify-center transition-all duration-700 delay-300 ${
          isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-accent shadow-xl">
            <img 
              src="/lovable-uploads/1bed4523-2ca8-4607-942a-294d6deba0d0.png" 
              alt="Taranpreet Kaur" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-portfolio-primary" />
      </button>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-portfolio-accent/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-portfolio-primary/10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
