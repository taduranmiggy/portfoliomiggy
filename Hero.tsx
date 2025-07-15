import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const fullText = "IT Student & Web Developer";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log('✅ Hero image loaded successfully');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('❌ Hero image failed to load:', e);
    // You could set a fallback image here
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation effect
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 hero-bg-pattern">
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-tr from-primary-500/15 to-primary-700/15 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Enhanced Text Content */}
          <div className={`space-y-6 lg:space-y-8 order-2 lg:order-1 transform transition-all duration-1000 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
                <span className={`block transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
                  Hi, I'm{' '}
                  <span className="text-gradient animate-gradient hover-scale inline-block">
                    Miggy Taduran
                  </span>
                </span>
              </h1>
              
              {/* Typing Animation */}
              <div className={`text-xl sm:text-2xl md:text-3xl text-gray-300 min-h-[3rem] text-center lg:text-left transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
                <span className="border-r-2 border-primary-500 pr-1">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              <p className={`text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left transition-all duration-700 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
                Passionate IT student specializing in web development and modern technologies. 
                Building innovative solutions with clean code and user-centered design.
              </p>
            </div>

            {/* Enhanced Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary inline-flex items-center justify-center hover-lift hover-glow group stagger-1"
              >
                <svg className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="btn-secondary inline-flex items-center justify-center hover-lift glass group stagger-2"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className={`flex flex-wrap gap-6 lg:gap-8 pt-6 lg:pt-8 justify-center lg:justify-start transition-all duration-700 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              {[
                { number: "20+", label: "Projects Completed", delay: "stagger-3" },
                { number: "2+", label: "Years Learning", delay: "stagger-4" },
                { number: "5+", label: "Technologies", delay: "stagger-5" }
              ].map((stat, index) => (
                <div key={index} className={`text-center group cursor-pointer ${stat.delay}`}>
                  <div className="text-2xl lg:text-3xl font-bold text-primary-500 group-hover:text-primary-400 transition-colors transform group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Section - Mobile Optimized */}
          <div className={`relative order-1 lg:order-2 mb-8 lg:mb-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-8'}`}>
            <div className="hero-image-container relative w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto lg:max-w-lg mx-auto">
              {/* Multiple background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-full blur-2xl animate-glow"></div>
              <div className="absolute inset-4 bg-gradient-to-tl from-primary-500/10 to-primary-700/10 rounded-full blur-xl animate-pulse"></div>
              
              {/* Image container with enhanced effects */}
              <div className={`hero-image relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-primary-600/30 shadow-2xl hover-lift group ${!imageLoaded ? 'bg-primary-600/20' : ''}`}>
                <img
                  src="/miggytaduran.jpg"
                  alt="Miggy Taduran - IT Student & Web Developer"
                  className={`w-full h-full object-cover object-center animate-float hover-scale transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="eager"
                  width="400"
                  height="400"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
                {/* Loading placeholder */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600/20 to-primary-800/20">
                    <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating elements with enhanced animations - Mobile optimized */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 rounded-full animate-bounce hover-glow cursor-pointer"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-primary-500 rounded-full animate-bounce hover-glow cursor-pointer" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary-400 rounded-full animate-pulse hover-scale cursor-pointer" style={{ animationDelay: '2s' }}></div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-1 sm:-top-2 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-300 rounded-full"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Links */}
        <div className={`mt-16 flex justify-center space-x-6 transform transition-all duration-1000 delay-1200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          {[
            { href: "https://linkedin.com/in/miggytaduran", icon: "linkedin", label: "LinkedIn", delay: "stagger-6" },
            { href: "https://twitter.com/miggytaduran", icon: "twitter", label: "Twitter", delay: "stagger-7" },
            { href: "https://instagram.com/miggytaduran", icon: "instagram", label: "Instagram", delay: "stagger-8" }
          ].map((social) => (
            <a
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary-600 hover:text-white transition-all duration-300 hover-lift hover-glow backdrop-blur-sm glass ${social.delay}`}
              aria-label={social.label}
            >
              <svg className="w-6 h-6 hover-scale" fill="currentColor" viewBox="0 0 24 24">
                {social.icon === 'linkedin' && (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                )}
                {social.icon === 'twitter' && (
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                )}
                {social.icon === 'instagram' && (
                  <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.718.302 3.999.635c-.74.326-1.365.765-1.987 1.388C1.389 2.646.95 3.271.624 4.011c-.333.719-.508 1.527-.563 2.757C.016 7.989 0 8.396 0 12.017c0 3.624.016 4.031.072 5.264.055 1.23.23 2.038.563 2.757.326.74.765 1.365 1.388 1.987.622.623 1.247 1.062 1.987 1.388.719.333 1.527.508 2.757.563 1.233.056 1.64.072 5.264.072 3.624 0 4.031-.016 5.264-.072 1.23-.055 2.038-.23 2.757-.563.74-.326 1.365-.765 1.987-1.388.623-.622 1.062-1.247 1.388-1.987.333-.719.508-1.527.563-2.757.056-1.233.072-1.64.072-5.264 0-3.621-.016-4.028-.072-5.261-.055-1.23-.23-2.038-.563-2.757-.326-.74-.765-1.365-1.388-1.987C18.64.95 18.015.511 17.275.185 16.556-.148 15.748-.323 14.518-.378 13.285-.434 12.878-.45 12.017-.45z"/>
                )}
              </svg>
            </a>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1400 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors cursor-pointer hover-lift group">
            <span className="text-sm mb-2 group-hover:text-primary-400 transition-colors">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-primary-400 transition-colors">
              <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-primary-400 transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
