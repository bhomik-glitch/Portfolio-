import React from 'react';
import webDevLogo from '../assets/services logo/web-development-svgrepo-com.svg';
import aiAgentLogo from '../assets/services logo/brain-illustration-4-svgrepo-com.svg';
import socialMediaLogo from '../assets/services logo/instagram-svgrepo-com.svg';
import cyborgLogo from '../assets/services logo/cyborg-face-svgrepo-com.svg';

const serviceBoxes = [
  { id: 1, logo: webDevLogo, alt: 'Web Development', heading: 'Web Development', description: 'Custom websites built from scratch — from sleek, responsive frontends to secure, scalable backends. I deliver full-stack solutions tailored to your brand and business goals.', url: 'https://wa.link/vmay7x' },
  { id: 2, logo: aiAgentLogo, alt: 'AI Agents', heading: 'Workflow Automation', description: 'Streamline your operations with intelligent automation. I design and deploy workflows that save time, reduce manual effort, and improve overall efficiency across your tools and systems.', url: 'https://wa.link/hwz8m8' },
  { id: 3, logo: socialMediaLogo, alt: 'Social Media', heading: 'Social Media', description: 'Complete management for LinkedIn, Instagram, and YouTube — from strategy and posting to short-form and full-length content creation. Grow your online presence with ease.', url: 'https://wa.link/spcgbd' },
  { id: 4, logo: cyborgLogo, alt: 'AI Avatars', heading: 'AI Avatar', description: 'Get your own AI-powered digital clone for automated content creation. Perfect for scaling personal branding or client engagement without being on camera 24/7.', url: 'https://wa.link/9per65' },
];

const ServicesSectionMobile = () => (
  <div className="services-cards-wrapper">
    <div className="grid grid-cols-1 gap-4">
      {serviceBoxes.map((service, idx) => (
        <a
          key={idx}
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card relative flex flex-col justify-between overflow-hidden transition-all duration-300 cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-3"
        >
          {service.logo && (
            <img src={service.logo} alt={service.alt} className={`w-12 h-12 p-2 brightness-0 invert absolute left-0 bottom-0${idx === 0 ? ' thin-logo' : ''}`} />
          )}
          <div className="flex flex-col px-1 pt-1 pb-1">
            <div className="text-white text-center text-base font-semibold mt-1 mb-1">{service.heading}</div>
            <div className="card-content text-white text-sm text-center transition-all duration-300">
              {service.description}
            </div>
          </div>
        </a>
      ))}
    </div>
    <style>{`
      .thin-logo { transform: scaleX(0.7); }
      .card-content { flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: normal; word-break: break-word; }
      .card { min-height: 200px; }
    `}</style>
  </div>
);

export default ServicesSectionMobile; 