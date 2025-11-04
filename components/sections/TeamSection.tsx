'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const team = [
    {
      name: 'Dra. María González',
      title: 'Psicóloga Clínica',
      specialties: ['Ansiedad', 'Depresión', 'Terapia Cognitivo-Conductual'],
      experience: '12 años de experiencia',
      education: 'Doctorado en Psicología Clínica - Universidad Nacional',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Dr. Carlos Ramírez',
      title: 'Psicólogo de Pareja',
      specialties: ['Terapia de Pareja', 'Mediación Familiar', 'Conflictos'],
      experience: '15 años de experiencia',
      education: 'Maestría en Terapia Familiar - Universidad de Barcelona',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Lic. Ana Martínez',
      title: 'Psicóloga Infantil',
      specialties: ['Niños y Adolescentes', 'TDAH', 'Trastornos del Aprendizaje'],
      experience: '10 años de experiencia',
      education: 'Especialización en Psicología Infantil - UBA',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Dr. Roberto Silva',
      title: 'Neuropsicólogo',
      specialties: ['Evaluación Neuropsicológica', 'Rehabilitación', 'Demencias'],
      experience: '14 años de experiencia',
      education: 'Doctorado en Neuropsicología - Universidad de Chile',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section ref={ref} id="equipo" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Nuestro Equipo
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Profesionales{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              altamente capacitados
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Contamos con un equipo multidisciplinario de psicólogos certificados,
            comprometidos con tu bienestar y desarrollo personal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center group hover:scale-105 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <h3 className="font-heading font-bold text-xl mb-1 text-gray-900">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-4">{member.title}</p>

              {/* Specialties */}
              <div className="space-y-2 mb-4">
                {member.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mr-1 mb-1"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Info */}
              <div className="space-y-2 text-sm text-gray-600 border-t border-gray-200 pt-4">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{member.experience}</span>
                </div>
                <div className="flex items-start justify-center space-x-2">
                  <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-left">{member.education}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
