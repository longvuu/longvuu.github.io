import React, { useEffect, useRef } from 'react';

const Home: React.FC = () => {
  const skillBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillLevels = entry.target.querySelectorAll('.skill-level');
            skillLevels.forEach((skillLevel: Element) => {
              const width = skillLevel.getAttribute('data-width');
              if (width) {
                (skillLevel as HTMLElement).style.width = width;
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );  

    if (skillBarsRef.current) {
      observer.observe(skillBarsRef.current);
    }

    return () => {
      if (skillBarsRef.current) {
        observer.unobserve(skillBarsRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="profile-card mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <img src="/assets/avatarjpg.jpg" alt="Profile Picture" className="profile-image w-36 h-36 md:w-48 md:h-48" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Vu Duc Long (Herry Vu)
              </h1>
              <p className="text-xl text-purple-300 mb-4 font-medium">FE Developer</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-900 bg-opacity-30 p-2 rounded-full">
                    <i className="fas fa-envelope text-purple-400"></i>
                  </div>
                  <span>herryvu.dev@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-900 bg-opacity-30 p-2 rounded-full">
                    <i className="fas fa-map-marker-alt text-purple-400"></i>
                  </div>
                  <span>Yen Dinh, Thanh Hoa, VietNam</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-900 bg-opacity-30 p-2 rounded-full">
                    <i className="fas fa-birthday-cake text-purple-400"></i>
                  </div>
                  <span>29/07</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-900 bg-opacity-30 p-2 rounded-full">
                    <i className="fas fa-briefcase text-purple-400"></i>
                  </div>
                  <span>4 years of experience</span>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/longvuu" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://discord.com/users/longvuuuu" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-discord"></i>
                </a>
                <a href="https://twitter.com/kuronight29" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100086515356897" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="profile-card mb-8" ref={skillBarsRef}>
          <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Programming Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex items-center">
                    <i className="fab fa-js text-yellow-400 mr-2 text-xl"></i>
                    JavaScript / TypeScript
                  </span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-level" data-width="90%" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex items-center">
                    <i className="fab fa-html5 text-orange-500 mr-2 text-xl"></i>
                    HTML5
                  </span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-level" data-width="95%" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex items-center">
                    <i className="fab fa-css3-alt text-blue-500 mr-2 text-xl"></i>
                    CSS3 / SCSS
                  </span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-level" data-width="85%" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex items-center">
                    <i className="fab fa-react text-blue-400 mr-2 text-xl"></i>
                    React / Next.js
                  </span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-level" data-width="85%" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex items-center">
                    <i className="fab fa-python text-blue-600 mr-2 text-xl"></i>
                    Python
                  </span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-level" data-width="75%" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex items-center">
                    <i className="fas fa-code text-green-400 mr-2 text-xl"></i>
                    C++ / C#
                  </span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-level" data-width="70%" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="profile-card">
          <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            GitHub Stats
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="github-stat-card">
              <h3 className="text-xl font-semibold mb-3">
                <i className="fas fa-code-branch text-purple-400 mr-2"></i>
                Contribution Stats
              </h3>
              <div className="github-stat-content animate-fadeIn">
                <p className="flex justify-between py-2 border-b border-purple-800">
                  <span>Repositories:</span>
                  <span className="font-medium">25+</span>
                </p>
                <p className="flex justify-between py-2 border-b border-purple-800">
                  <span>Contributions:</span>
                  <span className="font-medium">1,200+</span>
                </p>
                <p className="flex justify-between py-2 border-b border-purple-800">
                  <span>Pull Requests:</span>
                  <span className="font-medium">180+</span>
                </p>
                <p className="flex justify-between py-2">
                  <span>Issues Resolved:</span>
                  <span className="font-medium">120+</span>
                </p>
              </div>
            </div>
            
            <div className="github-stat-card">
              <h3 className="text-xl font-semibold mb-3">
                <i className="fas fa-star text-purple-400 mr-2"></i>
                Top Languages
              </h3>
              <div className="space-y-3 animate-fadeIn">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>TypeScript</span>
                    <span>40%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level bg-blue-500" data-width="40%" style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>JavaScript</span>
                    <span>30%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level bg-yellow-500" data-width="30%" style={{ width: '30%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>HTML/CSS</span>
                    <span>20%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level bg-orange-500" data-width="20%" style={{ width: '20%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Python</span>
                    <span>10%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level bg-green-500" data-width="10%" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="https://github.com/longvuu" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition transform hover:scale-105 hover:shadow-lg">
              <i className="fab fa-github mr-2"></i> View My GitHub Profile
            </a>
          </div>
        </div>
        
        <p className="text-center mt-8 text-sm text-purple-300">
          Background image by <a href="https://www.deviantart.com/wlop/gallery" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">WLOP</a>
        </p>
      </div>
    </div>
  );
};

export default Home;