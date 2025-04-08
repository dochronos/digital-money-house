import AliasAndCvu from "@/components/dashboard/profile/AliasAndCvu";
import { getAccount } from "@/services/account.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function AddMoneyBankPage() {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);

  return (
    <section className="p-5 md:p-8 xl:p-12">
      <h1 className="text-2xl font-bold mb-6">Transferencia bancaria</h1>
      <AliasAndCvu accountData={accountData} />
    </section>
  );
}
