'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const LibrarySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const disorders = [
    {
      category: 'ansiedad',
      title: 'Trastornos de Ansiedad',
      icon: '😰',
      description: 'Preocupación excesiva, nerviosismo constante, ataques de pánico.',
      symptoms: ['Palpitaciones', 'Sudoración', 'Temblores', 'Sensación de peligro'],
      consequences: 'Sin tratamiento, puede llevar a aislamiento social, depresión y deterioro en la calidad de vida.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
    },
    {
      category: 'depresion',
      title: 'Depresión',
      icon: '😔',
      description: 'Tristeza profunda, pérdida de interés, falta de energía persistente.',
      symptoms: ['Tristeza constante', 'Fatiga', 'Pérdida de interés', 'Cambios en el sueño'],
      consequences: 'Puede conducir a problemas de salud física, pensamientos suicidas y deterioro en relaciones.',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
    },
    {
      category: 'estres',
      title: 'Estrés Crónico',
      icon: '😫',
      description: 'Presión constante que afecta tu salud física y mental.',
      symptoms: ['Irritabilidad', 'Dolores de cabeza', 'Tensión muscular', 'Problemas digestivos'],
      consequences: 'Aumenta el riesgo de enfermedades cardíacas, diabetes y debilita el sistema inmunológico.',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
    },
    {
      category: 'toc',
      title: 'Trastorno Obsesivo-Compulsivo (TOC)',
      icon: '🔄',
      description: 'Pensamientos intrusivos (obsesiones) y comportamientos repetitivos (compulsiones).',
      symptoms: ['Obsesiones', 'Compulsiones', 'Rituales', 'Ansiedad intensa'],
      consequences: 'Interfiere gravemente con la vida diaria, trabajo y relaciones personales.',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50',
    },
    {
      category: 'alimentarios',
      title: 'Trastornos Alimentarios',
      icon: '🍽️',
      description: 'Relación problemática con la comida, peso y autoimagen corporal.',
      symptoms: ['Restricción alimentaria', 'Atracones', 'Preocupación por el peso', 'Distorsión corporal'],
      consequences: 'Riesgos graves para la salud: desnutrición, problemas cardíacos, y en casos severos, muerte.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
    },
    {
      category: 'ptsd',
      title: 'Trastorno de Estrés Postraumático (TEPT)',
      icon: '💥',
      description: 'Consecuencia de experiencias traumáticas que generan flashbacks y evitación.',
      symptoms: ['Flashbacks', 'Pesadillas', 'Evitación', 'Hipervigilancia'],
      consequences: 'Afecta severamente las relaciones, trabajo y puede llevar a abuso de sustancias.',
      color: 'from-slate-600 to-gray-600',
      bgColor: 'from-slate-50 to-gray-50',
    },
    {
      category: 'bipolar',
      title: 'Trastorno Bipolar',
      icon: '🎭',
      description: 'Cambios extremos en el estado de ánimo, energía y actividad.',
      symptoms: ['Episodios maníacos', 'Episodios depresivos', 'Cambios de energía', 'Impulsividad'],
      consequences: 'Sin tratamiento: problemas financieros, legales, intentos de suicidio y hospitalización.',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
    },
    {
      category: 'tdah',
      title: 'TDAH (Déficit de Atención)',
      icon: '🧠',
      description: 'Dificultad para mantener atención, hiperactividad e impulsividad.',
      symptoms: ['Desatención', 'Hiperactividad', 'Impulsividad', 'Desorganización'],
      consequences: 'Bajo rendimiento académico/laboral, problemas en relaciones y baja autoestima.',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'from-amber-50 to-yellow-50',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'ansiedad', label: 'Ansiedad' },
    { id: 'depresion', label: 'Depresión' },
    { id: 'estres', label: 'Estrés' },
    { id: 'toc', label: 'TOC' },
  ];

  const filteredDisorders = selectedCategory === 'all'
    ? disorders
    : disorders.filter(d => d.category === selectedCategory);

  return (
    <section ref={ref} id="biblioteca" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Biblioteca de Salud Mental
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Información sobre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              trastornos mentales
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Conocer los trastornos mentales es el primer paso hacia la recuperación.
            Aquí encontrarás información útil sobre diversos problemas de salud mental.
          </p>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg max-w-3xl mx-auto">
            <p className="text-amber-800 text-sm text-left">
              <strong>⚠️ Importante:</strong> Esta información es educativa y no sustituye una evaluación profesional.
              Si experimentas estos síntomas, consulta con un profesional de la salud mental.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Disorders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDisorders.map((disorder, index) => (
            <motion.div
              key={disorder.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${disorder.color} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
                  {disorder.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 flex-1">
                  {disorder.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4">
                {disorder.description}
              </p>

              {/* Symptoms */}
              <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-900 mb-2">Síntomas Comunes:</h4>
                <div className="space-y-1">
                  {disorder.symptoms.map((symptom, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <svg className="w-3 h-3 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consequences */}
              <div className={`bg-gradient-to-br ${disorder.bgColor} rounded-lg p-4 border-l-4 border-red-400`}>
                <h4 className="font-semibold text-sm text-red-900 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Sin Tratamiento:
                </h4>
                <p className="text-gray-700 text-sm">
                  {disorder.consequences}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            ¿Identificas alguno de estos síntomas?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            No estás solo. Buscar ayuda profesional es un acto de valentía y el primer paso
            hacia tu bienestar. Estamos aquí para apoyarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Solicitar Consulta
            </a>
            <a
              href="#faq"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-200"
            >
              Ver Preguntas Frecuentes
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LibrarySection;
