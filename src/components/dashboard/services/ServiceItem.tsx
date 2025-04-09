type Service = {
    id: number;
    name: string;
    provider: string;
  };
  
  type Props = {
    service: Service;
  };
  
  export const ServiceItem = ({ service }: Props) => {
    return (
      <li className="w-full border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-dark1">{service.name}</h3>
            <p className="text-sm text-gray-500">{service.provider}</p>
          </div>
          <span className="text-sm text-green font-bold">Pagar</span>
        </div>
      </li>
    );
  };
  