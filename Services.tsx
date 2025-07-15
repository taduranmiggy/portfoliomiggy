import React, { useEffect, useRef, useState } from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

// Move services data outside component to prevent re-creation on every render
const servicesData: Service[] = [
  {
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    title: 'Web Development',
    description: 'Creating responsive, modern websites using React, TypeScript, and the latest web technologies.'
  },
  {
    icon: 'M7 21a4 4 0 01-4-4V5a4 4 0 714-4h10a4 4 0 714 4v12a4 4 0 01-4 4m-10 0h10m-10 0V11a3 3 0 713-3h4a3 3 0 713 3v10',
    title: 'Frontend Development',
    description: 'Building interactive user interfaces with modern frameworks like React, Vue, and Next.js.'
  },
  {
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    title: 'Mobile-First Design',
    description: 'Developing responsive applications that work seamlessly across all devices and screen sizes.'
  },
  {
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    title: 'Problem Solving',
    description: 'Analyzing complex technical challenges and implementing efficient, scalable solutions.'
  },
  {
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 712-2h14a2 2 0 712 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
    title: 'Backend Development',
    description: 'Building robust APIs and server-side applications with Node.js, Express, and databases.'
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 712-2h2a2 2 0 712 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 712-2h2a2 2 0 712 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Database Management',
    description: 'Designing and implementing efficient database schemas with SQL and NoSQL technologies.'
  }
];

const Services: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animations
            servicesData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []); // Remove services from dependency array since it's now stable

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 opacity-50 animate-gradientShift"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Technologies and areas I'm passionate about as an IT student and developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 ${
                visibleItems[index] ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16 animate-fadeInUp animation-delay-600">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get Started
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
