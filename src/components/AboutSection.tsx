import React, { useState, useEffect } from 'react';
import { Coffee, Code, Users } from 'lucide-react';
import RupeeIcon from '../assets/icons/rupee-sign-svgrepo-com.svg';


const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="py-8 flex justify-center items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Services</h2>
    </div>
  );
};

export default AboutSection;