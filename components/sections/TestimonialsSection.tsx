'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ana P.',
      condition: 'Ansiedad',
      rating: 5,
      text: 'Después de meses luchando con ansiedad, encontré en este consultorio el apoyo que necesitaba. La Dra. González fue empática y profesional. Hoy me siento mucho mejor y con herramientas para manejar mis emociones.',
      date: 'Hace 3 meses',
    },
    {
      name: 'Roberto M.',
      condition: 'Terapia de Pareja',
      rating: 5,
      text: 'Mi esposa y yo estábamos al borde del divorcio. El Dr. Ramírez nos ayudó a reencontrarnos y mejorar nuestra comunicación. Salvó nuestra relación. Infinitamente agradecidos.',
      date: 'Hace 6 meses',
    },
    {
      name: 'Laura S.',
      condition: 'Depresión',
      rating: 5,
      text: 'La terapia cambió mi vida. Llegué en un momento muy oscuro y gracias al profesionalismo y calidez del equipo, hoy puedo decir que estoy recuperando mi alegría de vivir. El proceso no es fácil, pero vale la pena.',
      date: 'Hace 4 meses',
    },
    {
      name: 'Carlos J.',
      condition: 'Orientación Vocacional',
      rating: 5,
      text: 'No sabía qué carrera estudiar y estaba muy presionado. Las sesiones de orientación vocacional me ayudaron a conocerme mejor y encontrar mi verdadera pasión. Ahora estoy estudiando lo que amo.',
      date: 'Hace 8 meses',
    },
    {
      name: 'Sofía R.',
      condition: 'Terapia Familiar',
      rating: 5,
      text: 'Los conflictos con mi hijo adolescente estaban destruyendo nuestra familia. La terapia familiar nos enseñó a comunicarnos mejor y entender las necesidades de cada uno. Nuestra relación mejoró significativamente.',
      date: 'Hace 5 meses',
    },
  ];

  return (
    <section ref={ref} id="testimonios" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Lo que dicen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              nuestros pacientes
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa.
            Lee sus experiencias y cómo hemos contribuido a su bienestar.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="flex items-center space-x-1 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
              "{testimonials[activeIndex].text}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-heading font-bold text-lg text-gray-900">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-primary-600 text-sm">
                  {testimonials[activeIndex].condition}
                </p>
              </div>
              <p className="text-gray-500 text-sm">
                {testimonials[activeIndex].date}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="card hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 line-clamp-4">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-primary-600 text-sm">{testimonial.condition}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            * Los nombres han sido modificados para proteger la confidencialidad de nuestros pacientes.
            Los testimonios son reales y reflejan experiencias individuales que pueden variar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
