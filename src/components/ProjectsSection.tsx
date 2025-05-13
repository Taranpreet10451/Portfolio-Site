import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ProjectCardProps {
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
  delay: number;
  image?: string;
  githubLink: string; // Added githubLink prop
}

const ProjectCard = ({ title, description, achievements, technologies, delay, image, githubLink }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  return (
    <Card 
      ref={ref} 
      className={`project-card slide-in h-full flex flex-col ${isInView ? 'active' : ''}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl text-portfolio-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-medium mb-2">Key Achievements:</h4>
        <ul className="space-y-1 list-disc pl-5 mb-4 text-sm">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-portfolio-light/50 dark:bg-portfolio-dark/50">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button 
            variant="outline" 
            className="w-full text-portfolio-primary border-portfolio-primary hover:bg-portfolio-primary/10"
          >
            View Project
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "KrishiAI",
      description: "Real-time soil evaluation system using machine learning",
      achievements: [
        "Deployed a real-time soil evaluation system using Random Forest and Logistic Regression, cutting nutrient waste by 15% across 500 hectares",
        "Achieved 95.3% accuracy in soil health classification using advanced predictive modeling, optimizing agricultural decisions",
        "Constructed a Flask-based backend for seamless frontend-sensor integration"
      ],
      technologies: ["Python", "Random Forest", "Logistic Regression", "Flask", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Taranpreet10451/KrishiAI" // Replace with actual GitHub link
    },
    {
      title: "Real-Time Object Detection Using LiDAR",
      description: "Advanced object detection system using LiDAR technology",
      achievements: [
        "Integrated LiDAR data with custom MATLAB algorithms, accelerating real-time object detection by 25% for 1,000+ data points",
        "Designed algorithms to process 500+ real-time object detection data points efficiently, partnering with a 5-person team to deploy solutions and complete the project successfully"
      ],
      technologies: ["MATLAB", "LiDAR", "Object Detection", "Algorithm Design"],
      image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Taranpreet10451/Real-Time-Object-Detection-Using-LiDAR" // Replace with actual GitHub link
    },
    {
      title: "VITALK Social Media App",
      description: "Comprehensive social media platform for college students",
      achievements: [
        "Designed 'VITalk,' a social media app for college students, integrating posts, events, login, and chat features for 5,000+ monthly active users",
        "Built the app using HTML, CSS, React, and Node.js, scaling to support 10,000+ users with a 30% reduction in load time via agile workflows"
      ],
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Taranpreet10451/VITalk_Calender" // Replace with actual GitHub link
    },
    {
      title: "Dementia Prediction",
      description: "AI-based predictive model for early dementia detection",
      achievements: [
        "Developed a dementia predictive model using Python and Random Forest, achieving 93% accuracy on a 373 observation dataset in a 5-person group project",
        "Led coding and machine learning implementation, preprocessing 15+ features and producing 8 visualizations (e.g., scatter, heatmap) to analyze dementia patterns"
      ],
      technologies: ["Python", "Random Forest", "Data Visualization", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Taranpreet10451/Dementia-Prediction" // Replace with actual GitHub link
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Academic Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              achievements={project.achievements}
              technologies={project.technologies}
              delay={index}
              image={project.image}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;