import { httpGet, httpPost, httpPut } from './common/http';

const BASE_ENDPOINT = '/users';

export const getUser = async (token: string, userId: string) => {
  return await httpGet(`${BASE_ENDPOINT}/${userId}`, token);
};

interface NewUserData {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  dni: string;
  password: string;
}

export const newUser = async (data: NewUserData) => {
  try {
    const response = await httpPost(BASE_ENDPOINT, data);
    return response;
  } catch (error: any) {
    if (error instanceof Error && 'response' in error) {
      const response = (error as any).response as Response;
      if (response.status === 409) {
        throw new Error('Error: El email ya se encuentra registrado.');
      }
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al crear la cuenta');
    }
    throw error;
  }
};

export const updateUser = async (userId: string, data: Partial<NewUserData>) => {
  return await httpPut(`${BASE_ENDPOINT}/${userId}`, data);
};
