"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

export interface AuthContextType {
  token: string | null;
  accountId: number | null;
  login: (token: string, accountId: number) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [accountId, setAccountId] = useState<number | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedAccountId = localStorage.getItem("accountId");

    if (savedToken && savedAccountId) {
      setToken(savedToken);
      setAccountId(Number(savedAccountId));
    }
  }, []);

  const login = (newToken: string, newAccountId: number) => {
    setToken(newToken);
    setAccountId(newAccountId);
    localStorage.setItem("token", newToken);
    localStorage.setItem("accountId", newAccountId.toString());
  };

  const logout = () => {
    setToken(null);
    setAccountId(null);
    localStorage.removeItem("token");
    localStorage.removeItem("accountId");
  };

  return (
    <AuthContext.Provider value={{ token, accountId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
