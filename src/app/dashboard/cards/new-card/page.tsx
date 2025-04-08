import AddCard from "@/components/dashboard/cards/AddCard";
import { getAccount } from "@/services/account.service";
import { getAllCards } from "@/services/cards.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function NewCardPage() {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const accountId = accountData.id;
  const cardsList = await getAllCards(accountId, token);

  return (
    <section className="p-4 md:p-6 lg:p-8">
      <AddCard accountId={accountId} cardsList={cardsList} />
    </section>
  );
}
