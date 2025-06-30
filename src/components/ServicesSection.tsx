import React, { useState, useEffect } from 'react';
import ServicesSectionDesktop from './ServicesSectionDesktop';
import ServicesSectionMobile from './ServicesSectionMobile';
import webDevLogo from '../assets/services logo/web-development-svgrepo-com.svg';
import aiAgentLogo from '../assets/services logo/brain-illustration-4-svgrepo-com.svg';
import socialMediaLogo from '../assets/services logo/instagram-svgrepo-com.svg';
import cyborgLogo from '../assets/services logo/cyborg-face-svgrepo-com.svg';

const ServicesSection = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const serviceBoxes = [
    { 
      id: 1, 
      logo: webDevLogo, 
      alt: 'Web Development', 
      origin: 'top-0 left-0', 
      heading: 'Web Development', 
      description: 'Custom websites built from scratch — from sleek, responsive frontends to secure, scalable backends. I deliver full-stack solutions tailored to your brand and business goals.',
      url: 'https://wa.link/vmay7x'
    },
    { 
      id: 2, 
      logo: aiAgentLogo, 
      alt: 'AI Agents', 
      origin: 'top-0 right-0', 
      heading: 'Workflow Automation', 
      description: 'Streamline your operations with intelligent automation. I design and deploy workflows that save time, reduce manual effort, and improve overall efficiency across your tools and systems.',
      url: 'https://wa.link/hwz8m8'
    },
    { 
      id: 3, 
      logo: socialMediaLogo, 
      alt: 'Social Media', 
      origin: 'bottom-0 left-0', 
      heading: 'Social Media', 
      description: 'Complete management for LinkedIn, Instagram, and YouTube — from strategy and posting to short-form and full-length content creation. Grow your online presence with ease.',
      url: 'https://wa.link/spcgbd'
    },
    { 
      id: 4, 
      logo: cyborgLogo, 
      alt: 'AI Avatars', 
      origin: 'bottom-0 right-0', 
      heading: 'AI Avatar', 
      description: 'Get your own AI-powered digital clone for automated content creation. Perfect for scaling personal branding or client engagement without being on camera 24/7.',
      url: 'https://wa.link/9per65'
    },
  ];

  return isDesktop ? <ServicesSectionDesktop /> : <ServicesSectionMobile />;
};

export default ServicesSection;

<style>
{`
.thin-logo {
  transform: scaleX(0.7);
}

.card-content {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;
}

.card {
  padding: 16px;
  gap: 8px;
  box-sizing: border-box;
  height: auto;
  min-height: 200px;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  overflow: hidden;
  flex: 1 1 0%;
}
@media (min-width: 1024px) {
  .cards-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    transition: all 0.5s ease;
  }
  .card {
    flex: 1 1 0%;
    min-width: 0;
    height: 220px;
    transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
  }
  .cards-container:hover .card {
    flex: 0.9 1 0%;
  }
  .cards-container .card:hover {
    flex: 2.2 1 0%;
    z-index: 2;
    box-shadow: 0 8px 32px 0 rgba(163,83,242,0.15);
    background: rgba(255,255,255,0.07);
  }
}
`}
</style> 