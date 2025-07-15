import React, { useEffect, useRef, useMemo } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = useMemo(() => [
    { name: 'HTML/CSS', percentage: 89, color: 'from-primary-500 to-primary-600' },
    { name: 'JavaScript', percentage: 79, color: 'from-primary-600 to-primary-700' },
    { name: 'React', percentage: 67, color: 'from-primary-500 to-primary-800' },
    { name: 'UI/UX Design', percentage: 85, color: 'from-primary-400 to-primary-600' },
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const circles = entry.target.querySelectorAll('.skill-progress');
            circles.forEach((circle, index) => {
              const skill = skills[index];
              if (skill) {
                const circumference = 2 * Math.PI * 45;
                const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;
                
                setTimeout(() => {
                  (circle as SVGElement).style.strokeDashoffset = strokeDashoffset.toString();
                }, index * 200);
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [skills]);

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Skills</span>
        </h2>
        
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-dark-700"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    strokeWidth="8"
                    className={`skill-progress stroke-current text-primary-600 transition-all duration-2000 ease-out`}
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset="283"
                  />
                </svg>
                
                {/* Percentage text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white group-hover:text-primary-500 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 
              'Git', 'Docker', 'AWS', 'Figma', 'Photoshop'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-800 text-gray-300 rounded-full border border-primary-600/30 hover:border-primary-600 hover:text-primary-500 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
