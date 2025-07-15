import React from 'react';

const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-2xl blur-xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/miggytaduran.jpg"
                  alt="John Miguel Taduran - Professional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Hire Me for Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  Next Project?
                </span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As a passionate IT student and web developer, I bring fresh perspectives and cutting-edge 
                  skills to every project. My expertise spans modern web technologies, responsive design, 
                  and user experience optimization.
                </p>
                <p>
                  I'm committed to delivering high-quality solutions that not only meet your requirements 
                  but exceed your expectations. With a strong foundation in both front-end and back-end 
                  development, I can handle complete web solutions from concept to deployment.
                </p>
                <p>
                  My attention to detail and commitment to best practices ensure that your project will 
                  be both functional and maintainable for years to come.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium">09995584106</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">johnmigueltaduran09@gmail.com</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary inline-flex items-center"
            >
              Get In Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
