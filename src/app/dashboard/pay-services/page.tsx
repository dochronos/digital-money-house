"use client";

import React from "react";

const PayServicesPage = () => {
  return (
    <section className="p-5 md:p-8 xl:p-12 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Pagar servicios</h1>

      <div className="bg-dark1 text-white rounded-lg p-6 shadow-md">
        <p className="text-base md:text-lg">
          Aquí vas a poder gestionar el pago de tus servicios.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Esta sección incluirá un listado de servicios frecuentes, historial y opciones para agregar nuevos servicios manualmente.
        </p>
      </div>
    </section>
  );
};

export default PayServicesPage;
