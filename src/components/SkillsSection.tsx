
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface SkillCardProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCard = ({ title, skills, delay }: SkillCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });
  
  return (
    <Card 
      ref={ref} 
      className={`skill-card slide-in ${isInView ? 'active' : ''}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-portfolio-light dark:bg-portfolio-dark/50 text-portfolio-primary px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            title="Programming Languages" 
            skills={['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'C++']} 
            delay={0} 
          />
          <SkillCard 
            title="Frameworks & Libraries" 
            skills={['Django', 'Flask', 'React', 'Node.js', 'Express', 'Bootstrap', 'Tailwind CSS']} 
            delay={1} 
          />
          <SkillCard 
            title="Databases" 
            skills={['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']} 
            delay={2} 
          />
          <SkillCard 
            title="Data Science & ML" 
            skills={['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Data Structures', 'Algorithms']} 
            delay={3} 
          />
          <SkillCard 
            title="Tools & Technologies" 
            skills={['Git', 'Docker', 'AWS', 'Heroku', 'Jupyter', 'VS Code', 'Postman']} 
            delay={4} 
          />
          <SkillCard 
            title="Other Skills" 
            skills={['RESTful APIs', 'Agile Methodology', 'CI/CD', 'Testing', 'UI/UX Design']} 
            delay={5} 
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
