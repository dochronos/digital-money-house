export default function DashboardPage() {
  return (
    <div className="p-5 md:p-8 xl:p-12">
      <h1 className="text-2xl font-bold mb-6">Resumen</h1>

      <div className="space-y-6">
        {/* Aquí se puede incluir un resumen financiero o balance general */}
        <section className="bg-dark2 p-4 rounded-xl shadow">
          <p className="text-white">Balance actual: $10,000</p>
        </section>

        {/* Transacciones recientes (mock o real luego) */}
        <section className="bg-dark2 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Últimas transacciones</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>- Compra en MercadoLibre: $-500</li>
            <li>- Transferencia recibida: $+1,200</li>
            <li>- Pago de servicios: $-300</li>
          </ul>
        </section>

        {/* Accesos rápidos */}
        <section className="flex gap-4">
          <button className="bg-green text-dark1 px-4 py-2 rounded-md font-semibold hover:bg-green/80 transition">
            Cargar dinero
          </button>
          <button className="bg-green text-dark1 px-4 py-2 rounded-md font-semibold hover:bg-green/80 transition">
            Pagar servicios
          </button>
        </section>
      </div>
    </div>
  );
}

