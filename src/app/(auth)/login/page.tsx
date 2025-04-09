import { FormEmail } from "@/components/auth/login/FormEmail";
import Navbar from "@/components/layout/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar
        logoLink="/"
        logoClassName="fill-dark1"
        navbarClassName="bg-green"
      />
      <main className="w-full md:w-2/5 xl:w-1/4 md:mx-auto px-6 md:px-0 py-10 flex flex-col gap-5 items-center justify-center">
        <h1 className="w-full text-center text-white text-xl font-bold">
          ¡Hola! Ingresá tu e-mail
        </h1>

        <FormEmail />
      </main>
    </>
  );
};

export default LoginPage;

