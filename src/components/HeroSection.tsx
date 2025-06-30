import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#6A94F5]/90 to-[#937BEB]/90 backdrop-blur-xl rounded-3xl p-8 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#D773FA]/5 to-[#CA3C70]/10"></div>
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-4">
            Bhomik Pilkhwal
          </h1>
          <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-2xl">
            I'm a full-stack developer, designer, and problem solver passionate about building digital experiences that are fast, functional, and user-focused. From intuitive frontends to scalable backends, I bring ideas to life with clean code and creative thinking. I also offer automation workflows, social media content creation, and AI avatar solutions to help brands grow smarter and faster.
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D773FA]/20 to-[#937BEB]/5 rounded-full"></div>
            <div className="absolute top-8 left-8 w-48 h-48 bg-gradient-to-br from-[#A353F2]/30 to-[#6A94F5]/30 rounded-full flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;