import React from 'react';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
  return (
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#ff79c6]">
              Learning Resources
            </h1>
            
            <p className="text-xl md:text-2xl text-[#f8f8f2] max-w-3xl mx-auto">
              Here are some of my favorite resources for learning programming and improving skills.
              Feel free to explore and find what works best for you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="resource-card bg-[#44475a] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-[#6272a4] hover:border-[#bd93f9] shadow-lg hover:shadow-[#bd93f9]/20">
              <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-6 text-[#bd93f9]">
                <i className="fas fa-globe text-2xl mr-3"></i> Web Development
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#bd93f9] transition-all duration-200">
                    <i className="fas fa-book text-[#bd93f9]"></i> 
                    <span className="ml-3">MDN Web Docs</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#bd93f9] transition-all duration-200">
                    <i className="fas fa-laptop-code text-[#bd93f9]"></i> 
                    <span className="ml-3">freeCodeCamp</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#bd93f9] transition-all duration-200">
                    <i className="fas fa-graduation-cap text-[#bd93f9]"></i> 
                    <span className="ml-3">W3Schools</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="resource-card bg-[#44475a] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-[#6272a4] hover:border-[#f1fa8c] shadow-lg hover:shadow-[#f1fa8c]/20">
              <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-6 text-[#f1fa8c]">
                <i className="fab fa-js text-2xl mr-3"></i> JavaScript
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#f1fa8c] transition-all duration-200">
                    <i className="fab fa-js text-[#f1fa8c]"></i> 
                    <span className="ml-3">JavaScript.info</span>
                  </a>
                </li>
                <li>
                  <a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#f1fa8c] transition-all duration-200">
                    <i className="fas fa-book-open text-[#f1fa8c]"></i> 
                    <span className="ml-3">Eloquent JavaScript</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="resource-card bg-[#44475a] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-[#6272a4] hover:border-[#8be9fd] shadow-lg hover:shadow-[#8be9fd]/20">
              <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-6 text-[#8be9fd]">
                <i className="fab fa-python text-2xl mr-3"></i> Python
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#8be9fd] transition-all duration-200">
                    <i className="fab fa-python text-[#8be9fd]"></i>
                    <span className="ml-3">Python Official Tutorial</span>
                  </a>
                </li>
                <li>
                  <a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#8be9fd] transition-all duration-200">
                    <i className="fas fa-robot text-[#8be9fd]"></i>
                    <span className="ml-3">Automate the Boring Stuff</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="resource-card bg-[#44475a] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-[#6272a4] hover:border-[#50fa7b] shadow-lg hover:shadow-[#50fa7b]/20">
              <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-6 text-[#50fa7b]">
                <i className="fas fa-code text-2xl mr-3"></i> C++ and C#
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.learncpp.com/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#50fa7b] transition-all duration-200">
                    <i className="fas fa-code text-[#50fa7b]"></i>
                    <span className="ml-3">LearnCpp.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#50fa7b] transition-all duration-200">
                    <i className="fab fa-microsoft text-[#50fa7b]"></i>
                    <span className="ml-3">C# Documentation</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="resource-card bg-[#44475a] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-[#6272a4] hover:border-[#ff79c6] shadow-lg hover:shadow-[#ff79c6]/20">
              <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-6 text-[#ff79c6]">
                <i className="fas fa-gamepad text-2xl mr-3"></i> Game Development
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://learn.unity.com/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#ff79c6] transition-all duration-200">
                    <i className="fab fa-unity text-[#ff79c6]"></i>
                    <span className="ml-3">Unity Learn</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="resource-card bg-[#44475a] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-[#6272a4] hover:border-[#ff5555] shadow-lg hover:shadow-[#ff5555]/20">
              <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-6 text-[#ff5555]">
                <i className="fas fa-laptop-code text-2xl mr-3"></i> Coding Practice
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#ff5555] transition-all duration-200">
                    <i className="fas fa-code text-[#ff5555]"></i>
                    <span className="ml-3">Codeforces</span>
                  </a>
                </li>
                <li>
                  <a href="https://cses.fi/problemset/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#ff5555] transition-all duration-200">
                    <i className="fas fa-tasks text-[#ff5555]"></i>
                    <span className="ml-3">CSES Problem Set</span>
                  </a>
                </li>
                <li>
                  <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#ff5555] transition-all duration-200">
                    <i className="fas fa-laptop-code text-[#ff5555]"></i>
                    <span className="ml-3">LeetCode</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-2 rounded-lg text-lg text-[#f8f8f2] hover:bg-[#6272a4]/30 hover:text-[#ff5555] transition-all duration-200">
                    <i className="fab fa-hackerrank text-[#ff5555]"></i>
                    <span className="ml-3">HackerRank</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/" className="inline-flex items-center px-8 py-4 bg-[#bd93f9] text-[#282a36] text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#bd93f9]/30">
              <i className="fas fa-arrow-left mr-2"></i> Back to Profile
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Resources;