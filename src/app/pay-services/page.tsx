"use client";

import React from "react";
import { ServiceItem } from "@/components/dashboard/services/ServiceItem";

const mockServices = [
  { id: 1, name: "Electricidad", provider: "Energía S.A." },
  { id: 2, name: "Agua", provider: "Aguas Argentinas" },
  { id: 3, name: "Internet", provider: "FibraNet" },
  { id: 4, name: "Teléfono", provider: "Telecom" },
];

const PayServicesPage = () => {
  return (
    <section className="w-full min-h-[70vh] justify-start items-start p-6 md:py-10 md:px-8 flex flex-col rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] xl:p-12">
      <h2 className="text-xl font-bold mb-6">Pagar servicios</h2>

      {mockServices.length > 0 ? (
        <ul className="w-full flex flex-col gap-4">
          {mockServices.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">
          Próximamente vas a poder pagar servicios desde esta sección.
        </p>
      )}
    </section>
  );
};

export default PayServicesPage;
