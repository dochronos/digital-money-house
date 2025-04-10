export type CardInfo = {
    title: string;
    description: string;
  };
  
  export const cardsData: Record<"transfer" | "services", CardInfo> = {
    transfer: {
      title: "Transferí dinero",
      description:
        "Desde Digital Money House vas a poder transferir dinero a otras cuentas, así como también recibir transferencias y nuclear tu capital en nuestra billetera virtual.",
    },
    services: {
      title: "Pago de servicios",
      description:
        "Pagá mensualmente los servicios en 3 simples clicks. Fácil, rápido y conveniente. Olvidate de las facturas en papel.",
    },
  };
  