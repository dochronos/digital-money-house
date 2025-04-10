"use client";

import { Toaster as Sonner } from "sonner";

// Componente global de notificaciones (Sonner)
// Puede configurarse aquí el color, posición o duración de los mensajes
export const Toaster = () => {
  return <Sonner richColors position="top-center" />;
};
