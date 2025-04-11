"use client";

import EditUserIcon from "@/components/common/Icons/EditUserIcon";
import { UserDataType } from "@/types/user.types";

type ProfileDataProps = {
  userData: UserDataType;
  token: string;
};

const ProfileData = ({ userData }: ProfileDataProps) => {
  const fields = [
    { label: "Email", value: userData.email },
    { label: "Nombre y apellido", value: `${userData.firstname} ${userData.lastname}` },
    { label: "CUIT", value: userData.dni },
    { label: "Teléfono", value: userData.phone },
    { label: "Contraseña", value: "********" },
  ];

  return (
    <section className="w-full p-5 md:p-8 xl:pt-6 xl:pb-8 xl:px-10 flex flex-col rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <h2 className="text-xl font-bold pb-4 border-b border-gray1 md:border-dark1/0 xl:pb-2">
        Tus datos
      </h2>

      {fields.map((field) => (
        <div
          key={field.label}
          className="w-full flex flex-col md:flex-row justify-between items-start md:gap-5 md:items-center pt-2 pb-1 border-b border-dark1/30 md:border-dark1/50"
        >
          <div className="w-full md:w-2/6 xl:w-1/5">
            <h3 className="font-medium text-[16px]">{field.label}</h3>
          </div>

          <div className="w-full flex flex-row justify-between items-center md:w-4/6 xl:w-4/5">
            <span className="text-black/50 text-base w-5/6 md:w-3/6">
              {field.value}
            </span>

            {field.label !== "Email" && (
              <div className="w-6 h-6 items-center">
                <EditUserIcon className="cursor-pointer" />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProfileData;
