import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  icon: string;
  number: number;
  label: string;
  suffix?: string;
}

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', number: 15, label: 'Projects Completed', suffix: '+' },
    { icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', number: 12, label: 'Happy Clients', suffix: '+' },
    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', number: 500, label: 'Hours Coded', suffix: '+' },
    { icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', number: 3, label: 'Certifications' }
  ];

  const CountUpNumber: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}</span>;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container */}
                <div className="relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-600/10 to-primary-800/10 rounded-full flex items-center justify-center border border-primary-600/30 group-hover:border-primary-600/60 transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-10 h-10 text-primary-500 group-hover:text-primary-400 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                <CountUpNumber end={stat.number} />
                {stat.suffix && <span className="text-primary-500">{stat.suffix}</span>}
              </div>

              {/* Label */}
              <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600/10 rounded-full border border-primary-600/30">
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-primary-400 font-medium">Growing every day</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
