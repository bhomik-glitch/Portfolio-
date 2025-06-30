import React from 'react';

// Import SVG icons
import htmlIcon from '../assets/icons/html-5-svgrepo-com.svg';
import cssIcon from '../assets/icons/css-3-svgrepo-com.svg';
import jsIcon from '../assets/icons/javascript-svgrepo-com.svg';
import mongoIcon from '../assets/icons/mongo-svgrepo-com.svg';
import expressIcon from '../assets/icons/express-svgrepo-com.svg';
import reactIcon from '../assets/icons/react-svgrepo-com.svg';
import nodeIcon from '../assets/icons/nodejs-svgrepo-com.svg';
import cIcon from '../assets/icons/c-svgrepo-com.svg';
import pythonIcon from '../assets/icons/python-svgrepo-com.svg';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'MongoDB', icon: mongoIcon },
    { name: 'Express', icon: expressIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'C', icon: cIcon },
    { name: 'Python', icon: pythonIcon },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-black/20 backdrop-blur-sm border border-white/40 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center">
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} icon`} 
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-white/90 font-semibold text-sm">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;