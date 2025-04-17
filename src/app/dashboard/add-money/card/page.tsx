import { getAccount } from "@/services/account.service";
import { getAllCards } from "@/services/cards.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";
import dynamic from "next/dynamic";
import { AddMoneyCardClientProps } from "./client";

const AddMoneyCardClient = dynamic<AddMoneyCardClientProps>(
  () => import("./client.js").then((mod) => mod.AddMoneyCardClient),
  { ssr: false }
);

const AddMoneyCardPage = async () => {
  const token = await getTokenFromCookie();
  const accountData = await getAccount(token);
  const cardsList = await getAllCards(accountData.id, token);

  return (
    <AddMoneyCardClient
      token={token}
      accountId={accountData.id}
      cardsList={cardsList}
    />
  );
};

export default AddMoneyCardPage;
