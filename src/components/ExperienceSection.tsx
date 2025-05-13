
import { useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  delay: number;
}

const ExperienceItem = ({ title, company, duration, description, technologies, delay }: ExperienceItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  return (
    <div 
      ref={ref} 
      className={`timeline-item slide-in ${isInView ? 'active' : ''}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <h3 className="text-lg font-semibold text-portfolio-primary">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
            <p className="font-medium">{company}</p>
            <p className="text-gray-500">{duration}</p>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc pl-5 mb-4 text-sm">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
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
      </Card>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Open-Source Contributor",
      company: "GSSoC'24",
      duration: "Mar 2024 - Present",
      description: [
        "Resolved 10+ issues in machine learning and web development projects, earning the Explorer Badge",
        "Improved project functionality using Python, React, and MySQL in a collaborative remote setup",
        "Collaborated with diverse technical teams to implement feature enhancements and bug fixes"
      ],
      technologies: ["Python", "React", "MySQL", "Machine Learning", "Git"]
    }
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Internship Experience</h2>
        <div className="mt-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              description={exp.description}
              technologies={exp.technologies}
              delay={index}
            />
          ))}
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">Extra-curricular Activities</h3>
            
            <div className="space-y-6">
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Achievements</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Coded Python-based solutions for Pocket Tangerine 2024, solving technical challenges in 48 hours</li>
                    <li>Competed in Google Get Rankathon 2024, building solutions with ReactJS and Machine Learning</li>
                    <li>Analyzed data in Foreign Trade Analytics and Visualization, producing comprehensive visualizations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Organized a prominent conservation event for NYC club, guiding 200+ students in conservation efforts</li>
                    <li>Managed a workshop on ML Deployment, GitHub, and Open-Source Coding for the Byte-By-Byte club</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Entrepreneurship</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Won 1st Prize in Poster Making Competition, showcasing creative design skills</li>
                    <li>Secured 3rd Prize in Cash-Quest by "Techie-O-Tech" club, demonstrating business management skills</li>
                    <li>Achieved 1st Prize in "Mind Games" by Educational Club, excelling in strategic thinking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
