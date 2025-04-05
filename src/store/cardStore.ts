import { create } from "zustand";

interface CardData {
  cardNumber: string;
  cardHolder: string;
}

interface CardStore {
  card: CardData | null;
  setCard: (data: CardData) => void;
}

export const useCardStore = create<CardStore>((set) => ({
  card: null,
  setCard: (data) => set({ card: data }),
}));
