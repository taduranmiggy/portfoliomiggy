import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hello John Miguel,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    const mailtoLink = `mailto:johnmigueltaduran09@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message (you can replace this with a proper notification system)
    alert('Thank you for your message! Your email client will open to send the message.');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Ready to start your next project? I'm here to help bring your ideas to life. 
                Get in touch and let's discuss how we can work together to create something amazing.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl flex items-center justify-center group-hover:from-primary-600/30 group-hover:to-primary-800/30 transition-all duration-300">
                  <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">09995584106</p>
                </div>
              </div>

              {/* Primary Email */}
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl flex items-center justify-center group-hover:from-primary-600/30 group-hover:to-primary-800/30 transition-all duration-300">
                  <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Primary Email</h4>
                  <p className="text-gray-300">johnmigueltaduran09@gmail.com</p>
                </div>
              </div>

              {/* Alternative Email */}
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl flex items-center justify-center group-hover:from-primary-600/30 group-hover:to-primary-800/30 transition-all duration-300">
                  <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Alternative Email</h4>
                  <p className="text-gray-300">johnmiguel.taduran@icloud.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl flex items-center justify-center group-hover:from-primary-600/30 group-hover:to-primary-800/30 transition-all duration-300">
                  <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-300">Philippines</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-4 0 2 2 0 014 0z', name: 'LinkedIn', url: 'https://linkedin.com/in/johnmiguel-taduran' },
                  { icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22', name: 'GitHub', url: 'https://github.com/johnmiguel-taduran' },
                  { icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', name: 'Twitter', url: 'https://twitter.com/johnmiguel_t' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110 group"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
