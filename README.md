# 💰 Digital Money House - Billetera Virtual

![Portada](Cover.png)

**Digital Money House** es una billetera virtual desarrollada como proyecto final para la certificación **Front-End Developer** en [Digital House](https://www.digitalhouse.com/). Construida con **Next.js** y **TypeScript**, esta aplicación permite a los usuarios gestionar sus finanzas de manera integral: administración de tarjetas, transferencias, pagos de servicios y visualización detallada de la actividad financiera.

Este proyecto representa la integración práctica de los conocimientos adquiridos durante la cursada, desafiando habilidades técnicas y profesionales en un entorno realista de desarrollo.

---

## 🛠️ Tecnologías Utilizadas

- ⚡ **Next.js 15**: Framework de React con soporte para Server Components, SSR y estructura basada en `app/`.
- 🏷️ **TypeScript**: Tipado estático para mayor seguridad y mantenimiento del código.
- 🎨 **Tailwind CSS**: Framework utility-first para estilos rápidos, responsive y personalizables.
- 📝 **React Hook Form + Yup**: Manejo de formularios declarativo con validaciones robustas.
- 🔗 **Zustand**: Librería simple y escalable para gestión de estado global.
- 🔄 **React Query**: Gestión eficiente de datos asincrónicos y caching automático.
- 🔔 **Sonner**: Notificaciones modernas y accesibles para mejorar la UX.
- 🔐 **Cookies + JWT**: Autenticación basada en tokens persistidos vía cookies.
- 🧪 **Jest + React Testing Library**: Testing unitario y de integración de componentes.
- 🌐 **API REST**: Comunicación con backend propio desarrollado en paralelo.

---

## ✨ Funcionalidades Principales

- 🔐 Registro e inicio de sesión con autenticación segura.
- 💳 Gestión de cuentas y tarjetas (alta, baja, detalle).
- 🔄 Transferencias entre cuentas de usuario.
- 💸 Pagos de servicios básicos desde la app.
- 🔍 Búsqueda y filtrado de transacciones.
- 📋 Copia rápida de alias y CVU.
- 📊 Paginación y ordenamiento de movimientos.

---

## 📁 Estructura del Proyecto

```bash
src/
├── app/             # Sistema de rutas de Next.js 13+ (remplaza a pages/)
├── components/      # Componentes de UI reutilizables
├── context/         # Contextos de React (auth, global state)
├── services/        # Servicios que consumen la API REST
├── types/           # Tipado global compartido (TypeScript)
├── styles/          # Archivos CSS globales y utilitarios
└── utils/           # Utilidades generales

🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerir mejoras o reportar errores.

¡Gracias por revisar el proyecto Digital Money House! Cualquier consulta o sugerencia, no dudes en contactarme.