"use client";

import TransactionsList from "@/components/transactions/TransactionsList";
import { transactionsMock } from "@/mocks/transactionsMocks";

export default function DashboardPage() {
  return (
    <main className="p-4">
      <TransactionsList
        transactionsList={transactionsMock}
        showActivityPage={false}
      />
    </main>
  );
}
