export type RegisterFormType = {
    firstname: string;
    lastname: string;
    dni: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
  };
  
  export type RegisterBodyType = {
    dni: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    phone: string;
  };
  
  export type RegisterResponseType = {
    account_id: number;
    email: string;
    user_id: number;
  };
  
  export type UserDataType = {
    id: string;
    firstname: string;
    lastname: string;
    dni: string;
    email: string;
    password: string;
    phone: string;
  };
  