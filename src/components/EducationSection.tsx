
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface EducationItemProps {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  delay: number;
}

const EducationItem = ({ institution, degree, duration, cgpa, delay }: EducationItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  return (
    <div 
      ref={ref} 
      className={`timeline-item slide-in ${isInView ? 'active' : ''}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <Card className="shadow-md">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold text-portfolio-primary">{institution}</h3>
          <p className="font-medium">{degree}</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 text-sm">
            <p className="text-gray-500">{duration}</p>
            <p className="font-medium">CGPA/Percentage: {cgpa}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const EducationSection = () => {
  const educationItems = [
    {
      institution: "Vellore Institute of Technology",
      degree: "BTech Computer Science",
      duration: "2022 - Present",
      cgpa: "8.97/10"
    },
    {
      institution: "Govt. High School and College, Pinjore",
      degree: "Class XII",
      duration: "May 2022",
      cgpa: "93%"
    },
    {
      institution: "Govt. High School and College, Pinjore",
      degree: "Class X",
      duration: "May 2020",
      cgpa: "91%"
    }
  ];

  return (
    <section id="education" className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        <div className="mt-12 max-w-3xl mx-auto">
          {educationItems.map((edu, index) => (
            <EducationItem
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              duration={edu.duration}
              cgpa={edu.cgpa}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
