"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputText from "@/components/form/InputText";
import SubmitButton from "@/components/form/SubmitButton";
import { UserDataType } from "@/types/user.types";
import { updateUser } from "@/services/user.service";
import { useState } from "react";
import { toast } from "sonner";

type ProfileFormProps = {
  userData: UserDataType;
  token: string;
};

const schema = yup.object().shape({
  firstname: yup.string().required("El nombre es obligatorio"),
  lastname: yup.string().required("El apellido es obligatorio"),
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  phone: yup.string().required("El teléfono es obligatorio"),
});

export type ProfileFormType = yup.InferType<typeof schema>;

export default function ProfileForm({ userData, token }: ProfileFormProps) {
  const [loading, setLoading] = useState(false);

  const methods = useForm<ProfileFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      phone: userData.phone,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: ProfileFormType) => {
    try {
      setLoading(true);
      // Corregido el orden de los argumentos
      await updateUser(userData.id, data, token);
      toast.success("Perfil actualizado con éxito");
    } catch (error: any) {
      toast.error("Error al actualizar perfil");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mb-10">
        <h1 className="text-2xl font-bold">Mis datos</h1>

        <InputText
          type="text"
          fieldName="firstname"
          placeholder="Nombre"
          errorText={errors.firstname?.message}
        />
        <InputText
          type="text"
          fieldName="lastname"
          placeholder="Apellido"
          errorText={errors.lastname?.message}
        />
        <InputText
          type="email"
          fieldName="email"
          placeholder="Correo electrónico"
          errorText={errors.email?.message}
        />
        <InputText
          type="text"
          fieldName="phone"
          placeholder="Teléfono"
          errorText={errors.phone?.message}
        />

        <SubmitButton text={loading ? "Guardando..." : "Guardar cambios"} />
      </form>
    </FormProvider>
  );
}