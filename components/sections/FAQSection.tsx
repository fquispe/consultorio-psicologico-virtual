'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto dura una sesión de terapia?',
      answer: 'Una sesión típica dura entre 45 y 60 minutos. La duración exacta se ajusta según las necesidades del paciente y el tipo de terapia.',
    },
    {
      question: '¿Cuántas sesiones necesitaré?',
      answer: 'Esto varía según cada caso. Algunos pacientes notan mejoras en 8-12 sesiones, mientras que otros requieren un proceso más largo. En la evaluación inicial discutiremos un plan personalizado.',
    },
    {
      question: '¿Ofrecen terapia online?',
      answer: 'Sí, ofrecemos sesiones por videollamada con la misma calidad que las presenciales. Solo necesitas una conexión estable a internet y un espacio privado.',
    },
    {
      question: '¿La información que comparta es confidencial?',
      answer: 'Absolutamente. Toda la información compartida está protegida por el código de ética profesional y las leyes de confidencialidad. Solo se comparte con tu consentimiento explícito o en casos específicos que la ley requiera.',
    },
    {
      question: '¿Cómo sé si necesito terapia?',
      answer: 'Si experimentas malestar emocional persistente, dificultades en tus relaciones, problemas para dormir, cambios en el apetito, o sientes que no puedes manejar situaciones de tu vida, la terapia puede ayudarte.',
    },
    {
      question: '¿Cuál es el costo de las sesiones?',
      answer: 'Los costos varían según el tipo de terapia y el profesional. Ofrecemos opciones accesibles y planes de pago. Contáctanos para información específica sobre tarifas.',
    },
    {
      question: '¿Aceptan seguros médicos?',
      answer: 'Trabajamos con varios seguros médicos. Te recomendamos contactarnos con los detalles de tu seguro para verificar cobertura y procedimientos.',
    },
    {
      question: '¿Qué diferencia hay entre psicólogo y psiquiatra?',
      answer: 'Los psicólogos se especializan en terapia y técnicas psicológicas. Los psiquiatras son médicos que pueden recetar medicamentos. Muchas veces se trabaja en conjunto para mejores resultados.',
    },
    {
      question: '¿Puedo cambiar de terapeuta si no me siento cómodo?',
      answer: 'Por supuesto. La relación terapéutica es fundamental para el éxito del tratamiento. Si no te sientes cómodo con tu terapeuta, podemos asignarte otro profesional sin ningún problema.',
    },
    {
      question: '¿Qué hago en caso de emergencia o crisis?',
      answer: 'Para emergencias psiquiátricas, contacta servicios de emergencia (911) o acude al hospital más cercano. También puedes llamar a líneas de crisis 24/7 especializadas en salud mental.',
    },
  ];

  return (
    <section ref={ref} id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Preguntas Frecuentes
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Resolvemos tus{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              dudas más comunes
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Hemos recopilado las preguntas más frecuentes de nuestros pacientes.
            Si no encuentras la respuesta que buscas, no dudes en contactarnos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary-200 transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group"
                >
                  <span className="font-heading font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 bg-primary-600' : ''
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-colors ${
                        openIndex === index ? 'text-white' : 'text-primary-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-600">
                    <div className="pt-2 border-t border-gray-200">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">¿No encontraste la respuesta que buscabas?</p>
          <a href="#contacto" className="btn-primary inline-block">
            Contáctanos Directamente
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
