
import { User, Briefcase, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useContactInfo } from '@/hooks/useContactInfo';

const AboutSection = () => {
  const { contactInfo, loading, error } = useContactInfo();
  
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I am Taranpreet Kaur, a passionate and driven Computer Science
              Engineering student currently pursuing my B.Tech at VIT
              University. I possess a strong technical foundation with expertise in
              Python (including Numpy, Pandas, and Seaborn), C, C++, and
              JavaScript, alongside practical knowledge of MySQL, Machine
              Learning, and Power BI.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              My commitment to learning is evident through certifications such as MATLAB Onramp, 
              Python (Stanford University's Code in Place), and MySQL (HackerRank).
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Throughout my academic journey, I have applied my technical skills to
              meaningful projects. Notable among these are LIDAR Marvel,
              where I led the implementation of real-time object detection using
              LiDAR data and MATLAB, and Dementia Prediction, where I
              achieved 93% accuracy in predicting dementia using machine
              learning models.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              I have further honed my practical skills through an internship at GSSoC'24,
              contributing to diverse machine learning and web development projects, earning recognition with
              the Explorer Badge. As an Event Team Lead at the Bit-by-Bit Club, I have organized workshops
              and events, showcasing my leadership and collaboration skills. I am dedicated to leveraging
              technology and innovation to create impactful solutions for real-world challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={contactInfo?.github || "https://github.com/Taranpreet10451"} 
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" /> GitHub Profile
              </a>
              <a 
                href={contactInfo?.linkedin || "https://linkedin.com/in/taranpreet-kaur-0b3941251"} 
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-flex items-center justify-center gap-2 bg-[#0077B5]"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Card className="shadow-lg border-portfolio-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <User className="mr-2 text-portfolio-primary" /> Personal Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-portfolio-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Occupation</p>
                      <p className="text-gray-600 dark:text-gray-400">Student & Developer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-portfolio-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600 dark:text-gray-400 break-all">
                        {loading ? "Loading..." : error ? "Error loading data" : contactInfo?.email || "taranpreetkaur1641@gmail.com"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-portfolio-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {loading ? "Loading..." : error ? "Error loading data" : contactInfo?.phone || "+91 93898 86109"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Linkedin className="w-5 h-5 text-portfolio-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {loading ? "Loading..." : error ? "Error loading data" : 
                          <a 
                            href={contactInfo?.linkedin || "https://linkedin.com/in/taranpreet-kaur-0b3941251"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-portfolio-primary underline"
                          >
                            taranpreet-kaur-0b3941251
                          </a>
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Github className="w-5 h-5 text-portfolio-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {loading ? "Loading..." : error ? "Error loading data" : 
                          <a 
                            href={contactInfo?.github || "https://github.com/Taranpreet10451"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-portfolio-primary underline"
                          >
                            Taranpreet10451
                          </a>
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
