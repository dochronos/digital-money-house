import AddCard from "@/components/cards/AddCard";
import { getAccount } from "@/services/account.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function NewCardPage() {
  const token = await getTokenFromCookie();
  const accountData = await getAccount(token);
  const accountId = accountData.id;

  return (
    <section className="p-5 md:p-8 xl:p-12 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Agregar nueva tarjeta</h1>
      <AddCard accountId={accountId} />
    </section>
  );
}
