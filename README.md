# Consultorio Psicológico Virtual 🧠

Sitio web moderno y profesional para un consultorio psicológico, diseñado para brindar información clara, accesible y confiable sobre servicios de salud mental.

## 🌟 Características

### Contenido
- **Hero/Inicio**: Sección principal con llamado a la acción y estadísticas clave
- **Sobre Nosotros**: Información del consultorio, misión, visión y valores
- **Servicios y Especialidades**: Catálogo detallado de servicios psicológicos
- **Equipo Profesional**: Presentación del equipo de psicólogos certificados
- **Testimonios**: Experiencias reales de pacientes (respetando confidencialidad)
- **Biblioteca de Salud Mental**: Información educativa sobre trastornos mentales
- **FAQ**: Preguntas frecuentes con respuestas detalladas
- **Formulario de Contacto**: Sistema para solicitar información y agendar citas
- **Footer**: Información de contacto completa y enlaces a redes sociales

### Diseño y UX
- ✨ Diseño moderno y profesional
- 📱 Completamente responsive (mobile, tablet, desktop)
- 🎨 Paleta de colores cálidos y confiables
- 🎭 Animaciones suaves con Framer Motion
- 🎯 CTAs (Call-to-Action) estratégicamente ubicados
- ♿ Accesible y fácil de navegar

### Características Técnicas
- ⚡ Next.js 16 con App Router
- 🔷 TypeScript para type safety
- 🎨 Tailwind CSS para estilos modernos
- 🎬 Framer Motion para animaciones
- 📝 React Hook Form para formularios
- 🚀 Optimizado para rendimiento
- 📦 Código modular y escalable

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form
- **Fuentes**: Inter y Poppins (Google Fonts)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar producción
npm start
```

## 🌐 Acceso

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio.

## 📂 Estructura del Proyecto

```
consultorio-psicologico-virtual/
├── app/
│   ├── layout.tsx          # Layout principal con configuración de fuentes
│   ├── page.tsx             # Página principal que integra todas las secciones
│   └── globals.css          # Estilos globales y utilidades de Tailwind
├── components/
│   ├── Navbar.tsx           # Barra de navegación con menú móvil
│   ├── Footer.tsx           # Pie de página con información de contacto
│   └── sections/
│       ├── HeroSection.tsx          # Sección hero/inicio
│       ├── AboutSection.tsx         # Sobre nosotros
│       ├── ServicesSection.tsx      # Servicios y especialidades
│       ├── TeamSection.tsx          # Equipo profesional
│       ├── TestimonialsSection.tsx  # Testimonios
│       ├── LibrarySection.tsx       # Biblioteca de salud mental
│       ├── FAQSection.tsx           # Preguntas frecuentes
│       └── ContactSection.tsx       # Formulario de contacto
├── public/                  # Recursos estáticos
├── tailwind.config.ts       # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
├── next.config.js          # Configuración de Next.js
└── package.json            # Dependencias del proyecto
```

## 🎨 Paleta de Colores

- **Primario**: Azul (#0ea5e9) - Confianza y profesionalismo
- **Secundario**: Púrpura (#a855f7) - Creatividad y empatía
- **Acento**: Verde (#10b981) - Crecimiento y bienestar
- **Neutros**: Grises - Balance y claridad

## 📱 Secciones del Sitio

### 1. Hero/Inicio
Sección de bienvenida con:
- Mensaje principal impactante
- CTAs para agendar consulta
- Estadísticas clave (años de experiencia, pacientes, satisfacción)
- Diseño con elementos animados

### 2. Sobre Nosotros
Información institucional:
- Historia y valores del consultorio
- Características distintivas (confidencialidad, profesionales certificados, etc.)
- Misión y visión

### 3. Servicios y Especialidades
Catálogo de 6 servicios principales:
- Terapia Individual
- Terapia de Pareja
- Terapia Familiar
- Terapia Cognitivo-Conductual
- Evaluación Psicológica
- Orientación Vocacional

### 4. Equipo Profesional
Presentación de 4 profesionales con:
- Nombre y especialidad
- Áreas de experiencia
- Años de experiencia
- Formación académica

### 5. Testimonios
Experiencias de pacientes:
- Carrusel interactivo
- Calificaciones con estrellas
- Nombres modificados por confidencialidad
- Grid con testimonios adicionales

### 6. Biblioteca de Salud Mental
Información educativa sobre 8 trastornos:
- Ansiedad
- Depresión
- Estrés Crónico
- TOC
- Trastornos Alimentarios
- TEPT
- Trastorno Bipolar
- TDAH

Cada trastorno incluye:
- Descripción
- Síntomas comunes
- Consecuencias de no tratarlo
- Disclaimers apropiados

### 7. Preguntas Frecuentes (FAQ)
10 preguntas comunes con respuestas detalladas:
- Duración de sesiones
- Cantidad de sesiones necesarias
- Terapia online
- Confidencialidad
- Costos y seguros
- Emergencias

### 8. Contacto
Formulario completo con:
- Campos: nombre, email, teléfono, servicio, mensaje
- Validación con React Hook Form
- Información de contacto centralizada
- Horarios de atención
- Enlaces a redes sociales

## 🔧 Personalización

### Colores
Modifica los colores en `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... }
}
```

### Contenido
Todo el contenido es fácilmente personalizable en cada archivo de componente.

### Información de Contacto
Actualiza la información de contacto en:
- `components/Footer.tsx`
- `components/sections/ContactSection.tsx`

## 📄 Licencia

ISC

## 🤝 Contribución

Este proyecto fue desarrollado como una solución completa para consultorios psicológicos.
Siéntete libre de adaptarlo a tus necesidades específicas.

---

Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS
