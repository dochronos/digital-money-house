import { create } from "zustand";

type CardData = {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
};

type CardStore = {
  card: CardData | null;
  setCard: (data: CardData) => void;
};

export const useCardStore = create<CardStore>((set) => ({
  card: null,
  setCard: (data) => set({ card: data }),
}));
