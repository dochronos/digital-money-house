import CardLanding from "@/components/landingPage/CardLanding";
import Navbar from "@/components/layout/Navbar";
import { cardsData } from "@/data/landing";

const LandingPage = () => {
  return (
    <>
      <Navbar
        logoLink="/"
        logoClassName="fill-green"
        buttonsLinks={[
          { href: "/login", text: "Ingresar", outline: true },
          { href: "/register", text: "Crear cuenta" },
        ]}
      />

      <main className="relative flex flex-col justify-between w-full p-5 grow bg-bg-mobile bg-cover bg-center bg-no-repeat md:p-14 xl:p-8 md:bg-bg-desktop md:bg-[40%_25%]">
        {/* Textos principales */}
        <section className="w-3/5 py-8 flex flex-col gap-5 md:w-2/3 md:pr-8 xl:p-5 xl:max-w-[550px]">
          <h1 className="text-white font-semibold text-[27px] leading-[30px] md:font-normal md:text-5xl md:leading-[50px]">
            De ahora en adelante, hacés más con tu dinero
          </h1>
          <div className="w-1/6 border-t-4 border-green md:w-1/4 md:hidden"></div>
          <h3 className="text-xl text-green md:text-[34px] xl:text-4xl">
            Tu nueva{" "}
            <span className="font-bold block md:inline">billetera virtual</span>
          </h3>
        </section>

        {/* Tarjetas informativas */}
        <section className="flex flex-col items-center gap-5 z-20 md:px-20 md:flex-row md:justify-center xl:px-40">
          <CardLanding
            title={cardsData.transfer.title}
            paragraph={cardsData.transfer.description}
          />
          <CardLanding
            title={cardsData.services.title}
            paragraph={cardsData.services.description}
          />
        </section>

        {/* Capa decorativa inferior */}
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-green rounded-t-[20px] z-10 md:rounded-t-[30px] md:h-[434px] xl:h-1/4" />
      </main>
    </>
  );
};

export default LandingPage;
