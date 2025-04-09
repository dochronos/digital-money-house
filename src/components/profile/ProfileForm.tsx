"use client";

import EditUserIcon from "@/components/common/Icons/EditUserIcon";
import { UserDataType } from "@/types/user.types";

type ProfileFormProps = {
  userData: UserDataType;
  token: string;
};

const ProfileForm = ({ userData }: ProfileFormProps) => {
  const fields = [
    {
      label: "Email",
      value: userData.email,
      editable: false,
    },
    {
      label: "Nombre y apellido",
      value: `${userData.firstname} ${userData.lastname}`,
      editable: true,
    },
    {
      label: "CUIT",
      value: userData.dni,
      editable: true,
    },
    {
      label: "Teléfono",
      value: userData.phone,
      editable: true,
    },
    {
      label: "Contraseña",
      value: "********",
      editable: true,
    },
  ];

  const handleEditClick = (label: string) => {
    console.log(`Editando ${label}`);
    
  };

  return (
    <section className="w-full p-6 md:p-8 xl:p-10 bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <h2 className="text-xl font-bold text-dark1 pb-4 border-b border-gray1">
        Tus datos
      </h2>

      <div className="flex flex-col gap-4 mt-4">
        {fields.map((field) => (
          <div
            key={field.label}
            className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dark1/20 py-3"
          >
            <h3 className="w-full md:w-1/4 font-medium text-dark1">
              {field.label}
            </h3>

            <div className="w-full md:w-3/4 flex items-center justify-between">
              <span className="text-dark2">{field.value}</span>
              {field.editable && (
                <EditUserIcon
                  onClick={() => handleEditClick(field.label)}
                  className="w-5 h-5 cursor-pointer text-green1"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileForm;
