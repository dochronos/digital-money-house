// src/context/tokenContext.ts
import { create } from 'zustand';

interface TokenState {
  token: string;
  setToken: (token: string) => void;
}

export const useToken = create<TokenState>((set) => ({
  token: '',
  setToken: (token) => set({ token }),
}));
