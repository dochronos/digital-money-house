import React from "react";

const PayServicesPage = () => {
  return (
    <section className="flex flex-col gap-6 p-5 md:p-8 xl:p-12">
      <h1 className="text-2xl font-bold text-white">Pagar servicios</h1>

      <div className="bg-dark1 text-white rounded-lg p-6 shadow-md">
        <p className="text-base md:text-lg">
          Aquí podrás gestionar el pago de tus servicios. Esta sección pronto
          incluirá un listado de servicios frecuentes, historial y opciones para
          cargar nuevos servicios manualmente.
        </p>
      </div>
    </section>
  );
};

export default PayServicesPage;
