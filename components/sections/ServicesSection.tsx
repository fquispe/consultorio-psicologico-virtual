'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Terapia Individual',
      description: 'Atención personalizada para trabajar en tus objetivos personales, manejar emociones y superar desafíos de vida.',
      features: ['Ansiedad y estrés', 'Depresión', 'Autoestima', 'Desarrollo personal'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Terapia de Pareja',
      description: 'Fortalecemos las relaciones mediante comunicación efectiva y resolución de conflictos.',
      features: ['Comunicación', 'Conflictos', 'Intimidad', 'Crisis de pareja'],
      color: 'from-rose-500 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Terapia Familiar',
      description: 'Mejoramos las dinámicas familiares y fortalecemos los vínculos entre sus miembros.',
      features: ['Conflictos familiares', 'Crianza', 'Adolescencia', 'Duelo familiar'],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Terapia Cognitivo-Conductual',
      description: 'Técnicas basadas en evidencia para modificar patrones de pensamiento y comportamiento.',
      features: ['Fobias', 'TOC', 'Adicciones', 'Trastornos alimentarios'],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Evaluación Psicológica',
      description: 'Diagnósticos precisos mediante pruebas estandarizadas y entrevistas clínicas.',
      features: ['Test psicológicos', 'Evaluación infantil', 'Reportes', 'Diagnóstico'],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Orientación Vocacional',
      description: 'Te ayudamos a descubrir tu vocación y tomar decisiones sobre tu futuro profesional.',
      features: ['Test vocacionales', 'Asesoría profesional', 'Proyecto de vida', 'Desarrollo de carrera'],
      color: 'from-green-500 to-lime-500',
      bgColor: 'from-green-50 to-lime-50',
    },
  ];

  return (
    <section ref={ref} id="servicios" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Servicios y Especialidades
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Atención profesional en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              diversas áreas
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios psicológicos adaptados a tus necesidades específicas.
            Cada terapia es diseñada de forma personalizada para garantizar los mejores resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="font-heading font-bold text-xl mb-3 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              <div className={`bg-gradient-to-br ${service.bgColor} rounded-lg p-4 space-y-2`}>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a href="#contacto" className="btn-primary inline-block">
            Solicitar Información
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
