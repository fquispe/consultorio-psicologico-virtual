'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Confidencialidad Garantizada',
      description: 'Todos los datos y sesiones son completamente confidenciales bajo el código de ética profesional.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Profesionales Certificados',
      description: 'Nuestro equipo cuenta con certificaciones y años de experiencia en diversas especialidades.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Enfoque Humanista',
      description: 'Tratamos a cada paciente de manera única, con empatía y respeto hacia su proceso personal.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Resultados Comprobados',
      description: 'El 95% de nuestros pacientes reportan mejoras significativas en su bienestar emocional.',
    },
  ];

  return (
    <section ref={ref} id="sobre-nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Sobre Nosotros
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Más de 10 años cuidando tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              bienestar emocional
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Somos un consultorio especializado en salud mental, comprometidos con ofrecer
            atención profesional, cálida y personalizada para ayudarte a superar los desafíos
            emocionales y alcanzar tu máximo potencial.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center group hover:border-primary-200 border-2 border-transparent"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
            <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl mb-3 text-gray-900">
              Nuestra Misión
            </h3>
            <p className="text-gray-700">
              Proporcionar servicios de salud mental de la más alta calidad, basados en la evidencia
              científica y el respeto por la dignidad humana. Nos comprometemos a ser un espacio seguro
              donde cada persona pueda explorar, sanar y crecer emocionalmente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8">
            <div className="w-14 h-14 bg-secondary-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl mb-3 text-gray-900">
              Nuestra Visión
            </h3>
            <p className="text-gray-700">
              Ser el centro de referencia en salud mental, reconocido por nuestra excelencia profesional,
              innovación en tratamientos y el impacto positivo en la vida de nuestros pacientes.
              Aspiramos a contribuir a una sociedad más saludable emocionalmente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
