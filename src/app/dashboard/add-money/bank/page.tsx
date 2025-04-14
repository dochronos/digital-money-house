import AliasAndCvu from "@/components/dashboard/profile/AliasAndCvu";
import { getAccount } from "@/services/account.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function AddMoneyBankPage() {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);

  return (
    <section className="p-5 md:p-8 xl:p-12">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Transferencia bancaria</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Usá tu alias o CVU para recibir transferencias en tu cuenta.
        </p>
      </header>

      <AliasAndCvu accountData={accountData} />
    </section>
  );
}

