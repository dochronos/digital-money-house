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

      <main className="relative w-full grow bg-bg-mobile bg-cover bg-center bg-no-repeat md:bg-bg-desktop md:bg-[40%_25%] max-w-screen-xl mx-auto">
        <section className="relative z-10 flex flex-col gap-10 px-5 py-10 md:px-14 xl:px-20">
          {/* Textos principales */}
          <div className="w-full md:w-3/5 xl:w-1/2 flex flex-col gap-5">
            <h1 className="text-white font-semibold text-[27px] leading-[30px] md:font-normal md:text-5xl md:leading-[50px]">
              De ahora en adelante, hacés más con tu dinero
            </h1>
            <div className="w-1/6 border-t-4 border-green md:w-1/4 md:hidden"></div>
            <h3 className="text-xl text-green md:text-[34px] xl:text-4xl">
              Tu nueva{" "}
              <span className="font-bold block md:inline">billetera virtual</span>
            </h3>
          </div>

          {/* Tarjetas informativas */}
          <div className="relative z-20 flex flex-col items-center gap-6 md:flex-row md:justify-center">
            <CardLanding
              title={cardsData.transfer.title}
              paragraph={cardsData.transfer.description}
            />
            <CardLanding
              title={cardsData.services.title}
              paragraph={cardsData.services.description}
            />
          </div>
        </section>

        {/* Capa decorativa inferior */}
        <div className="absolute bottom-0 left-0 w-full h-[45%] bg-green rounded-t-[30px] z-0 md:h-[434px] xl:h-[30%]" />
      </main>
    </>
  );
};

export default LandingPage;
