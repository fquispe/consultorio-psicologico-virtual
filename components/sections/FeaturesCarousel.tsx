'use client';

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  gradient: string;
  icon: ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Atención Profesional Personalizada',
    description: 'Cada paciente recibe un plan de tratamiento único, diseñado específicamente para sus necesidades y objetivos personales. Nuestros especialistas dedican tiempo a conocerte y comprender tu situación.',
    gradient: 'from-primary-500 to-primary-700',
    icon: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Terapia Virtual y Presencial',
    description: 'Ofrecemos flexibilidad total con consultas en nuestro consultorio o desde la comodidad de tu hogar. La misma calidad de atención, adaptada a tu estilo de vida y preferencias.',
    gradient: 'from-secondary-500 to-secondary-700',
    icon: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Técnicas Basadas en Evidencia',
    description: 'Aplicamos métodos terapéuticos respaldados por investigación científica como Terapia Cognitivo-Conductual, EMDR, y enfoques humanistas, garantizando resultados efectivos y duraderos.',
    gradient: 'from-accent-500 to-accent-700',
    icon: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Ambiente Seguro y Confidencial',
    description: 'Tu privacidad es fundamental. Todas las sesiones se realizan en un espacio seguro, cómodo y completamente confidencial, cumpliendo con los más altos estándares éticos profesionales.',
    gradient: 'from-purple-500 to-purple-700',
    icon: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Horarios Flexibles',
    description: 'Entendemos que tu tiempo es valioso. Ofrecemos horarios amplios y flexibles, incluyendo fines de semana y horarios vespertinos para adaptarnos a tu agenda.',
    gradient: 'from-blue-500 to-blue-700',
    icon: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Seguimiento Continuo',
    description: 'Monitoreamos tu progreso en cada etapa del tratamiento. Realizamos evaluaciones periódicas y ajustamos el plan terapéutico según tus avances y necesidades cambiantes.',
    gradient: 'from-pink-500 to-pink-700',
    icon: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const FeaturesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre las características que nos hacen tu mejor opción para el cuidado de tu salud mental
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white min-h-[400px] md:min-h-[450px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    handleNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrev();
                  }
                }}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Left Side - Icon and Gradient */}
                  <div className="flex items-center justify-center">
                    <div className={`relative w-64 h-64 rounded-3xl bg-gradient-to-br ${features[currentIndex].gradient} flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300`}>
                      <div className="absolute inset-0 bg-white opacity-10 rounded-3xl"></div>
                      {features[currentIndex].icon}

                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-white opacity-20 rounded-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white opacity-20 rounded-full"></div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div className="inline-flex items-center space-x-2">
                      <span className="px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        Característica {currentIndex + 1} de {features.length}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                      {features[currentIndex].title}
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {features[currentIndex].description}
                    </p>

                    <div className="flex items-center space-x-2 pt-4">
                      <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${features[currentIndex].gradient}`}></div>
                      <span className="text-sm text-gray-500">Calidad garantizada</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-primary-600 hover:shadow-xl transition-all duration-200 z-10 group"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-primary-600 hover:shadow-xl transition-all duration-200 z-10 group"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-primary-600 to-secondary-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ver característica ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            ¿Listo para comenzar tu camino hacia el bienestar?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center btn-primary space-x-2"
          >
            <span>Agenda tu Primera Consulta</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
