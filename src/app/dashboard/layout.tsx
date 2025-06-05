import Breadcrumb from "@/components/layout/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { getAccount } from "@/services/account.service";
import { getUser } from "@/services/user.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await getTokenFromCookie();
  const accountData = await getAccount(token);
  const userId = accountData.user_id;
  const userData = await getUser(token, userId);

  return (
    <>
      <Navbar
        logoLink="/"
        logoClassName="fill-green"
        isLogged
        userName={`${userData.firstname} ${userData.lastname}`}
      />

      <main className="w-full flex flex-col grow md:flex-row bg-gray1 overflow-x-hidden">
        {/* Sidebar en pantallas medianas en adelante */}
        <aside className="hidden md:block md:bg-green md:w-2/5 xl:w-1/5">
          <Sidebar />
        </aside>

        {/* Contenido principal */}
        <div className="w-full gap-5 md:px-12 md:py-14 xl:px-20 xl:py-10 flex-col flex">
          {/* Breadcrumb solo visible en móviles */}
          <div className="w-full flex md:hidden">
            <Breadcrumb />
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
