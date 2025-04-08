import Link from "next/link";
import ArrowIcon from "@/components/common/Icons/ArrowIcon";
import AliasAndCvu from "@/components/dashboard/profile/AliasAndCvu";
import ProfileData from "@/components/dashboard/profile/ProfileData";
import { getAccount } from "@/services/account.service";
import { getUser } from "@/services/user.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function ProfilePage() {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const userData = await getUser(token, accountData.user_id);

  return (
    <>
      <ProfileData userData={userData} token={token} />

      <Link
        href="/dashboard/add-money"
        className="w-full h-[64px] md:h-[116px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-green p-5 md:py-10 md:px-8 xl:px-10 flex flex-row justify-between items-center"
      >
        <span className="text-dark1 text-base md:text-xl font-bold leading-normal">
          Gestiona los medios de pago
        </span>
        <ArrowIcon className="w-4 h-4 md:w-6 md:h-6 fill-dark1" />
      </Link>

      <AliasAndCvu accountData={accountData} />
    </>
  );
}
