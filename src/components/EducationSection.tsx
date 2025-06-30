import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science (AI/ML Specialization)',
      school: 'IILM University, Greater Noida',
      location: '',
      period: '2024 – 2028',
      gpa: '7.8',
      achievements: []
    },
    {
      degree: 'Class XII – CBSE Board',
      school: 'Bharti Public School, Delhi',
      location: '',
      period: '2023',
      gpa: '91%',
      achievements: ['PCM Stream']
    },
    {
      degree: 'National Defence Academy (NDA) Aspirant',
      school: '',
      location: '',
      period: '2023–24',
      gpa: '',
      achievements: ['Achieved AIR 472 and AIR 1056 in two successive NDA examinations conducted by UPSC (2023–24).']
    }
  ];

  const certifications = [
    {
      name: "CS50: Introduction to Computer Science",
      url: "https://certificates.cs50.io/53087b79-2fd2-4c8a-960d-a18cc6f52030.pdf?size=letter"
    },
    {
      name: "CS50's Introduction to Programming with Python",
      url: "https://certificates.cs50.io/5c1fc80c-519b-482a-b214-690041fbfd3d.pdf?size=letter"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <GraduationCap className="mr-3" size={24} />
          Education
        </h3>
        <div className="space-y-6">
          {education.length === 0 ? (
            <p className="text-white/70">No education details available.</p>
          ) : (
            education.map((edu, index) => (
              <div
                key={index}
                className="bg-[#1F1E52]/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-[#1F1E52]/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                    {edu.school && <p className="text-white/90 font-medium">{edu.school}</p>}
                    {edu.location && <p className="text-white/80 text-sm">{edu.location}</p>}
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
                    {edu.period && (
                    <div className="flex items-center text-white/80 text-sm mb-1">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                    )}
                    {edu.gpa && <p className="text-white/90 font-medium text-sm">GPA: {edu.gpa}</p>}
                  </div>
                </div>
                {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h5 className="text-white/90 font-medium mb-2">Achievements:</h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-white/80 text-sm flex items-center">
                        <Award size={14} className="mr-2 text-white" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Award className="mr-3" size={24} />
          Certificates
        </h3>
        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#1F1E52]/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-[#1F1E52]/10 transition-all duration-300 text-white font-semibold text-lg"
            >
              {cert.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;